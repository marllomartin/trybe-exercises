const readline = require('readline-sync');

function calculatorAverageSpd () {
  const distancia = readline.questionInt('Distância percorrida (m): ');
  const tempo = readline.questionInt('Tempo gasto (s): ');

  const averageSpeed = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${averageSpeed} m/s`);
}

calculatorAverageSpd();
