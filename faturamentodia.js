const faturamentoMensal = [0, 5000, 2000, 10000, 0, 0, 8000, 15000, 12000, 6000, 3000, 4000, 5000, 7000, 0, 1000, 9000, 6000, 12000, 8000, 4000, 0, 10000, 15000, 11000, 6000, 7000, 9000, 8000, 4000];

function calculaFaturamentoDiario(faturamento) {
  let menor = Infinity;
  let maior = -Infinity;
  let total = 0;
  let qtdDiasSuperiores = 0;
  
  for (let i = 0; i < faturamento.length; i++) {
    const valor = faturamento[i];
    
    if (valor > 0) {
      total += valor;
      
      if (valor < menor) {
        menor = valor;
      }
      
      if (valor > maior) {
        maior = valor;
      }
      
      if (valor > (total / faturamento.length)) {
        qtdDiasSuperiores++;
      }
    }
  }
  
  return {
    menor,
    maior,
    qtdDiasSuperiores
  };
}

const { menor, maior, qtdDiasSuperiores } = calculaFaturamentoDiario(faturamentoMensal);

console.log(`Menor faturamento diário: ${menor}`);
console.log(`Maior faturamento diário: ${maior}`);
console.log(`Quantidade de dias com faturamento acima da média mensal: ${qtdDiasSuperiores}`);
