function saudacao(nome) {
  // console.log(`Bom dia ${nome}`);
  // return 123456
  return `Bom dia ${nome}`
}

saudacao('Leonardo') 
saudacao('Marreco')
// sempre os parenteses na frente para ela ser excutada// 
//nos paranteses do retorno que nós colocamos o parametro da funcao
// posso reutilzar o retorno

//-------------------------------------------------------------------//
//se queremos que a funcao tenha algum tipo de valor precisamos colocar a funcao 
// em uma variavel e atribuir algum valor no retorno exemp:123456
// console.log(".");
// const variavel = saudacao('Japa')// o retorno vai ser o 'Bom dia Japa' eo valor da variavel '123456'
// console.log(variavel); // retorno 123456
//-------------------------------------------------------------------//
// ou podemos fazer com que o retorno dela seja o proprio Bom dia 'nome'(sempre atribuindo na variavel)
const variavel = saudacao('Leonardo')
console.log(variavel);
//-------------------------------------------------------------------//

function soma(x , y) {
  const resultado = x + y
  return resultado
}

  const atrValores = soma(10, 20)
  console.log(atrValores);

  // Não tem como atribuir acessar nada que esta dentro do escopo da funcão 
  //(toda a execucao que esta la dentro)
  //------------------------------------------------------------------//
  // const resultado = soma(2, 2)
  // console.log(resultado);
  // posso atribuir o mesmo nome do executavel (resultado = x + y) na variavel pois a varivel sempre vai ser priorizada primeiro
  // Não tem como atrinuir nenhum executavel de do return!!!!!!
  //------------------------------------------------------------------//
  // Posso atribuir nomes como Leonardo Moreira
  // const nome = soma('Leonardo ','Moreira')
  // console.log(nome);

  function raizQuadrada(n) {
    resultado = n ** 0.5 
    return resultado
  }
  // const atrValorRaiz = raizQuadrada(70)
  // console.log(atrValorRaiz);
  console.log(raizQuadrada(40));
  console.log(raizQuadrada(50));
  console.log(raizQuadrada(50));
  //-------------------------------------------------------------------//
  //Arrow Function
  const subtracao = (n1, n2) =>{
    // resultado = n1 - n2 (NÂO PRECISO GUARDAR EM UMA VARIVEL NECESSARIAMENTE)
    // return resultado
    return n1 - n2
  }
  //segunda opcao:
  const subtracao2 = (n3, n4) => n3 - n4 

  console.log(subtracao(900, 80));
  console.log(subtracao2(500,10));

  //--------------------------------------------------------------------//
  const raizQuadrada2 = function (n5){ //tipo (const/ let), nome, igual, function, parametros
    return n5 ** 0.5
  }
  console.log(raizQuadrada2(90));