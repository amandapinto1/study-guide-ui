import axios from "axios";

const path = window.location.origin;

export const GetAluno = async () => {
  const resposta = await axios.get(`${path}/_json/aluno.json`);
  if (resposta.status !== 200) {
    throw new Error(resposta.data.exception.errorMessage);
  } else {
    return resposta.data.message ? resposta.data.message : resposta.data;
  }
}

  export const GetGrades = async () => {
    const resposta = await axios.get(`${path}/_json/notas.json`);
    if (resposta.status !== 200) {
      throw new Error(resposta.data.exception.errorMessage);
    } else {
      return resposta.data.message ? resposta.data.message : resposta.data;
    }
  }

