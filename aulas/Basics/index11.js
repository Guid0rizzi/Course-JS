/*
 Primitivos (imultáveis )- string, number, boolean, undefined, null(bigint, symbol) 
 null(bigint, symbol) - valor
   Referencia (mutável) - array, object, function

*/
//          01234567  
// let nome = 'Leonardo'
// nome = 'moreira'
// console.log(nome[0]);

// imultavel - let nome = Leonardo (return = Leonardo), nome = moreira (return = moreira)
// se eu alterar alguma coisa no valor, apenas um vai ser alterado
// mutavel a = [1,2,3] b = [1,2,3] a.push[4] return (a, b = [1,2,3,4], [1,2,3,4])
// se alterara alguma coisa  no valor, os dois vão ser alterados


const a = {
  nome : 'Leonardo',
  sobrenome: 'Moreira'
}
const b = {...a}
// const b = a
a.nome = 'Jalapão'
 
console.log(b, a);
