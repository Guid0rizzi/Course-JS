/*filter: *ele cria um array novo com as codições que voce passou 
          * filter sempre vai retornar um array, com a mesma quantidade
            de elementosm, ou menos
*/
const numeros = [1, 2, 6, 30, 8, 90, 100, 11, 12];
//primeira maneira
function callBackfilter(value, index, array) {
  /*O filter sempre receber um boolean; Pra eu não fazer isso:
  if(value > 10){
  true
  }else{
  false}
  eu fiz ele retornando a propria condição:*/
  // if (value > 10) return value;

  //desse jeito fica mais simples ainda:
  return value > 10;
}
const filteredNumbers = numeros.filter(callBackfilter);
console.log(filteredNumbers);

//segunda maneira
/*
fazendo com função anonima */
const filteredNumbers2 = numeros.filter((value, index, array) => {
  //console.log(value, index, array); isso ira retornar tudo

  return value > 10;
});
console.log(filteredNumbers2);
console.log("exercicio --------------------------------------------------");
const pessoas = [
  { nome: "Leonardo", idade: 19 },
  { nome: "Luiz", idade: 20 },
  { nome: "Ronisval", idade: 90 },
  { nome: "Amelia", idade: 8 },
  { nome: "Romilda", idade: 55 },
];
const longNames = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(longNames);
const moreThan50 = pessoas.filter((obj) => {
  return obj.idade > 50;
});
console.log(moreThan50);
const theLastletterIsA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(theLastletterIsA);
