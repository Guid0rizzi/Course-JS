//funções geradoras
/**
 * vamos supor que a cada vez que eu chamar uma função ela me retorne um valor
 * é exatamente isso que uma função geradora faz
 */
function* generator1() {
  //random code...
  yield "Value1";
  //random code...
  yield "Value2";
  //random code...
  yield "Value3";
}
const g1 = generator1();
console.log(g1); //return Object [Generator] {}
console.log(
  "---------------------------------------------------------------------------"
);
console.log(g1.next()); //então é um metodo dentro do gerador
console.log(g1.next());
console.log(g1.next());
//console.log(g1.next().value); a cada vez que eu chamar ele vai me enviar um valor novo
//console.log(g1.next().value);  a cada vez que eu chamar ele vai me enviar um valor novo
/*------------------------------------------------------------------------*/
//posso iterar sobre o gerador para voltar todas de uma vez só
for (value of g1) {
  const valueG1 = value;
  console.log(valueG1);
}

function* generator2() {
  let index = 0;
  while (true) {
    yield index;
    index++;
  }
}
const g2 = generator2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}
function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
}
const g4 = generator4();
for (value of g4) {
  console.log(value);
}
function* generator5() {
  yield function () {
    console.log("vim do y1");
  };
  yield function () {
    console.log("vim do y2");
  };
}
const g5 = generator5();
const f1 = g5.next().value;
const f2 = g5.next().value;

console.log(f1());
console.log(f2());
