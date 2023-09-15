import path from "path";
import { Request, Response } from "express";
import { writeFile } from "../file";
import { CarInterface, MotorcycleInterface } from "../interfaces";

const filePath = path.resolve("database/vehicles.json");

export default class VehicleController {
  static post = async (req: Request, res: Response) => {
    const { vehicleSelect, ...body } = req.body;

    try {
      if (vehicleSelect === "car") {
        const carObject: Car = new Car(body);
        if (!!carObject) {
          (async () => {
            const message: any = await writeFile(
              carObject.toObject(),
              filePath
            );
            if (message.error == true) return res.status(500).send(message);
            else return res.status(200).send(message);
          })();
        }
      } else if (vehicleSelect === "motorcycle") {
        const motorObject: Motorcycle = new Motorcycle(body);
        if (!!motorObject) {
          (async () => {
            const message: any = await writeFile(
              motorObject.toObject(),
              filePath
            );
            if (message.error == true) return res.status(500).send(message);
            else return res.status(200).send(message);
          })();
        }
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  };
}
export class Car implements CarInterface {
  model: string;
  yearOfManufacture: string;
  doorQuantity: 2 | 4 | null;
  brand: string;

  constructor(atributes: CarInterface) {
    this.model = atributes.model;
    this.yearOfManufacture = atributes.yearOfManufacture;
    this.doorQuantity = atributes.doorQuantity;
    this.brand = atributes.brand;

    if (
      !this.model ||
      !this.yearOfManufacture ||
      !this.brand ||
      !this.doorQuantity
    )
      throw Error("your request is missing some parameters");
  }

  public toObject = () => {
    return {
      type: "car",
      model: this.model,
      yearOfManufacture: this.yearOfManufacture,
      doorQuantity: this.doorQuantity,
      brand: this.brand,
    };
  };
}

export class Motorcycle implements MotorcycleInterface {
  model: string;
  yearOfManufacture: string;
  readonly doorQuantity: number | null;
  brand: string;
  passengers: 2 | 4 | null;
  wheelNumber: 2;

  constructor(atributes: MotorcycleInterface) {
    this.model = atributes.model;
    this.yearOfManufacture = atributes.yearOfManufacture;
    this.doorQuantity = null;
    this.brand = atributes.brand;
    this.passengers = atributes.passengers;
    this.wheelNumber = 2;

    if (
      !this.passengers ||
      !this.wheelNumber ||
      !this.model ||
      !this.yearOfManufacture ||
      !this.brand
    )
      throw Error("your request is missing some parameters");
  }

  public toObject = () => {
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
}
