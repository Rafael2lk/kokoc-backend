import express, { Request, Response } from "express";
import ActivityModel, { ActivityModelI } from "../Models/ActivityModel";

const router = express.Router();


router.post("/activity/create", async (req: Request, res: Response) => {
  try {
    const activity = await ActivityModel.create(req.body as ActivityModelI);
    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать активность" });
  }
});


router.get("/activities", async (_req: Request, res: Response) => {
  try {
    const activities = await ActivityModel.findAll();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить активности" });
  }
});


router.get("/activity/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activity = await ActivityModel.findByPk(id);
    if (activity) {
      res.json(activity);
    } else {
      res.status(404).json({ error: "Активность не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить активность" });
  }
});


router.put("/activity/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activity = await ActivityModel.findByPk(id);
    if (activity) {
      await activity.update(req.body as ActivityModelI);
      res.json(activity);
    } else {
      res.status(404).json({ error: "Активность не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить активность" });
  }
});


router.delete("/activity/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activity = await ActivityModel.findByPk(id);
    if (activity) {
      await activity.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Активность не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить активность" });
  }
});

export default router;
