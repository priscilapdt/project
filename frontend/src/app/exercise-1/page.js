"use client";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { axios } from "../../api/http";
import { toast } from "react-toastify";

const Page = () => {
  const [initialNumber, setInitialNumber] = useState(null);
  const [finalNumber, setFinalNumber] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = () => {
    axios
      .get(`/palindrome`, {
        params: {
          initialValue: parseInt(initialNumber),
          finalValue: parseInt(finalNumber),
        },
      })
      .then(({ data }) => {
        setResults(data);
        toast.success("Sucesso ao encontrar os números palíndromos.");
      })
      .catch(() => {
        toast.error("Ocorreu um erro inesperado.");
      });
  };

  return (
    <>
      <Typography className="mb-5 text-justify" variant="h6" component="div">
        Números palíndromos são aqueles que escritos da direita para esquerda ou
        da esquerda para direita tem o mesmo valor. Escolha dois números para
        visualizar os todos os números palíndromos pertecentes a esse intervalo:
      </Typography>
      <div className="flex justify-around justify-items-center mt-3">
        <TextField
          label="Digite um número inicial"
          type="number"
          onChange={(e) =>
            setInitialNumber(
              (e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0))
            )
          }
          value={initialNumber}
        />
        <TextField
          label="Digite um número final"
          type="number"
          onChange={(e) =>
            setFinalNumber(
              (e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0))
            )
          }
          value={finalNumber}
        />
        <Button
          disabled={
            !initialNumber ||
            !finalNumber ||
            initialNumber === finalNumber ||
            finalNumber < initialNumber
          }
          className="pl-2 pr-2"
          size="small"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </div>
      {results && (
        <div className="mt-6 w-96">
          <Alert icon={false} severity="info">
            <p>
              Os números palíndromos encontrados entre {results.initialValue} e{" "}
              {results.finalValue} são:
            </p>
            <ul>
              {results.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Alert>
        </div>
      )}
    </>
  );
};

export default Page;
