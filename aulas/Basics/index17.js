const pessoa ={
  nome: 'Luiz', //<--- o valor 'Não existe' só vai aparecer quando o nome na existir no objeto
  sobrenome: 'Miranda',
  idade: 30,
  endereco:{
    rua : 'Av Brasil',
    numero:300
  }
} 
//ATRIBUIÇÂO VIA DESESTRUTURAÇÂO
// const {nome} = pessoa //--> com as chaves se cria uma variavel e se atribui um valor
// nesse caso esta criando e buscando no objeto algo que se chama 'nome'
//const nome = pessoa.nome
//const {nome, sobrenome } = pessoa
//const {nome = 'Não existe', sobrenome, endereco} = pessoa //--> no 'não existe' estou atribuindo um valor padrão a variavel
//para esse aqui funcionar o 'nome ' não pode existir//              ^
             //atribundo valor padrão
//console.log(nome, sobrenome, endereco);                
// const {endereco:{rua, numero}, endereco} = pessoa
// console.log(rua, numero, endereco);
// const {endereco:{ rua:r = 12344},endereco} = pessoa
// console.log(r, endereco);
const {nome, ...rest} = pessoa
console.log(nome, rest);