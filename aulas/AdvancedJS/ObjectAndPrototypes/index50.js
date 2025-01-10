function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  let privateStock = stock;
  // Object.defineProperty(this, "stock", {
  //   enumerable: true, // mostra chave
  //   value: stock, // valor
  //   writable: true, // pode alterar
  //   configurable: true, //configuravel
  // });
  Object.defineProperty(this, "stock", {
    enumerable: true, // mostra chave
    configurable: true, //configuravel
    get: function () {
      return privateStock;
    },
    set: function (value) {
      if (typeof valor !== "number") {
        throw new TypeError("tipo errado");
      }
      privateStock = value;
    },
  });
}
const p1 = new Product("Camiseta", 15, 3);
p1.privateStock = 5;
console.log(p1.stock);
function Person(first, last, age, eye) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
}
const p2 = new Person("Leonardo", "Guidorizzi", 19, "brown");
console.log(p2);
delete p2.first;
console.log(p2);
let animal = {
  "likes to play": true,
  tailColor: "brown",
  size: "2m",
};
console.log(animal);
// const Persona = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   },
// };
// Persona.lang = "Pt"; // eu tenho que usar atribuindo > atraves do set eu estou atribuindo o valor na language
// console.log(Persona);

console.log(animal);
function Persona(firstName = "", lastName = "") {
  //outra maneira de fazer um contrutor
  let _firstName = firstName;
  let _lastName = lastName;
  Object.defineProperty(this, "firstName", {
    // eu passo o objeto e o atributo
    set: function (value) {
      this._firstName = value;
    },
    get: function () {
      return _firstName;
    },
  });
  Object.defineProperty(this, "lastName", {
    set: function (value) {
      this.lastName = value;
    },
    get: function () {
      return _lastName;
    },
  });
}
const persona1 = new Persona();
persona1.firstName = "Leonardo";
persona1.lastName = "Moreira";
console.log(persona1);
