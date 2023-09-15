import { test, expect } from "vitest";
import app from "../server";
import request from "supertest";

test("Test successful palindrome request", async () => {
  const res = await request(app)
    .get("/palindrome")
    .query({ initialValue: 1, finalValue: 10 });
  expect(res.statusCode).toEqual(200);
  expect(res.body.items).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Test failure palindrome request", async () => {
  const res = await request(app).get(
    `/palindrome?initialValue=invalidstring&finalValue=10`
  );
  expect(res.statusCode).toEqual(500);
});

test("Test successful money change request", async () => {
  const res = await request(app).post(`/create-money-change`).send({
    totalPrice: 100,
    money: 150,
  });
  expect(res.status).toEqual(200);
  expect(res.body.oneAmount).toEqual(0);
  expect(res.body.tenAmount).toEqual(5);
  expect(res.body.hundredAmount).toEqual(0);
  expect(res.body.totalChange).toEqual(50);
});

test("Test failure money change request", async () => {
  const res = await request(app).post(`/create-money-change`).send({
    totalPrice: 100,
    money: 90,
  });
  expect(res.status).toEqual(500);
});

test("Test successful vehicle request", async () => {
  const carRes = await request(app).post("/create-vehicle").send({
    vehicleSelect: "car",
    model: "argo",
    yearOfManufacture: 2022,
    brand: "fiat",
    doorQuantity: 4,
  });
  expect(carRes.status).toEqual(200);

  const motorcycleRes = await request(app).post("/create-vehicle").send({
    vehicleSelect: "motorcycle",
    model: "cg-150",
    yearOfManufacture: 2018,
    brand: "Honda",
    passengers: 2,
  });
  expect(motorcycleRes.status).toEqual(200);
});

test("Test failure vehicle request", async () => {
  const carRes = await request(app).post("/create-vehicle").send({
    vehicleSelect: "car",
    yearOfManufacture: 2022,
    brand: "fiat",
    doorQuantity: 4,
  });
  expect(carRes.status).toEqual(500);

  const motorcycleRes = await request(app).post("/create-vehicle").send({
    vehicleSelect: "motorcycle",
    model: "cg-150",
    yearOfManufacture: 2018,
    passengers: 2,
  });
  expect(motorcycleRes.status).toEqual(500);
});

test("Test successful cep request", async () => {
  const res = await request(app).get("/cep").query({
    cepOne: "96015000",
    cepTwo: "96015000",
    cepThree: "96015000",
    cepFour: "96015000",
    cepFive: "96015000",
  });
  expect(res.status).toEqual(200);
  expect(res.body).toMatchObject({
    cepOne: {
      cepNumber: "96015000",
      address: "Rua Quinze de Novembro",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
    },
    cepTwo: {
      cepNumber: "96015000",
      address: "Rua Quinze de Novembro",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
    },
    cepThree: {
      cepNumber: "96015000",
      address: "Rua Quinze de Novembro",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
    },
    cepFour: {
      cepNumber: "96015000",
      address: "Rua Quinze de Novembro",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
    },
    cepFive: {
      cepNumber: "96015000",
      address: "Rua Quinze de Novembro",
      neighborhood: "Centro",
      city: "Pelotas",
      state: "RS",
    },
  });
});

test("Test failure cep request", async () => {
  const res = await request(app).get("/cep").query({
    cepOne: "96015000",
    cepTwo: "96015000",
    cepThree: "96015000",
    cepFour: "string",
    cepFive: "96015000",
  });
  expect(res.status).toEqual(500);
});
