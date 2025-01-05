const nomes5 = new Array("Jose", "Maria", "Joao"); //outra maneira de abrir um array
const nomes = ["eduardo", "felicia", "Roberto", "Ratinho"];
console.log(nomes[3]);
const nomes2 = ["eduardo", "felicia", "Roberto", "Ratinho"];
nomes2[2] = "leonardo";
console.log(nomes2);
const nomes3 = ["eduardo", "felicia", "Roberto", "Ratinho"];
nomes3[2] = "leonardo";
delete nomes[2]; // quando vc quiser deletar sem alterar os indices(vai ficar um buraco no array)
console.log(nomes3);
/**----------------------------------------------------------------------------------------------- */
// const nomes6 = ["eduardo", "felicia", "Roberto", "Ratinho"];
// const novo = nomes6
// novo.pop()
//console.log(novo)
// console.log(nomes2);//(nesse exemplo a variavel novo e nomes 6 vão se modificar)
const nomes6 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const novo = [...nomes6]; //spread faz a magica
novo.pop();
console.log(novo);
console.log(nomes6); //(nesse exemplo apenas novo ira se modificar)
/**----------------------------------------------------------------------------------------------- */
const nomes7 = ["eduardo", "felicia", "Roberto", "Ratinho"];
console.log(nomes7.length);
/**----------------------------------------------------------------------------------------------- */
const nomes8 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const removed = nomes8.pop();
console.log(nomes8, removed); // como esta o erray, qual foi o valor que foi removido do array(), pop() remove o ultimo item do array
/**----------------------------------------------------------------------------------------------- */
const nomes9 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const removedAtLast = nomes9.shift();
console.log(nomes9, removedAtLast); // como esta o erray, qual foi o valor que foi removido do array(), shift() remove o primeiro item do array
/**----------------------------------------------------------------------------------------------- */
const nomes10 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const addingAtLast = nomes10.push("Aranha");
console.log(nomes10, addingAtLast); // como esta o erray, qual foi o valor que foi adicionado do array(), push() adiciona um item no final do array
/**----------------------------------------------------------------------------------------------- */
const nomes11 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const addingAtBegin = nomes11.unshift("Colosso");
console.log(nomes11, addingAtBegin); // como esta o erray, qual foi o valor que foi adicionado do array(), unshift() adiciona um item no primeiro item do array
/**----------------------------------------------------------------------------------------------- */
const nome = "Leonardo Moreria Guidorizzi";
const transformingIntoArray = nome.split(" "); // transforma uma string comum em um array
console.log(transformingIntoArray);
/**----------------------------------------------------------------------------------------------- */
const nomes12 = ["eduardo", "felicia", "Roberto", "Ratinho"];
const slicing = nomes12.slice(1, 3); // ele devolve o primeiro indice que vc quer(1) e deleta o 3 para frente
console.log(slicing); //[ 'felicia', 'Roberto' ] o eduardo ele remove também pq não foi o indice que vc pediu pra começar(ele literalmente fatia o array)
