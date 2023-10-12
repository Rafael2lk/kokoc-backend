"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DepartmentModel_1 = __importDefault(require("../Models/DepartmentModel"));
const router = express_1.default.Router();
router.post("/department/create", async (req, res) => {
    try {
        const department = await DepartmentModel_1.default.create(req.body);
        res.status(201).json(department);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось создать отдел" });
    }
});
router.get("/departments", async (_req, res) => {
    try {
        const departments = await DepartmentModel_1.default.findAll();
        res.json(departments);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить отделы" });
    }
});
router.get("/department/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const department = await DepartmentModel_1.default.findByPk(id);
        if (department) {
            res.json(department);
        }
        else {
            res.status(404).json({ error: "Отдел не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось получить отдел" });
    }
});
router.put("/department/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const department = await DepartmentModel_1.default.findByPk(id);
        if (department) {
            await department.update(req.body);
            res.json(department);
        }
        else {
            res.status(404).json({ error: "Отдел не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось обновить отдел" });
    }
});
router.delete("/department/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const department = await DepartmentModel_1.default.findByPk(id);
        if (department) {
            await department.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: "Отдел не найден" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Не удалось удалить отдел" });
    }
});
exports.default = router;
