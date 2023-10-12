import express, { Request, Response } from "express";
import DepartmentModel, { DepartmentModelI } from "../Models/DepartmentModel";

const router = express.Router();


router.post("/department/create", async (req: Request, res: Response) => {
  try {
    const department = await DepartmentModel.create(req.body as DepartmentModelI);
    res.status(201).json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать отдел" });
  }
});

router.get("/departments", async (_req: Request, res: Response) => {
  try {
    const departments = await DepartmentModel.findAll();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить отделы" });
  }
});


router.get("/department/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const department = await DepartmentModel.findByPk(id);
    if (department) {
      res.json(department);
    } else {
      res.status(404).json({ error: "Отдел не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить отдел" });
  }
});


router.put("/department/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const department = await DepartmentModel.findByPk(id);
    if (department) {
      await department.update(req.body as DepartmentModelI);
      res.json(department);
    } else {
      res.status(404).json({ error: "Отдел не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить отдел" });
  }
});


router.delete("/department/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const department = await DepartmentModel.findByPk(id);
    if (department) {
      await department.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Отдел не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить отдел" });
  }
});

export default router;
