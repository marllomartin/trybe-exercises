const readline = require('readline-sync');

function result(number, answer) {
  if (number !== answer){
    return console.log(`Resposta errada. O número correto era ${number}`);
  }
  return console.log(`Resposta correta :)`);
}

function randomNumberGame() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  result(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente !== 's') return console.log('OK, até a próxima!');

  randomNumberGame();
}

randomNumberGame();
