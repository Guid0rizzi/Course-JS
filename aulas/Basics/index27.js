// try {
//   console.log(a);
//   console.log('abri um arquivo')
//   console.log('Manipulei o arquivo e gerou erro');
//   console.log('fechei o arquivo');
// } catch (e) {
//   console.log('tratando o erro');
// }finally{
//   console.log('FINALLY, VOU SER EXECUTADO DO MESMO JEITO');
// }

// O try catch e usado para um possivel erro que aparecera no seu codigo 
//se eu forçar um erro no bloco do try vai aparecer 'tratando o erro'
//  const retornaHora = (data) =>{
//   if (!(data instanceof Date)) {
//     console.log('n é');
//   }
//   return data.tolocaleda
//  }
// retornaHora(new Date())

const retornaHora = (data) =>{
  if (data && !(data instanceof Date)) {
    throw TypeError ('esperando instancia de Date')
  }
  if (!data){
    data = new Date()
  }
 return data.toLocaleString('pt-br',{
  hour12 : false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
 })
 }
 try {
  const hora = new Date('12-01-1990 12:00:50')
  console.log(retornaHora(hora));  
  console.log(retornaHora('i'));
 } catch (error) {
  console.log(error);
 }finally{
  console.log('bom dia');
 }
