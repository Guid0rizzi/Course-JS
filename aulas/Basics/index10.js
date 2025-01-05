// let array = [1, 2, 3, 4]
// array.push(7)
// console.log(array);
// array[0] = 'Leonardo'
// array = 'Coisa linda'
// console.log(array);
//----------------------------------------------------------//
//                     Objeto                              //

// const pessoa = {
//   nome:'leonardo',
//   sobrenome: 'Moreira', //Objeto
//   idade:20
// }
//  console.log(pessoa.nome); // acessar informaçoes
/*
 function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade:idade
    // ou 
    //nome, 
    //sobrenome, 
    //idade
  }
 }
 const pessoa1 = criaPessoa('Leonardo', 'Moreira', 30)
 const pessoa2 = criaPessoa('Rodinei', 'Alminton', 88)
 const pessoa3 = criaPessoa('Maria', 'Cremilda', 40)
 const pessoa4 = criaPessoa('Marreca', 'doispontozero', 70)
 console.log(pessoa1, pessoa2 ,pessoa3, pessoa4);
console.log(pessoa3.nome) // acesssando info de uma pessoa especifica
/**/

// const pessoa1 = {
//    nome:'Leonardo',
//   sobrenome:'Moreira',
//   idade:20,

//   fala () {
//     console.log('Hello World'); //metodo(uma funcao dentro de um objeto)
//   }
// }
const pessoa1 = {
  nome:'Leonardo',
 sobrenome:'Moreira',
 idade:20,

 fala () {
  //  console.log(`${this.nome} ${this.sobrenome} esta falando oi...` ); //metodo(uma funcao dentro de um objeto)
  console.log(`a minha idade atual é ${this.idade}`);
 },
 idadeIncremento(){
  this.idade++
 }

}
pessoa1.fala()
pessoa1.idadeIncremento()
pessoa1.fala()
pessoa1.idadeIncremento()
pessoa1.fala()
pessoa1.idadeIncremento()
pessoa1.fala()