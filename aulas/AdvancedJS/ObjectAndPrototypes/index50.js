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
