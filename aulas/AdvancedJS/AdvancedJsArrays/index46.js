const numeros = [1, 2, 6, 30, 8, 90, 100, 11, 12];
// retorne a soma do dobro de todos os pares
// => filtrar pares
// => dobrar os valor
// => Reduzir
const numerosPares = numeros
  .filter(function (valor) {
    if (valor % 2 === 0) return valor;
  })
  .map(function (valor) {
    return valor * 2;
  })
  .reduce(function (ac, valor) {
    return ac + valor;
  });
console.log(numerosPares);
const numerosParesSimplificado = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);
console.log(numerosPares);
