const faturamentoMensalPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoMensalPorEstado).reduce((acc, curr) => acc + curr, 0);
  
  const percentuaisPorEstado = {};
  
  for (const estado in faturamentoMensalPorEstado) {
    const percentual = (faturamentoMensalPorEstado[estado] / totalFaturamento) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2);
  }
  
  console.log(percentuaisPorEstado);
  