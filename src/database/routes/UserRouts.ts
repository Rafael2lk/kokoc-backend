import express, { Request, Response } from "express";
import UserModel, { UserModelI } from "../Models/UserModel";
import { Op } from "sequelize";
const router = express.Router();

router.post("/user/create", async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body as UserModelI);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать пользователя" });
  }
});


router.get("/users", async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить пользователей" });
  }
});


router.get("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Пользователь не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить пользователя" });
  }
});


router.put("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      await user.update(req.body as UserModelI);
      res.json(user);
    } else {
      res.status(404).json({ error: "Пользователь не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить пользователя" });
  }
});


router.delete("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Пользователь не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить пользователя" });
  }
});

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({
      where: {
        email,
        password,
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Пользователь не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось выполнить вход" });
  }
});

export default router;
