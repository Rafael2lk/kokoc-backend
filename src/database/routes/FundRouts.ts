import express, { Request, Response } from "express";
import FundModel, { FundModelI } from "../Models/FundModel";

const router = express.Router();


router.post("/fund/create", async (req: Request, res: Response) => {
  try {
    const fund = await FundModel.create(req.body as FundModelI);
    res.status(201).json(fund);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось создать фонд" });
  }
});


router.get("/funds", async (_req: Request, res: Response) => {
  try {
    const funds = await FundModel.findAll();
    res.json(funds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить фонды" });
  }
});


router.get("/fund/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fund = await FundModel.findByPk(id);
    if (fund) {
      res.json(fund);
    } else {
      res.status(404).json({ error: "Фонд не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить фонд" });
  }
});


router.put("/fund/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fund = await FundModel.findByPk(id);
    if (fund) {
      await fund.update(req.body as FundModelI);
      res.json(fund);
    } else {
      res.status(404).json({ error: "Фонд не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось обновить фонд" });
  }
});


router.delete("/fund/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fund = await FundModel.findByPk(id);
    if (fund) {
      await fund.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Фонд не найден" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось удалить фонд" });
  }
});

export default router;
