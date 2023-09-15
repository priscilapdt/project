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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
function writeFile(data, archiveName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fileData = fs_1.default.readFileSync(archiveName, "utf8") || "[]";
            const dataJson = JSON.parse(fileData);
            dataJson.push(data);
            fs_1.default.writeFileSync(archiveName, JSON.stringify(dataJson, null, 2));
        }
        catch (error) {
            return {
                error: true,
                message: "Failed to create file",
                thrownError: error,
            };
        }
        return {
            error: false,
            message: "File created",
        };
    });
}
exports.writeFile = writeFile;
function readFile(archiveName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = fs_1.default.readFileSync(archiveName, "utf8") || "[]";
            const dataJson = JSON.parse(data.toString());
            return {
                data: dataJson,
            };
        }
        catch (error) {
            return {
                error: true,
                message: "Failed to read file",
            };
        }
    });
}
exports.readFile = readFile;
