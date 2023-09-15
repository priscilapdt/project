import fetch from "node-fetch";
import { Cep } from "../interfaces";
import { Request, Response } from "express";

export default class CepController {
  static get = async (req: Request, res: Response) => {
    try {
      const params: {
        cepOne: string;
        cepTwo: string;
        cepThree: string;
        cepFour: string;
        cepFive: string;
      } = req.query as any;

      const resultsCep = await Promise.all(
        Object.entries(params).map(async ([key, value]) => {
          return [key, await this.searchCep(value)];
        })
      );

      const resultsCepObject = Object.fromEntries(resultsCep);
      return res.json(resultsCepObject);
    } catch (error) {
      return res.status(500).send(error);
    }
  };

  static searchCep = async (cep: string): Promise<Cep | undefined> => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.status == 400) throw Error("cep invalid");

    const data: {
      cepNumber: string;
      logradouro: string;
      bairro: string;
      localidade: string;
      uf: string;
    } = (await response.json()) as any;

    if (!data) throw Error("error to send request.");

    return {
      cepNumber: cep,
      address: data.logradouro || "N/E",
      neighborhood: data.bairro || "N/E",
      city: data.localidade,
      state: data.uf,
    } as Cep;
  };
}
