class Producto {
    constructor(nombre, descripcion, precio) {
      this.id = crypto.randomUUID(); 
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  
  module.exports = Producto;
  