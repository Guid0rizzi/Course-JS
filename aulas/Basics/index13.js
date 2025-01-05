/**
 * Explicação 1 :
 * const data = new Date(0) // 01/01/1970 Timestamp unix ou epoca unix
 * o contador vai por milisegundos:
 * se eu adicionar tres horas seria(
 * const tresHoras = 60(segundos) * 60(segundos) * 3 * 1000
 * retorno : const data = new Date (0 + tresHoras) 
 * ) 
 * ----------------------------------------------------------
 * Explicação 2:
 * sempre com numeros ou seja:
 * const Data = new Data (2019, 3, 20, 15,  14,  27, 500)
 *                         |    |   |   |   |    |    |
 *                        ano  mes dia hora min seg miliseg (1-999)
 *                                                          (se passar disso
 *                                                            o seg mudara   )   
 * -----------------------------------------------------------
 * Explicação 3:
 * os meses começa no index 0
 * ou seja, se Abril for 4 no calendario tradicional 
 * aqui seria 3.
 * ou tambem segunda é 0 e sabado é 6 
 *     
 * -----------------------------------------------------------
 * Explicação 4:
 * Poderia colocar o valor direto como: 
 * const data = new Date ('2019)                                                    
 */


function zeroaEsquerda(num) {
  return num >= 10 ? num : `0${num}`
  }
  /*
  *
   * explication da logica : 
   * se o numero for maior ou igual a 10 ele vai voltar sem alteração, 
   * se não (se ele for menor do que 10) ele vai retornar com um zero a esquerda 
   * obs: o abjeto data seria 100% number
   * 
   */
     
 function Datacerta(data) {
   const dia = zeroaEsquerda(data.getDate())
   const mes = zeroaEsquerda(data.getMonth() + 1)
   const ano = zeroaEsquerda(data.getFullYear())
   const hora = zeroaEsquerda(data.getHours())
   const min = zeroaEsquerda(data.getMinutes())
   const seg = zeroaEsquerda(data.getSeconds())
   const ms = zeroaEsquerda(data.getMilliseconds())
   const dS = zeroaEsquerda(data.getDay())
 
   return(`${dia}/${mes}/${ano}  ${hora}:${min}:${seg}: ${ms} dia:${dS}`);
   
 }
 const data = new Date()
 dataBrasil = Datacerta(data)
 console.log(dataBrasil);

// const data = new Date('2019-04-20 20:20:59')
// console.log('Dia', data.getDay());
// console.log('Mes', data.getMonth() + 1); //explicacao 3
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay ()); // explicacao 3

// console.log(data.toString());