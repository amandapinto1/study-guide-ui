import axios from "axios";

export const GetAluno = async () => {
  const resposta = await axios.get("_json/aluno.json");
  if (resposta.status !== 200) {
    throw new Error(resposta.data.exception.errorMessage);
  } else {
    return resposta.data.message ? resposta.data.message : resposta.data;
  }
};
