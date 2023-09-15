import { Request, Response, response } from "express";
import { PalindromeParams } from "../interfaces";

export default class PalindromeController {
  static get = async (req: Request, res: Response) => {
    const params: PalindromeParams = req.query as any;

    if (isNaN(params.initialValue) || isNaN(params.finalValue)) {
      return res.status(500).send("valores inválidos");
    }

    const items = [];

    function isPalindrome(number: String) {
      for (let x = 0, y = number.length, z = y / 2; x < z; x++) {
        if (number[x] !== number[y - x - 1]) {
          return false;
        }
      }
      return true;
    }

    for (let i = +params.initialValue; i < +params.finalValue; i++) {
      if (isPalindrome(i.toString())) {
        items.push(i);
      }
    }

    res.json({
      items,
      initialValue: params.initialValue,
      finalValue: params.finalValue,
    });
  };
}
