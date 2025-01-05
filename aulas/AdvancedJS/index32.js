function multiplicador (multiplicador){
  return function (n) {
    return n*multiplicador
  }
}
const duplica = multiplicador(2); 
//a variavel multiplicador vai guardar uma funcao 
//ent por isso que estamos chamando ela como uma funcao tbm 
console.log(duplica(3)); 

