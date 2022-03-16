const readline = require('readline-sync');

function calculatorImc() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Índice de Massa Corpórea: ${imc}`);

  if (imc < 18.5) { console.log('Abaixo do peso.'); }
  if (imc >= 18.5 && imc <= 24.9) { console.log('Peso normal.'); }
  if (imc >= 25 && imc <= 29.9) { console.log('Sobrepeso'); }
  if (imc >= 30 && imc <= 34.9) { console.log('Obesidade Grau I'); }
  if (imc >= 35 && imc <= 39.9) { console.log('Obesidade Grau II'); }
  if (imc >= 40) { console.log('Obesidade Mórbida'); }
}

calculatorImc()
