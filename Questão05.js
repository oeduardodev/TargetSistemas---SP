const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Possibilita ao usuário de digitar sua string
  rl.question("Digite sua string: ", (str) => {
    // criando um array vazio e armazena os caracteres invertidos
    let invertedStr = [];
  
    // percorrendo a string e adiciona os caracteres ao arrey
    let i = 0;
    while (str[i] !== undefined) {
      i++;
    }
    while (i--) {
      invertedStr.push(str[i]);
    }
  
    // uni os caracteres
    invertedStr = invertedStr.join("");
  
    // exibe a string invertida
    console.log(`A string invertida é: ${invertedStr}`);
  
    rl.close();
  });