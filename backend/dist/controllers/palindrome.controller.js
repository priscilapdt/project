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
class PalindromeController {
}
_a = PalindromeController;
PalindromeController.get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const items = [];
    function isPalindrome(number) {
        for (let x = 0, y = number.length, z = y / 2; x < z; x++) {
            if (number[x] !== number[y - x - 1]) {
                return false;
            }
        }
        return true;
    }
    for (let i = params.initialValue; i < params.finalValue; i++) {
        if (isPalindrome(i.toString())) {
            items.push(i);
        }
    }
    res.json({ items });
});
exports.default = PalindromeController;
