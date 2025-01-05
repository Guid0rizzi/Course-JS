const nomes = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//nomes.splice(qual elementos eu quero remover, quantos elementos eu quero apagar, elemento que eu quero adicionar, elemento que eu quero adicionar )
const exemplo = nomes.splice(6, 1);
console.log(nomes, exemplo);
/*----------------------------------------------------------------------------------------------------------------------------------------- */
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);

const nomes2 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser apagar do indice desejado pra frente
// const removidos = nomes2.splice(4, 3);
// console.log(nomes2, removidos);
const removidos2 = nomes2.splice(4, Number.MAX_VALUE);
console.log(nomes2, removidos2);
/*----------------------------------------------------------------------------------------------------------------------------------------- */
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes3 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser addicionar no indice desejado(4) (adicionar em um indice especifico )

const removidos3 = nomes3.splice(4, 0, "Leonardo");
console.log(nomes3);
/*----------------------------------------------------------------------------------------------------------------------------------------- */
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes4 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser substituir dois valores a partir do indice desejado(4)
const substituidos = nomes4.splice(3, 2, "Leonardo", "Moreira"); //(substitui romero e joão)
console.log(nomes4, substituidos);
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes5 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser fazer algo igual o pop(tirar o ultimo do array)
const pop = nomes5.splice(-1, 1);
console.log(nomes5, pop);
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes6 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser fazer algo igual o shift(tirar o primeiro elemento do array)
const shift = nomes6.splice(0, 1);
console.log(nomes6, shift);
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes7 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser fazer algo igual o push(adicionar o no ultimo elemento do array)
const push = nomes7.splice(nomes7.length, 0, "Gojo");
console.log(nomes7, push);
console.log(
  "--------------------------------------------------------------------------------------------------------------"
);
const nomes8 = [
  "eduardo",
  "felicia",
  "Roberto",
  "Ratinho",
  "Romero",
  "João",
  "Carla",
];
//no caso se eu quiser fazer algo igual o unshift(adicionar o no primeiro elemento do array)
const unshift = nomes8.splice(0, 0, "Gojo");
console.log(nomes8);
