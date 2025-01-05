// let num1 = 10.50
// let num2 = 2.5
let num1 = 0.7
let num2 = 0.1
num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
// num1 = num1.toFixed(2) // ainda não vai voltar com o valor correto(0.99999)
// num1 = parseFloat(num1.toFixed(2)) //soluçao do problema
num1 = (num1 + 100, num2 + 100) / 100 // solucao 2 do problema
console.log(num1);
// console.log(num1.toString() + num2); //12.5
// //quando eu coloco com toString n estou editando a variavel 
// console.log(typeof num1, typeof num2);
// num1 = num1.toString()
//nesse caso eu estou tornando a varialvel para string "permanentemente" 
// console.log(typeof num1);
// console.log(num1.toString(2));// tornei a variavel em binario
// console.log(num1.toFixed(4));//limitar o numero de casas decimais
// console.log(Number.isInteger(num1));// vai retornar um falso ou um verdadeiro, se o numero é inteiro ou não
// let temp = num1 + '5';
// console.log(temp);