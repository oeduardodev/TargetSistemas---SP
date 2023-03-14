
//Código desenvolvido em NodeJS.

const readline = require('readline');

// interface terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Caso o número pertence à sequência de Fibonacci retorna True, caso contrário False.
function verificaFibonacci(num) {
  // Valores iniciais da sequência de Fibonacci
  let fib1 = 0;
  let fib2 = 1;

  // Se o valor é igual a um dos valores iniciais da sequência.
  if (num === fib1 || num === fib2) {
    return true;
  }

  // soma com os próximos valores da sequência até  chegar  no número informado.
  let nextFib = fib1 + fib2;
  while (nextFib <= num) {
    // Se o próximo valor da sequência for igual ao número informado, retorna true.
    if (nextFib === num) {
      return true;
    }
    fib1 = fib2;
    fib2 = nextFib;
    nextFib = fib1 + fib2;
  }
  // Para caso o número não seja esteja na sequência.
  return false;
}

// Pede para o usuário digitar um número a ser verificado.
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (num) => {
  // Verifica se o número pertence à sequência de Fibonacci e exibe uma mensagem de acordo
  if (verificaFibonacci(parseInt(num))) {
    console.log(num + ' pertence à sequência de Fibonacci.');
  } else {
    console.log(num + ' não pertence à sequência de Fibonacci.');
  }
  
  // Fecha terminal
  rl.close();
});
