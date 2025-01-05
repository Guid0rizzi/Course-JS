/*
Operadores logicos

&& -> and -> E
|| -> or -> ou
! -> not -> Não

*/
/**
 Nesse caso para sairmos de casa precisamos 
 ter : roupa bonita && estar sol && ter dinheiro && ter mochila
 se tudo for igual a verdadeiro (true) voce pode sair de casa
 se uma delas for falsa (false) voce nao podera sair de casa
 ou seja se um dos requerimentos for false a expressão completa ira retornar false
 voce não podera sair de casa sem uma delas
 */
 console.log(true && true && true && true); //true
 console.log(true && false && true && true); //false
 /*
 Nesse caso eu vou sair de casa da mesma forma, 
 então precisamos ter: roupa bonita|| estar sol 
 um requerimeto não é dependende do outro (não completamente), 
 se eu tiver roupa bonita mas não tiver sol
 eu vou sair de casa do mesmo jeito (tendo um dos dois eu vou poder sair)
ou se eu não tiver roupa bonita e estiver sol eu vou poder sair (tendo um dos dois eu vou poder sair)
*/
 console.log(true || true); // true 
 console.log(true || false); // true 
 console.log(false || false); // false (ai fodeu né poha, voce não tem nada para sair)

 /* Ele desvia o valar da expressão */
 
 console.log(!true); //false
 console.log(!false); // true

 //!!true = true 
 // !! false = false
 // !!! true = false
 // !!! false = true 


/* short circuit explanation*/

/*
Operadores logicos

&& -> and -> E -> false, mostra o valor mesmo
|| -> or -> ou

FALSY = valores considerados falsos quando necessarios
0
'' "" ``
null/ undefined
NaN
*/
console.log('Leonardo'&& 0 && 'Moreira'); //return -> 0 = falso
console.log('Leonardo' && 'Maria'); //-> SEMPRE vai retornar o ultimo numero avaliado -> Maria
 
function falarOi(params) {
  return 'oi';
}
const executar= false
console.log(falarOi() && executar);

console.log(null|| undefined || 'false'|| false);

corUsuario = '' //se existir alguma cor aqui ira retornar em seguida
corPadrao = corUsuario || 'preto'
console.log(corPadrao);