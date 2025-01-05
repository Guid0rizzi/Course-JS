//Factory Functions = funções que retornam um obj
function criaPessoa(nome, sobrenome, idade, altura, peso) {
  return {
    nome,
    sobrenome,
    idade,
    get nomecompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomecompleto(valor) {
      valor = valor.split(" "); //aqui eu vou pegar cada estapaço que existe
      this.nome = valor.shift(); //aqui eu substituo o nome do objeto pelo nome que estou passando no valor
      this.sobrenome = valor.join(" "); // aqui eu adiciono um espaço (em resumo: eu passei o valor Leonardo Moreira mas mudei o)
    }, //obt todo para Maria de Lourdes

    fala: function (assunto) {
      return `${this.nome} esta falando sobre ${assunto}`;
    },
    altura: altura,
    peso: peso,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p1 = criaPessoa("Leonardo", "Moreira", 18, 1.7, 65);
console.log(p1.fala("js"));
console.log(p1.imc());
p1.nomecompleto = "Maria de Lourdes";
console.log(p1.nomecompleto);

/*
funções dentro do objeto é um metodo
*/
