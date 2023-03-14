const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let faturamentoTotal = 0;
  
  // Calcula o faturamento total
  for (const estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado];
  }
  
  const percentualPorEstado = {};
  
  // Calcula o percentual de representação de cada estado
  for (const estado in faturamentoPorEstado) {
    percentualPorEstado[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
  }
  
  // Exibe o percentual de representação de cada estado
  for (const estado in percentualPorEstado) {
    console.log(`${estado}: ${percentualPorEstado[estado]}%`);
  }
  