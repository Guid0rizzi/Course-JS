//dados primitivos: String, number, null, boolean 
const name = 'Leonardo' //string
const name1 = "Leonardo"//string
const name2 = `Leonardo`// string
const number = 10 // number
const number1 = 10.50 // number 
let nomeAluno; // (naõ podemos colocar um const se voce não esta atribuindo valor para ela)undefined -> não aponta nenhum local na memoria
const sobrenomeAluno = null // nulo -> (desconfigurar a variavel) (exemp:usuario não escolheu uma cor) não aponta nenhum local na memoria, mas foi voce que manipulou isso
const aprovado  = false //boolean = true, false (valor logico)

console.log(typeof name1);


let a = 2 //atribuindo o mesmo valor na variavel,
//ou seja copiando 
const b = a;
console.log(a, b); // retorno 2 2 
//atribuindo um outro valor para a variavel
a = 3 //(não preciso especificar a varivel de novo)

console.log(a, b); // retorno 3 2


// const a = [1, 2]
// const b = a

// console.log(a, b );

// b.push(3)

// console.log(a, b);

