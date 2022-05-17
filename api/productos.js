class Productos {
  constructor() {
      this.productos = [];
  }

  save(title, price, thumbnail) {
      const id = this.productos.length + 1;
      try {
          this.productos.push({
              id: id,
              title: title,
              price: price,
              thumbnail: thumbnail
          });
          return [this.productos, id];

      } catch (error) {
          throw error;
      }
  }

  getAll() {
      return this.productos;
  }

  getByID(id) {
      const producto = this.productos.find(producto => producto.id == id);
      return producto;
  }

  delete(id) {
      this.productos = this.productos.filter(producto => producto.id != id);
      return this.productos;
  }

  update(id, title, price, thumbnail) {
    try {
        this.productos.push({
            id: parseInt(id),
            title: title,
            price: price,
            thumbnail: thumbnail
        });

    } catch (error) {
        throw error;
    }
  }
}

module.exports = Productos;