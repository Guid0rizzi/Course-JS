//IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function () {
  const sobrenome = "Moreira ";
  const criaNome = (nome) => {
    return nome + " " + sobrenome;
  };
  function falaNome() {
    console.log(criaNome("Leonardo"));
  }
  falaNome();
})(); //<--- () chamando a função
//quem esta aqui fora não afeta oque esta ali dentro
