"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserStatisticModel_1 = __importDefault(require("../Models/UserStatisticModel"));
const router = express_1.default.Router();
router.post("/user-statistic/create", async (req, res) => {
    try {
        const userStatistic = await UserStatisticModel_1.default.create(req.body);
        res.status(201).json(userStatistic);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать запись в UserStatistic" });
    }
});
router.get("/user-statistic", async (_req, res) => {
    try {
        const userStatistics = await UserStatisticModel_1.default.findAll();
        res.json(userStatistics);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить записи из UserStatistic" });
    }
});
router.get("/user-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel_1.default.findByPk(id);
        if (userStatistic) {
            res.json(userStatistic);
        }
        else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить запись из UserStatistic" });
    }
});
router.put("/user-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel_1.default.findByPk(id);
        if (userStatistic) {
            await userStatistic.update(req.body);
            res.json(userStatistic);
        }
        else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить запись в UserStatistic" });
    }
});
router.delete("/user-statistic/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const userStatistic = await UserStatisticModel_1.default.findByPk(id);
        if (userStatistic) {
            await userStatistic.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Запись в UserStatistic не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить запись из UserStatistic" });
    }
});
exports.default = router;
