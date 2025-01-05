const frutas = ['Pera', 'Maçã', 'Uva']
// for (let i = 0; i < frutas.length; i++) {
//   const theFruits = frutas[i]
//   console.log(theFruits);
// }
// for (let i in frutas ){
//   console.log(i);
// }
// for (let i in frutas ){
//   console.log(frutas[i]);
// }

const Pessoa = {
  nome:'Leo',
  sobrenome: 'Moreira',
  idade:18
}
for(let chave in Pessoa){
  console.log(chave, Pessoa[chave]);
}
