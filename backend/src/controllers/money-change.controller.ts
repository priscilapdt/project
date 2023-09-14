import { Request, Response } from "express";
import { MoneyChangeParams } from "../interfaces";

export default class MoneyChangeController {
  static post = async (req: Request, res: Response) => {
    const body: MoneyChangeParams = req.body;
    const totalChange = body.money - body.totalPrice;
    const oneAmount = totalChange % 10;
    const tenAmount = ((totalChange % 100) - oneAmount) / 10;
    const hundredAmount = (totalChange - (oneAmount + tenAmount * 10)) / 100;

    res.json({ oneAmount, tenAmount, hundredAmount, totalChange });
  };
}
