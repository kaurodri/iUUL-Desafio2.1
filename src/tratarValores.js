import obterCambio from './services/ExchangeRateService.js';
import { validarEntradas, formatarValor } from './utils/organizarValores.js';

export default async function obterValor(valor, origem, destino) {

  if (!validarEntradas(valor, origem, destino)) return;

  try {
    const taxa = await obterCambio(origem, destino);
    const calculo = valor * taxa;

    const valorConvertido = formatarValor(calculo);
    const taxaFormatada = taxa.toFixed(6);

    return {
      origem: valor.toFixed(2),
      destino: valorConvertido,
      taxa: taxaFormatada
    };

  } catch (error) {
    return error.message
  }
};