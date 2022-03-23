function calcular(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      reject('Informe apenas números');
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      reject('Valor muito baixo');
    }

    resolve(result);
  });
}

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 20);
const num3 = Math.floor(Math.random() * 30);

calcular(num1, num2, num3)
  .then(resolve => console.log(`Resultado: ${resolve}`))
  .catch(error => console.log(error))
