import express, { Request, Response } from "express";
import AchievementsModel, { AchievementsModelAttributes } from "../Models/AchievementsModel";

const router = express.Router();


router.post("/achievement/create", async (req: Request, res: Response) => {
  try {
    const achievement = await AchievementsModel.create(req.body as AchievementsModelAttributes);
    res.status(201).json(achievement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать достижение" });
  }
});


router.get("/achievements", async (_req: Request, res: Response) => {
  try {
    const achievements = await AchievementsModel.findAll();
    res.json(achievements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить достижения" });
  }
});


router.get("/achievement/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const achievement = await AchievementsModel.findByPk(id);
    if (achievement) {
      res.json(achievement);
    } else {
      res.status(404).json({ error: "Достижение не найдено" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить достижение" });
  }
});


router.put("/achievement/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const achievement = await AchievementsModel.findByPk(id);
    if (achievement) {
      await achievement.update(req.body as AchievementsModelAttributes);
      res.json(achievement);
    } else {
      res.status(404).json({ error: "Достижение не найдено" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить достижение" });
  }
});

router.delete("/achievement/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const achievement = await AchievementsModel.findByPk(id);
    if (achievement) {
      await achievement.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Достижение не найдено" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить достижение" });
  }
});

export default router;
