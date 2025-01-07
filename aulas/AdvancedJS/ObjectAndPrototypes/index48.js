const pessoa = {
  nome: "Leonardo",
  sobrenome: "Moreira",
};
console.log(pessoa.nome);
console.log(pessoa["nome"]);
//uma chave dinamica eu vou conseguir acessar apenas com conchetes ou seja:
const chave = "nome";
console.log(pessoa[chave]);
//-------------------------------------------------------------------------
const pessoa1 = new Object();
pessoa1.nome = "Ronaldo";
pessoa1.sobrenome = "Moreira";
console.log(pessoa1.nome);
//-------------------------------------------------------------------------
delete pessoa1.nome; // deletando uma chave
console.log(pessoa1);
//-------------------------------------------------------------------------
const pessoa3 = new Object();
pessoa3.nome = "Mario";
pessoa3.sobrenome = "Nintendo";
pessoa3.idade = 45;
pessoa3.falarNome = function () {
  return `it's me ${this.nome}`;
};
console.log(pessoa3.falarNome());
//------------------------------------------------------------------------
pessoa3.dataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa3.dataNascimento());
//------------------------------------------------------------------------
for (let chave in pessoa3) {
  console.log(chave);
}
//------------------------------------------------------------------------
// Factory functions / Constructors functions/ Classes (são todos moldes para criar algo)
function PessoaContructor(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const pessoa4 = new PessoaContructor("Leonardo", "Moreira");
console.log(pessoa4);
