"use client";
import { moneyFormat, digitOnly } from "@/mask";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { axios } from "../../api/http";

const Page = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [money, setMoney] = useState(null);

  const handleSubmit = () => {};

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
          disabled={!totalPrice || !money}
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
          <b>O valor do troco: {moneyFormat(money)}</b>
          <br />
          <b>A quantidade notas de cada tipo :</b>
        </Alert>
      </div>
    </>
  );
};

export default Page;
