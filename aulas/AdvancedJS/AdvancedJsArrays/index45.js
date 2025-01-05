const numeros = [1, 2, 6, 30, 8, 90, 100, 11, 12];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  console.log(acumulador, valor);
  return acumulador; // com isso o acumulador vai voltar sempre zero
}, 0);
// ^ acumulador
/*
- se você precisa reduzir o seu array em um só, use reduce
- ele é um laço
- ele consegue filtrar
*/
console.log("o valor total é: " + total);
// filtrando
const numeros2 = [1, 2, 6, 30, 8, 90, 100, 11, 12];
const total2 = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  //console.log(acumulador, valor);
  return acumulador; // o acumulador vai retornar o numero que condiz com a verificação
}, []);
console.log(total2);

const pessoas = [
  { nome: "Leonardo", idade: 19 },
  { nome: "Luiz", idade: 20 },
  { nome: "Ronisval", idade: 90 },
  { nome: "Amelia", idade: 8 },
  { nome: "Romilda", idade: 55 },
];
const elderPerson = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(elderPerson);
