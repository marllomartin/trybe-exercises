//Objetos
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log(lesson1);
console.log(lesson2);
console.log(lesson3);

//Função que adiciona turno noite no objeto lesson1
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

//Função que lista as keys do objeto informado
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

//Função que mostra o tamanho de um objeto
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

//Função que lista os valores de um objeto
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

//Cria um objeto com todas as lessons
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Função que retorna o número de estudantes de todas as lessons
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));