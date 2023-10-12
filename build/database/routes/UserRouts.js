"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const router = express_1.default.Router();
router.post("/user/create", async (req, res) => {
    try {
        const user = await UserModel_1.default.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать пользователя" });
    }
});
router.get("/users", async (_req, res) => {
    try {
        const users = await UserModel_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить пользователей" });
    }
});
router.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "Пользователь не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить пользователя" });
    }
});
router.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel_1.default.findByPk(id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        }
        else {
            res.status(404).json({ error: "Пользователь не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить пользователя" });
    }
});
router.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel_1.default.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Пользователь не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить пользователя" });
    }
});
router.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel_1.default.findOne({
            where: {
                email,
                password,
            },
        });
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "Пользователь не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось выполнить вход" });
    }
});
exports.default = router;
