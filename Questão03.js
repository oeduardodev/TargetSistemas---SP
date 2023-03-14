// Carrega o arquivo JSON com os dados de faturamento e remove os dias com valor igual a 0.0
const dados = require('./dados.json').filter(dia => dia.valor !== 0.0);

// Cria um array com os valores de faturamento de cada dia
const valoresFaturamento = dados.map(dia => dia.valor);

// Encontra o menor valor de faturamento no array
const menorValor = Math.min(...valoresFaturamento);

// Encontra o maior valor de faturamento no array
const maiorValor = Math.max(...valoresFaturamento);

// Calcula quantos dias tiveram faturamento acima da média mensal.
const calcularDiasAcimaDaMedia = () => {
  // Soma todos os valores.
  const somatorio = valoresFaturamento.reduce((acumulador, valor) => acumulador + valor, 0);
  // Calcula a média.
  const mediaMensal = somatorio / valoresFaturamento.length;
  // Filtra os valores de faturamento acima da média mensal e retorna a quantidade de dias.
  return valoresFaturamento.filter(valor => valor > mediaMensal).length;
};

console.log(`Menor faturamento: R$ ${menorValor.toFixed(2)}`);

console.log(`Maior faturamento: R$ ${maiorValor.toFixed(2)}`);

console.log(`Dias com faturamento acima da média mensal: ${calcularDiasAcimaDaMedia()}`);
