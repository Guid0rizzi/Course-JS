// Declaraçao de funcao (function hoisting)
/**
 * A engine vai do javascript vai elevar as declaraçoes de funcoes
 * e variaveis declaradas com a palavra var para o topo do nosso js
 * (posso declarar ela em qualquer lugar, seja encima ou embaixo); 
 */
façaOi()

function façaOi() {
  console.log('oie');
};

/*
 First-class objects (Objetos de primeira classe)
 podemos tratar as funcoes como dado, exemp:
 posso usar uma funcão em uma variavel como se fosse um dado

 ////////////////////////////////////


 (Quando voce joga a funcao sem nome em uma varivel el
 se torna uma funcao com nome)
*/

//assim::
const souUmDado = function () {
  console.log('Sou um dado');
}

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado)


/**
 * arrow function 
*/

const arrowFunction = () =>{
   console.log('Sou uma arrow function');
}
arrowFunction();


const obj = {
  falar: function () {
    console.log('Estou falando');
  }
}
obj.falar()


