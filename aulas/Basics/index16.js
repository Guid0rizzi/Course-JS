// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numero = [1,2,3];
// [a, b, c ] = numero; //obs: quando coloca ponto e virgula no final o negocio vai 

// console.log(a, b, c);
//             0 1 2 3 4 5 6 7 8 
const array = [1,2,3,4,5,6,7,8,9];
//const primeironumero = array[0]; //---> atribuir nome para os valores de forma primitiva
const [primeironumero, segundonumero, terceironumero, ...resto] = array //---> atribuir nome a os valores de forma atualizada
// pule valores com espaços vazios exempl: [primeironumero, ,terceironumero]
// console.log( array[0]);
console.log(primeironumero, segundonumero, terceironumero );
console.log(resto);

// pegue o resto da array com esse operador: ...rest ou ...spreat

const numeros = [[1,2,3], [4,5,6], [7,8,9]];
// const [,[,],[sete]] = numeros
// console.log(sete);
// console.log(numeros[1][2]); //--> retorno numero 6
const [listaum, listadois, listatres] = numeros
console.log(listadois[0]);