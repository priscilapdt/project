import express from "express";
import cors from "cors";
import { Router } from "express";
import CepController from "./controllers/cep.controller";
import vehicleController from "./controllers/vehicle.controller";
import PalindromeController from "./controllers/palindrome.controller";
import MoneyChangeController from "./controllers/money-change.controller";

const app = express();

const route = Router();

app.use(cors());

app.use(express.json());

route.get("/palindrome", PalindromeController.get);

route.post("/create-money-change", MoneyChangeController.post);

route.get("/cep", CepController.get);

route.post("/create-vehicle", vehicleController.post);

app.use(route);

app.listen(3001, () => "server running on port 3001");

export default app;
