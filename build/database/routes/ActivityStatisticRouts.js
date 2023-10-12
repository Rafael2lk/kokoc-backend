"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ActivityStatisticModel_1 = __importDefault(require("../Models/ActivityStatisticModel"));
const router = express_1.default.Router();
router.post("/activity-statistic/create", async (req, res) => {
    try {
        const activityStatistic = await ActivityStatisticModel_1.default.create(req.body);
        res.status(201).json(activityStatistic);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать запись статистики активности" });
    }
});
router.get("/activity-statistics", async (_req, res) => {
    try {
        const activityStatistics = await ActivityStatisticModel_1.default.findAll();
        res.json(activityStatistics);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить записи статистики активности" });
    }
});
router.get("/activity-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activityStatistic = await ActivityStatisticModel_1.default.findByPk(id);
        if (activityStatistic) {
            res.json(activityStatistic);
        }
        else {
            res.status(404).json({ error: "Запись статистики активности не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить запись статистики активности" });
    }
});
router.put("/activity-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activityStatistic = await ActivityStatisticModel_1.default.findByPk(id);
        if (activityStatistic) {
            await activityStatistic.update(req.body);
            res.json(activityStatistic);
        }
        else {
            res.status(404).json({ error: "Запись статистики активности не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить запись статистики активности" });
    }
});
router.delete("/activity-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activityStatistic = await ActivityStatisticModel_1.default.findByPk(id);
        if (activityStatistic) {
            await activityStatistic.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Запись статистики активности не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить запись статистики активности" });
    }
});
exports.default = router;
