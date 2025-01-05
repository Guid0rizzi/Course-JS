// let tem escopo de bloco {...}

// exemplo:
let nome = "leonardo"; //...ele vai procurar nesse

const verdadeira = true;
if (verdadeira) {
  let nome = "João"; //...nesse, agora, se não existir esse...
  // console.log(nome);

  if (verdadeira) {
    //let nome = 'outra coisa' //---> se nao existir esse, ele vai procurar...
    console.log(nome);
  }
}
/* com let se voce declarar um variavel que 
 não existe no bloco ele vai procurar variavel
 em outros blocos para achar*/

// var tem escopo de função ou seja:

//  console.log(nome2) // --->  não consegue retornar

var sobrenome = "Moreira";

function teste() {
  // var nome2 = "Ronaldo";
  // console.log(nome2); //---> consegue retornar
  console.log(sobrenome); //---> consegue retornar
}
//console.log(nome2); //---> não consegue retornar
