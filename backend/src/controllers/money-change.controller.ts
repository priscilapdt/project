import { Request, Response } from "express";
import { MoneyChangeParams } from "../interfaces";

export default class MoneyChangeController {
  static post = async (req: Request, res: Response) => {
    const body: MoneyChangeParams = req.body;
    if (body.money < body.totalPrice) {
      return res
        .status(500)
        .send(
          "Valor do pagamento não pode ser menor que o valor total da compra."
        );
    }
    const totalChange = body.money - body.totalPrice;
    const oneAmount = totalChange % 10;
    const tenAmount = ((totalChange % 100) - oneAmount) / 10;
    const hundredAmount = (totalChange - (oneAmount + tenAmount * 10)) / 100;

    res.json({
      money: body.money,
      totalPrice: body.totalPrice,
      oneAmount,
      tenAmount,
      hundredAmount,
      totalChange,
    });
  };
}
