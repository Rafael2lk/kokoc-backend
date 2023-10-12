import express, { Request, Response } from "express";
import UserStatisticModel from "../Models/UserStatisticModel";
import  UserStatisticAttributes from "../Models/UserStatisticModel";


const router = express.Router();


router.post("/user-statistic/create", async (req: Request, res: Response) => {
    try {
        const userStatistic = await UserStatisticModel.create(req.body as UserStatisticAttributes);
        res.status(201).json(userStatistic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать запись в UserStatistic" });
    }
});


router.get("/user-statistic", async (_req: Request, res: Response) => {
    try {
        const userStatistics = await UserStatisticModel.findAll();
        res.json(userStatistics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить записи из UserStatistic" });
    }
});


router.get("/user-statistic/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel.findByPk(id);
        if (userStatistic) {
            res.json(userStatistic);
        } else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить запись из UserStatistic" });
    }
});


router.put("/user-statistic/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel.findByPk(id);
        if (userStatistic) {
            await userStatistic.update(req.body as UserStatisticAttributes);
            res.json(userStatistic);
        } else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить запись в UserStatistic" });
    }
});


router.delete("/user-statistic/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel.findByPk(id);
        if (userStatistic) {
            await userStatistic.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить запись из UserStatistic" });
    }
});

export default router;
