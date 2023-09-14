"use client";
import { cepFormat, cepDigitOnly } from "@/mask";
import { axios } from "../../api/http";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [cepOne, setCepOne] = useState(null);
  const [cepTwo, setCepTwo] = useState(null);
  const [cepThree, setCepThree] = useState(null);
  const [cepFour, setCepFour] = useState(null);
  const [cepFive, setCepFive] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = () => {
    axios
      .get(`/cep`, {
        params: {
          cepOne: cepOne,
          cepTwo: cepTwo,
          cepThree: cepThree,
          cepFour: cepFour,
          cepFive: cepFive,
        },
      })
      .then(({ data }) => {
        setResults(data);
        toast.success("Sucesso ao encontrar os dados referenets aos Cep's.");
      })
      .catch(() => {
        toast.error("Ocorreu um erro inesperado.");
      });
  };

  return (
    <>
      <Typography className="mb-5 text-justify" variant="h6" component="div">
        Informe os Cep's para a consulta abaixo:
      </Typography>
      <div className="flex">
        <TextField
          label="Cep número 1"
          type="text"
          onChange={(e) => setCepOne(cepDigitOnly(e.target.value))}
          value={cepFormat(cepOne)}
        />
        {results && (
          <div className="flex w-80 ml-5">
            <Alert icon={false} severity="info">
              <b>
                Rua: {results.cepOne.adress}
                <br />
                Bairro: {results.cepOne.neighborhood}
                <br />
                Cidade: {results.cepOne.city}
                <br />
                Estado: {results.cepOne.state}
              </b>
            </Alert>
          </div>
        )}
      </div>
      <br />
      <div className="flex">
        <TextField
          label="Cep número 2"
          type="text"
          onChange={(e) => setCepTwo(cepDigitOnly(e.target.value))}
          value={cepFormat(cepTwo)}
        />
        {results && (
          <div className="flex w-80 ml-5">
            <Alert icon={false} severity="info">
              <b>
                Rua: {results.cepTwo.adress}
                <br />
                Bairro: {results.cepTwo.neighborhood}
                <br />
                Cidade: {results.cepTwo.city}
                <br />
                Estado: {results.cepTwo.state}
              </b>
            </Alert>
          </div>
        )}
      </div>
      <br />
      <div className="flex">
        <TextField
          label="Cep número 3"
          type="text"
          onChange={(e) => setCepThree(cepDigitOnly(e.target.value))}
          value={cepFormat(cepThree)}
        />
        {results && (
          <div className="flex w-80 ml-5">
            <Alert icon={false} severity="info">
              <b>
                Rua: {results.cepThree.adress}
                <br />
                Bairro: {results.cepThree.neighborhood}
                <br />
                Cidade: {results.cepThree.city}
                <br />
                Estado: {results.cepThree.state}
              </b>
            </Alert>
          </div>
        )}
      </div>
      <br />
      <div className="flex">
        <TextField
          label="Cep número 4"
          type="text"
          onChange={(e) => setCepFour(cepDigitOnly(e.target.value))}
          value={cepFormat(cepFour)}
        />
        {results && (
          <div className="flex w-80 ml-5">
            <Alert icon={false} severity="info">
              <b>
                Rua: {results.cepFour.adress}
                <br />
                Bairro: {results.cepFour.neighborhood}
                <br />
                Cidade: {results.cepFour.city}
                <br />
                Estado: {results.cepFour.state}
              </b>
            </Alert>
          </div>
        )}
      </div>
      <br />
      <div className="flex">
        <TextField
          label="Cep número 5"
          type="text"
          onChange={(e) => setCepFive(cepDigitOnly(e.target.value))}
          value={cepFormat(cepFive)}
        />
        {results && (
          <div className="flex w-80 ml-5">
            <Alert icon={false} severity="info">
              <b>
                Rua: {results.cepFive.adress}
                <br />
                Bairro: {results.cepFive.neighborhood}
                <br />
                Cidade: {results.cepFive.city}
                <br />
                Estado: {results.cepFive.state}
              </b>
            </Alert>
          </div>
        )}
      </div>
      <div className="mt-5 ">
        <Button
          disabled={!cepOne || !cepTwo || !cepThree || !cepFour || !cepFive}
          className=" pl-2 pr-2"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </div>
    </>
  );
};

export default Page;
