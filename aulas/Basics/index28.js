const mostrarHora = ()=>{
  let data = new Date();
  return data.toLocaleTimeString('pt-BR'<{
   hour12:false 
  })
} 

// const funcaoDoInterval = () => {
//   console.log(mostrarHora());
// }
// setInterval(funcaoDoInterval, 1000)

// setInterval(function () {
//   console.log(mostrarHora());
// }, 1000)

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);