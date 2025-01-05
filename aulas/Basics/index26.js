try{
  console.log(a);
}catch(err){
  console.log('deu muito ruim');
}
//////////////////////////////////////////////////////////////

const soma = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "deu ruim";
  }
  return x + y;
};
try {
  console.log(soma(3, 3));
  console.log(soma("i", 4));
} catch (err) {
  console.log(err);
}

/////////////////////////////////////////////////////////////
// const soma = (x, y) => {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("deu ruim");
//   }
//   return x + y;
// };
// try {
//   console.log(soma(2,6));
//   console.log(soma('i', 7));
// } catch (error) {
//   console.log(error);
// }
