// Exercício 1
// Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
    let n = 5;
    let char = '*';
    let line = '';

    for (let i = 0; i < n; i += 1) {
        line = line + char;
    };
    for (let i = 0; i < n; i += 1) {
        console.log(line);
    };

// Exercício 2
// O mesmo que antes, mas que imprima um triângulo
    let n = 5;
    let char = '*';
    let line = '';

    for (let i = 0; i <= n; i += 1){
        line = line + char;
        console.log(line);
    };

// Exercício 3
// O mesmo que antes, mas inverta o lado do triângulo
    let n = 5;
    let char = '*';
    let line = '';
    let position = n;

    for (let i = 0; i < n; i += 1) {
        for (let i = 0; i <= n; i += 1) {
            if (i < position) {
                line = line + ' ';
            }       
            else {
                line = line + char;
            }
        }
        console.log(line);
        line = '';
        position -= 1;
    };

// Exercício 4
// Faça uma pirâmide com n asteriscos de base
    let n = 5;
    let symbol = '*';
    let inputLine = '';
    let midOfMatrix = (n + 1) / 2;
    let controlLeft = midOfMatrix;
    let controlRight = midOfMatrix;

    for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
        for (let i = 0; i <= n; i += 1) {
            if (i > controlLeft && i < controlRight) {
                inputLine = inputLine + symbol;
            } 
            else {
                inputLine = inputLine + ' ';
            }
        }
        console.log(inputLine);
        inputLine = '';
        controlRight += 1;
        controlLeft -= 1
    };

// Exercício 5
// Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:
    let n = 7;
    let middle = (n + 1) / 2;
    let controlLeft = middle;
    let controlRight = middle;
    let symbol = '*';
    for (let line = 1; line <= middle; line += 1) {
        let outputLine = '';
        for (let col = 1; col <= n; col += 1) {
            if (col == controlLeft || col == controlRight || line == middle) {
                outputLine += symbol;
            } 
            else {
                outputLine += ' ';
            }
        }
        controlLeft -= 1;
        controlRight += 1;
        console.log(outputLine);
    }