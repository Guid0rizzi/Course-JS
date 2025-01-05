//closures
function retornarFuncao() {
  const nome = "Leonardo";//<-- a function anomina vai ter acesso a variavel nome que esta guardando o meu nome
  return function () {
    return nome;
  };
}
const funcao1 = retornarFuncao();
console.log(funcao1);
