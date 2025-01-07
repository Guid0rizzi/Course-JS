function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  // Object.defineProperty(this, "stock", {
  //   enumerable: true, // mostra chave
  //   value: stock, // valor
  //   writable: true, // pode alterar
  //   configurable: true, //configuravel
  // });
  Object.defineProperties(this, {
    name: {
      enumerable: true, // mostra chave
      value: stock, // valor
      writable: true, // pode alterar
      configurable: true, //configuravel
    },
    stock: {
      enumerable: true, // mostra chave
      value: stock, // valor
      writable: true, // pode alterar
      configurable: true, //configuravel
    },
  });
}
const product1 = new Product("Camiseta", 15, 60);
console.log(Object.keys(product1));
console.log("-----------------------------------------");

for (let keys in product1) {
  console.log(keys);
}
