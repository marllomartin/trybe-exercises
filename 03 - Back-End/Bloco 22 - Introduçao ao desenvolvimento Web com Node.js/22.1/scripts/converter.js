const readline = require('readline-sync');

function usdToBrl() {
  const usd = 5.37;
  const value = readline.questionFloat('Valor a ser convertido (dólares): ')

  console.log(`${value} USD são ${(value * usd).toFixed(2)} BRL`);
}

usdToBrl()
