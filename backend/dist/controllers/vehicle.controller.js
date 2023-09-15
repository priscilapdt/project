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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = exports.Car = void 0;
const path_1 = __importDefault(require("path"));
const file_1 = require("../file");
const filePath = path_1.default.resolve("database/vehicles.json");
class VehicleController {
}
_a = VehicleController;
VehicleController.post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = req.body, { vehicleSelect } = _b, body = __rest(_b, ["vehicleSelect"]);
    if (vehicleSelect === "car") {
        const carObject = new Car(body);
        if (!!carObject) {
            (() => __awaiter(void 0, void 0, void 0, function* () {
                const message = yield (0, file_1.writeFile)(carObject.toObject(), filePath);
                if (message.error == true)
                    return res.status(500).send(message);
                else
                    return res.status(200).send(message);
            }))();
        }
    }
    else if (vehicleSelect === "motorcycle") {
        const motorObject = new Motorcycle(body);
        if (!!motorObject) {
            (() => __awaiter(void 0, void 0, void 0, function* () {
                const message = yield (0, file_1.writeFile)(motorObject.toObject(), filePath);
                if (message.error == true)
                    return res.status(500).send(message);
                else
                    return res.status(200).send(message);
            }))();
        }
    }
});
exports.default = VehicleController;
class Car {
    constructor(atributes) {
        this.toObject = () => {
            return {
                type: "car",
                model: this.model,
                yearOfManufacture: this.yearOfManufacture,
                doorQuantity: 4,
                brand: this.brand,
            };
        };
        this.model = atributes.model;
        this.yearOfManufacture = atributes.yearOfManufacture;
        this.doorQuantity = 4;
        this.brand = atributes.brand;
        if (!this.model || !this.yearOfManufacture || !this.brand)
            throw "your request is missing some parameters";
    }
}
exports.Car = Car;
class Motorcycle {
    constructor(atributes) {
        this.toObject = () => {
            return {
                type: "motorcycle",
                model: this.model,
                yearOfManufacture: this.yearOfManufacture,
                doorQuantity: null,
                brand: this.brand,
                passengers: this.passengers,
                wheelNumber: 2,
            };
        };
        this.model = atributes.model;
        this.yearOfManufacture = atributes.yearOfManufacture;
        this.doorQuantity = null;
        this.brand = atributes.brand;
        this.passengers = atributes.passengers;
        this.wheelNumber = 2;
        if (!this.passengers || !this.wheelNumber)
            throw "your request is missing some parameters";
    }
}
exports.Motorcycle = Motorcycle;
