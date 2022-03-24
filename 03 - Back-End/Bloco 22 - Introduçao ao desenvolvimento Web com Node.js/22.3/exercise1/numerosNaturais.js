function numNaturalFn(numero) {
  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número'
  } else if (numero > 0) {
    return 'positivo';
  } else if (numero < 0) {
    return 'negativo';
  } else if (numero === 0) {
    return 'neutro';
  }
}

module.exports = numNaturalFn;
