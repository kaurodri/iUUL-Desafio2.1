import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const chaveAPI = process.env.CHAVE_API;
const baseURL = 'https://v6.exchangerate-api.com/v6';

export default async function obterCambio(origem, destino) {
  try {
    const solicitar = await axios.get(`${baseURL}/${chaveAPI}/pair/${origem}/${destino}`);

    if (solicitar.data.result === 'success') {
      return solicitar.data.conversion_rate;
    } else {
      throw new Error('Erro ao obter a taxa de conversão.');
    }
  } catch (error) {
    throw new Error(`Erro na comunicação com a API: ${error.message}`);
  }
}