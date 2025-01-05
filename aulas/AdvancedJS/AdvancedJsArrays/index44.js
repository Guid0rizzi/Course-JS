/*
Map altera o valor do array (ele cria novos arrays com valores alterados)
sem alterar o valor do array original
ele vai continuar da mesma forma do filter mas vai alterar o array
const multplyingNumbersPerTwo(valor, indice, array){
console.log(valor, indice, array)
}
*/
const numeros = [1, 2, 6, 30, 8, 90, 100, 11, 12];
const multplyingNumbersPerTwo = numeros.map((numbers) => numbers * 2);
console.log(multplyingNumbersPerTwo);
console.log("exercicio --------------------------------------------------");
const pessoas = [
  { nome: "Leonardo", idade: 19 },
  { nome: "Luiz", idade: 20 },
  { nome: "Ronisval", idade: 90 },
  { nome: "Amelia", idade: 8 },
  { nome: "Romilda", idade: 55 },
];
const namesToString = pessoas.map((obj) => obj.nome);
console.log(namesToString);
const agesOnly = pessoas.map((obj) => {
  return { idade: obj.idade };
});
const agesOnly2 = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(agesOnly);
const withIDs = pessoas.map((obj, index) => {
  return { name: obj.nome, age: obj.idade, id: index }; // maneira certa 1
});
// const withIDs2 = pessoas.map((obj, index) => {
//   obj.id = index; //para adicionar mais coisas no obj
//   obj.sobrenome = "Moreira";
//   return obj;
//   /*
//   estou mexendo no objeto diretamente
//    */
// });
console.log(withIDs);
const withIDs3 = pessoas.map((obj, index) => {
  const newObj = { ...obj }; // maneira certa 2
  newObj.id = index;
  return newObj;
});
// console.log(withIDs2);
console.log(withIDs3);

console.log(pessoas);
