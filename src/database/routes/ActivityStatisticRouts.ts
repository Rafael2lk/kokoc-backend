import express, { Request, Response } from "express";
import ActivityStatisticModel, { ActivityStatisticModelI } from "../Models/ActivityStatisticModel";

const router = express.Router();


router.post("/activity-statistic/create", async (req: Request, res: Response) => {
  try {
    const activityStatistic = await ActivityStatisticModel.create(req.body as ActivityStatisticModelI);
    res.status(201).json(activityStatistic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать запись статистики активности" });
  }
});


router.get("/activity-statistics", async (_req: Request, res: Response) => {
  try {
    const activityStatistics = await ActivityStatisticModel.findAll();
    res.json(activityStatistics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить записи статистики активности" });
  }
});


router.get("/activity-statistic/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activityStatistic = await ActivityStatisticModel.findByPk(id);
    if (activityStatistic) {
      res.json(activityStatistic);
    } else {
      res.status(404).json({ error: "Запись статистики активности не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить запись статистики активности" });
  }
});


router.put("/activity-statistic/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activityStatistic = await ActivityStatisticModel.findByPk(id);
    if (activityStatistic) {
      await activityStatistic.update(req.body as ActivityStatisticModelI);
      res.json(activityStatistic);
    } else {
      res.status(404).json({ error: "Запись статистики активности не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить запись статистики активности" });
  }
});


router.delete("/activity-statistic/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const activityStatistic = await ActivityStatisticModel.findByPk(id);
    if (activityStatistic) {
      await activityStatistic.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Запись статистики активности не найдена" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить запись статистики активности" });
  }
});

export default router;
