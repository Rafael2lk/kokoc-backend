"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AchievementsModel_1 = __importDefault(require("../Models/AchievementsModel"));
const router = express_1.default.Router();
router.post("/achievement/create", async (req, res) => {
    try {
        const achievement = await AchievementsModel_1.default.create(req.body);
        res.status(201).json(achievement);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать достижение" });
    }
});
router.get("/achievements", async (_req, res) => {
    try {
        const achievements = await AchievementsModel_1.default.findAll();
        res.json(achievements);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить достижения" });
    }
});
router.get("/achievement/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const achievement = await AchievementsModel_1.default.findByPk(id);
        if (achievement) {
            res.json(achievement);
        }
        else {
            res.status(404).json({ error: "Достижение не найдено" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить достижение" });
    }
});
router.put("/achievement/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const achievement = await AchievementsModel_1.default.findByPk(id);
        if (achievement) {
            await achievement.update(req.body);
            res.json(achievement);
        }
        else {
            res.status(404).json({ error: "Достижение не найдено" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить достижение" });
    }
});
router.delete("/achievement/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const achievement = await AchievementsModel_1.default.findByPk(id);
        if (achievement) {
            await achievement.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Достижение не найдено" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить достижение" });
    }
});
exports.default = router;
