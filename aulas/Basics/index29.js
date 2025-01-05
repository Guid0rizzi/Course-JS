const mostrarHora = ()=>{

  const data = new Date()
  return data.toLocaleString('pt-br',{
    hour12: false
  })


}

// function funcaoDoInterval() {
//   console.log(mostrarHora());
// }

// setInterval(funcaoDoInterval, 1000)

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000)

setTimeout(function() {
  clearInterval(timer)
},3000)
