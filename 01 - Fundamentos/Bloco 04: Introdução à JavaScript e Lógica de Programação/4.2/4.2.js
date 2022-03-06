
// Exercício 1
// Percorra o array imprimindo todos os valores nele contidos com a função console.log()
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for (let i = 0; i < numbers.length; i += 1) {
        console.log(numbers[i]);
    }

// Exercício 2
// some todos os valores contidos no array e imprima o resultado
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let result = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
    }
    console.log(result);

// Exercício 3
// Calcule e imprima a média aritmética dos valores contidos no array
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    let media = sum / numbers.length;
    console.log(media);

// Exercício 4
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let result = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
    }

    result = result / numbers.length;

    if (result > 20) {
        console.log('valor maior que 20');
    } 
    else {
        console.log('valor menor ou igual a 20');
    }

// Exercício 5
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let higherNumber = numbers[0];

    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers [i] > higherNumber) {
            higherNumber = numbers [i];
        }
    }
    console.log(higherNumber);

// Exercício 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 !== 0) {
            result += 1;
        }
    }
    if (result === 0) {
        console.log('nenhum valor ímpar encontrado');
    }
    else {
        console.log(result);
    }
// Exercício 7
// Utilizando for , descubra qual o menor valor contido no array e imprima-o
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let smallestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    console.log(smallestNumber);

// Exercício 8
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
    let numbers = [];

    for (let i = 1; i <= 25; i += 1) {
        numbers.push(i);
    }
    console.log(numbers);

// Exercício 9
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
    let numbers = [];

    for (let i = 1; i <= 25; i += 1) {
        numbers.push(i);
    }
    for (let i = 0; i < numbers.length; i += 1) {
        console.log(numbers[i] / 2);
    };