const array = [3,5,5,7,9,9,1,9,2,5,7,9,2,42,12,56,87,34,23,34]


function removeDuplicates(array) {

  return array.filter((value, index) => {
  
  return array.indexOf(value) === index
  
  })
  
  }
console.log(removeDuplicates(array));



/*
  **Aritimeticos + - 
 * + Adicao/ contatenacao
 * -/ *
 *  ** Potenciacao
 * % resto da divisao
*/

/*
precedencia de contas (quais sao feitas primeiro)
 ()
 **
 * / %
 * + -
*/

/**------------------------------------------------------------- */
// const passo = 50;
let contador3 = 0; //let pq o resultado dela vai mudar conforme o executamento
// contador3 = contador3 + passo
// console.log(contador3);
// contador3 = contador3 + passo
// console.log(contador3);

 contador3 += 50
 contador3 += 50
console.log(contador3);


/**
 * Incremento
 * Decremento
 * (Só faz de 1 em 1)
 */
let contador2 = 10

console.log(--contador2); 


let contador = 1
contador++
contador++
contador++
console.log(contador);





/////////////////////////////

const num1 = 5
const num2 = 10

console.log(num1 + num2);


//Contatenação

// const num3 = '5'
// const num4 = 10

// console.log(num3 + num4);


/**
 * 
 * NaN - Not a number 
 * 
  para converter de string para number parseInt (Inteiro) parseFloat (decimal)
  ou voce so especifica se é String ou nember
  exemp:
  const num2 = Number('Luiz') obvio que vai dar errado, porque Luiz não é numero nem aqui e nem na China

 */
 const num3 = 10
 const num4 = parseInt('50')
 const somar = (num3 + num4)
console.log(somar);




