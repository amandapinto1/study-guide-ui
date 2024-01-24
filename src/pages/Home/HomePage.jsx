import React, { useEffect, useState } from "react";
import { ContainerHome, AlunoNome, ButtonContainer } from "./styles/styles";
import { GetAluno } from "../../services/servicos";
import ButtonNext from "../../Components/ButtonNext/ButtonNext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    GetAluno().then((result) => {
      setStudent(result);
    });
  }, [setStudent]);

  const handleClick = (id) =>{
    navigate(`student-profile/${id}`, {state:student})
  }

  return (
    <ContainerHome>
      {student && (
        <>
          <AlunoNome> Olá, {student.name}</AlunoNome>
          <div style={{ width: "600px" }}>
            <h3>
              Seja bem vindo ao sistema de geração de rotina de estudo, clique
              no botão abaixo para gerar sua rotina personalizada de acordo com
              seu desempenho em simulados.
            </h3>
          </div>
          <ButtonContainer>
          <ButtonNext title="Descobrir" onClick={() => handleClick(student.id)}/>
          </ButtonContainer>
        </>
      )}
    </ContainerHome>
  );
};

export default HomePage;
