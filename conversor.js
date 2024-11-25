import promptSync from 'prompt-sync';
import obterValor from './src/tratarValores.js';

const entrada = promptSync({ sigint: true });

async function iniciarConversor() {
  console.log('');
  const moedaOrigem = entrada('Moeda de origem: ').toUpperCase();
  if (!moedaOrigem) {
    console.log('Programa encerrado.');
    return;
  }

  const moedaDestino = entrada('Moeda de destino: ').toUpperCase();
  const valorEntrada = entrada('Valor: ');

  const valor = parseFloat(valorEntrada.replace(',', '.'));

  const resultadoConvertido = await obterValor(valor, moedaOrigem, moedaDestino);

  const valorMoedaOrigem = resultadoConvertido.origem;
  const valorMoedaDestino = resultadoConvertido.destino;
  const taxaCambio = resultadoConvertido.taxa;

  console.log(`\n${moedaOrigem} ${valorMoedaOrigem} => ${moedaDestino} ${valorMoedaDestino}`);
  console.log(`Taxa: ${taxaCambio}`);

  iniciarConversor();
}

iniciarConversor();