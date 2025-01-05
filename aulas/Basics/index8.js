

//                  0      1       2       3
const alunos  = ['Luiz', 'Aline', 'João', 'Mario']
alunos[0] = 'Rai' // adicionar um nome
alunos[4] = 'Rambo' // adiconar um nome
alunos[alunos.length]= 'Ronaldo'
alunos[alunos.length]= 'Cristiano'
alunos[alunos.length]= 'Marreco'
console.log(typeof alunos); // retorno objeto 
// console.log(alunos[3]);
// console.log(alunos.length);
alunos.push('Marreco Junior') //push adicionando no final
alunos.push('Ronaldinho')
alunos.unshift('Flavin do Pneu') // adicionar no final
// alunos.pop() // vai tirar o ultimo index da lista (Ronaldinho)
const ultimoAlunoRemovido = alunos.pop()
console.log(ultimoAlunoRemovido); // vai mostrar o index que foi removido (Ronaldinho)
// alunos.shift() //vai tirar o primeiro index da lista (Flavin do Pneu)
const primeiroALunoRemovido = alunos.shift()
console.log(primeiroALunoRemovido); // vai mostrar o primeiro aluno removido
console.log(alunos);