function falaOi(fala) {
  console.log(fala);
}
falaOi("sim");

function funcao1() {
  console.log(arguments[0]);
}
funcao1("value", 1, 2);

function funcao2() {
  let total = 0;
  for (let argument of arguments) {
    //arguments é uma palavra exclusiva do javascript que mesmo se voce
    total += argument; //não passar argumentos nos parametros da função, assim como
    console.log(total); // nos fizemos na funcao2, ela vai capturar os parametros passados.
  } // quando voce chamar a funcao(isso funciona apenas com a palavra function)
  console.log(total);
}
funcao2(1, 2, 3, 4, 5, 6, 7);

function calculator(operador, acumulador, ...numeros) {
  // depois do "acumualador" no parametro,os tres pontinhos quer dizer resto
  for (let numero of numeros) {
    // então depois da palavra acumulador vai ser resto e vai vir um array
    if (operador === "+") acumulador += numero; // no caso com os valores [90, 50, 70] por isso eu tenho que usar um "for of"
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
}

calculator("+", 0, 90, 50, 70);

function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao3({ nome: "Leonardo", sobrenome: "Moreira", idade: "20" });
function funcao3([nome, sobrenome, idade]) {
  console.log(nome, sobrenome, idade);
}
funcao3(["Leonardo", "Moreira", "20"]);
