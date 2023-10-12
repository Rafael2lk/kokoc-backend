"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ActivityModel_1 = __importDefault(require("../Models/ActivityModel"));
const router = express_1.default.Router();
router.post("/activity/create", async (req, res) => {
    try {
        const activity = await ActivityModel_1.default.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать активность" });
    }
});
router.get("/activities", async (_req, res) => {
    try {
        const activities = await ActivityModel_1.default.findAll();
        res.json(activities);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить активности" });
    }
});
router.get("/activity/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await ActivityModel_1.default.findByPk(id);
        if (activity) {
            res.json(activity);
        }
        else {
            res.status(404).json({ error: "Активность не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить активность" });
    }
});
router.put("/activity/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await ActivityModel_1.default.findByPk(id);
        if (activity) {
            await activity.update(req.body);
            res.json(activity);
        }
        else {
            res.status(404).json({ error: "Активность не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить активность" });
    }
});
router.delete("/activity/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await ActivityModel_1.default.findByPk(id);
        if (activity) {
            await activity.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Активность не найдена" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить активность" });
    }
});
exports.default = router;
