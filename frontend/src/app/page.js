"use client";
import { Alert, Typography } from "@mui/material";
const Home = () => {
  return (
    <>
      <div className="flex justify-center justify-items-center mt-3">
        <Alert className="w-1/2 ml-5 p-5" icon={false} severity="info">
          <Typography
            className="mb-5 text-justify"
            variant="h6"
            component="div"
          >
            Desenvolvimento de um teste de programação que enfoca a criação de
            novas funcionalidades e o uso de APIs. O teste requer a construção
            de uma interface front-end que apresenta as atividades propostas e
            também inclui um back-end onde as lógicas das funcionalidades são
            implementadas. Além disso, foram criados testes para assegurar a
            qualidade da aplicação.
          </Typography>
        </Alert>
      </div>
    </>
  );
};

export default Home;
