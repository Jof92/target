function isFibonacci(num) {
    let a = 0;
    let b = 1;
    
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    
    return b === num;
  }
  
  const inputNum = parseInt(prompt('Digite um número: '));
  const isFib = isFibonacci(inputNum);
  
  if (isFib) {
    console.log(`${inputNum} pertence à sequência de Fibonacci`);
  } else {
    console.log(`${inputNum} não pertence à sequência de Fibonacci`);
  }
  