"use client";
import { moneyFormat, digitOnly } from "@/mask";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { axios } from "../../api/http";
import { toast } from "react-toastify";

const Page = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [money, setMoney] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = () => {
    axios
      .post(`/create-money-change`, {
        totalPrice: parseInt(totalPrice),
        money: parseInt(money),
      })
      .then(({ data }) => {
        setResults(data);
        toast.success("Sucesso ao calcular o troco.");
      })
      .catch(() => {
        toast.error("Ocorreu um erro inesperado.");
      });
  };

  return (
    <>
      <Typography className="mb-5 text-justify" variant="h6" component="div">
        Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais.
        Informe o valor total da compra e o valor em dinheiro entregue ao caixa.
      </Typography>
      <div className="flex justify-around justify-items-center mt-3">
        <TextField
          label="Insira o valor total da compra"
          type="text"
          onChange={(e) => setTotalPrice(digitOnly(e.target.value))}
          value={moneyFormat(totalPrice || 0)}
        />
        <TextField
          label="Informe o valor em dinheiro entregue"
          onChange={(e) => setMoney(digitOnly(e.target.value))}
          value={moneyFormat(money || 0)}
        />
        <Button
          disabled={
            parseInt(totalPrice) > parseInt(money) || !totalPrice || !money
          }
          className="pl-2 pr-2"
          size="small"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Calcular
        </Button>
      </div>
      <div className="mt-6 w-full ">
        <Alert icon={false} severity="info">
          <b>O valor da compra: {moneyFormat(totalPrice)} </b>
          <br />
          <b>O valor em dinheiro entregue ao caixa: {moneyFormat(money)}</b>
          <br />
          {results && (
            <div>
              <b>O valor do troco: {moneyFormat(results.totalChange)}</b>
              <br />
              <b>
                A quantidade notas de cada tipo: <br />
                Quantidade de notas de um real = {results.oneAmount} <br />
                Quantidade de notas de dez reais = {results.tenAmount} <br />
                Quantidade de notas de cem reais = {results.hundredAmount}
              </b>
            </div>
          )}
        </Alert>
      </div>
    </>
  );
};

export default Page;
