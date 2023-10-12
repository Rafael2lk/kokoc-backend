"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FundModel_1 = __importDefault(require("../Models/FundModel"));
const router = express_1.default.Router();
router.post("/fund/create", async (req, res) => {
    try {
        const fund = await FundModel_1.default.create(req.body);
        res.status(201).json(fund);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать фонд" });
    }
});
router.get("/funds", async (_req, res) => {
    try {
        const funds = await FundModel_1.default.findAll();
        res.json(funds);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить фонды" });
    }
});
router.get("/fund/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const fund = await FundModel_1.default.findByPk(id);
        if (fund) {
            res.json(fund);
        }
        else {
            res.status(404).json({ error: "Фонд не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить фонд" });
    }
});
router.put("/fund/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const fund = await FundModel_1.default.findByPk(id);
        if (fund) {
            await fund.update(req.body);
            res.json(fund);
        }
        else {
            res.status(404).json({ error: "Фонд не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить фонд" });
    }
});
router.delete("/fund/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const fund = await FundModel_1.default.findByPk(id);
        if (fund) {
            await fund.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Фонд не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить фонд" });
    }
});
exports.default = router;
