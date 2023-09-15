"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _express = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const cep_controller_1 = __importDefault(require("./controllers/cep.controller"));
const vehicle_controller_1 = __importDefault(require("./controllers/vehicle.controller"));
const palindrome_controller_1 = __importDefault(require("./controllers/palindrome.controller"));
const money_change_controller_1 = __importDefault(require("./controllers/money-change.controller"));
const express = _express.express;
const app = express();
const route = (0, express_1.Router)();
app.use((0, cors_1.default)());
app.use(express.json());
route.get("/palindrome", palindrome_controller_1.default.get);
route.post("/create-money-change", money_change_controller_1.default.post);
route.get("/cep", cep_controller_1.default.get);
route.post("/create-vehicle", vehicle_controller_1.default.post);
app.use(route);
app.listen(3001, () => "server running on port 3001");
exports.default = app;
