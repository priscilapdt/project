"use client";
import { axios } from "../../api/http";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [select, setSelect] = useState(null);
  const [model, setModel] = useState(null);
  const [yearOfManufacture, setyearOfManufacture] = useState(null);
  const [brand, setBrand] = useState(null);
  const [doorsQty, setDoorsQty] = useState(null);
  const [passengerQty, setPassengerQty] = useState(null);

  const handleSubmit = () => {
    axios
      .post(`/create-vehicle`, {
        vehicleSelect: select,
        model,
        yearOfManufacture,
        brand,
        doorQuantity: doorsQty || null,
        passengers: passengerQty || null,
      })
      .then(() => {
        toast.success("Sucesso ao salvar os dados.");
      })
      .catch(() => {
        toast.error("Ocorreu um erro inesperado.");
      });
  };

  return (
    <>
      <Typography className="mb-5 text-justify" variant="h6" component="div">
        Informe as informações do veículo abaixo:
      </Typography>
      <FormControl sx={{ width: 235 }}>
        <InputLabel>Selecione o tipo de veículo</InputLabel>
        <Select
          label="Selecione o tipo de veículo"
          onChange={(event) => setSelect(event.target.value)}
        >
          <MenuItem value={"car"}>Carro</MenuItem>
          <MenuItem value={"motorcycle"}>Moto</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <TextField
        label="Modelo"
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
      />
      <br />
      <br />
      <TextField
        label="Ano de fabricação"
        type="number"
        onChange={(e) =>
          setyearOfManufacture(
            (e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 4))
          )
        }
        value={yearOfManufacture}
      />
      <br />
      <br />
      <TextField
        label="Marca"
        type="text"
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
      />
      <br />
      <br />
      {select === "car" && (
        <FormControl sx={{ width: 235 }}>
          <InputLabel>Quantidade de portas</InputLabel>
          <Select
            label="Quantidade de portas"
            onChange={(event) => setDoorsQty(event.target.value)}
          >
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
          </Select>
        </FormControl>
      )}
      {select === "motorcycle" && (
        <FormControl sx={{ width: 235 }}>
          <InputLabel>Quantidade de passageiros</InputLabel>
          <Select
            label="Quantidade de passageiros"
            onChange={(event) => setPassengerQty(event.target.value)}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
          </Select>
        </FormControl>
      )}
      <div className="mt-5 ">
        <Button
          disabled={
            !select ||
            !model ||
            !yearOfManufacture ||
            !brand ||
            (!doorsQty && !passengerQty)
          }
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
