import express from "express";
import cors from "cors";

import { Router, Request, Response } from "express";
import { PalindromeParams } from "./interfaces";

const app = express();

const route = Router();

app.use(cors());

app.use(express.json());

route.post("/get-palindrome", (req: Request, res: Response) => {
  const body: PalindromeParams = req.body;

  const items = [];

  function isPalindrome(number: String) {
    for (let x = 0, y = number.length, z = y / 2; x < z; x++) {
      if (number[x] !== number[y - x - 1]) {
        return false;
      }
    }
    return true;
  }

  for (let i = body.initialValue; i < body.finalValue; i++) {
    if (isPalindrome(i.toString())) {
      items.push(i);
    }
  }

  res.json({ items });
});

route.post("/get-money-change", (req: Request, res: Response) => {
  res.json({ message: "exercise 2" });
});

app.use(route);

app.listen(3001, () => "server running on port 3001");
