"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class MoneyChangeController {
}
_a = MoneyChangeController;
MoneyChangeController.post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const totalChange = body.money - body.totalPrice;
    const oneAmount = totalChange % 10;
    const tenAmount = ((totalChange % 100) - oneAmount) / 10;
    const hundredAmount = (totalChange - (oneAmount + tenAmount * 10)) / 100;
    res.json({ oneAmount, tenAmount, hundredAmount, totalChange });
});
exports.default = MoneyChangeController;
