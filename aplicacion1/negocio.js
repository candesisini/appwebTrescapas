// negocio.js
const { Persona, Producto } = require('./db');

// Función para crear una persona
function crearPersona(nombre, apellido, edad) {
  const persona = new Persona({ nombre, apellido, edad });
  return persona.save();
}

// Función para crear un producto
function crearProducto(nombre, descripcion, precio) {
  const producto = new Producto({ nombre, descripcion, precio });
  return producto.save();
}

module.exports = { crearPersona, crearProducto };
