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
