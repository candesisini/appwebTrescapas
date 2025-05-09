const producto = require('../models/producto');
const repo = require('../repositories/productoRepository');

const crearproducto = (data) => {
  const producto = new producto(data.nombre, data.descripcion, data.precio);
  return repo.create(producto);
};

const listarproductos = () => repo.findAll();

const obtenerproducto = (id) => repo.findById(id);

const actualizarproducto = (id, data) => repo.update(id, data);

const eliminarproducto = (id) => repo.remove(id);

module.exports = {
  crearproducto,
  listarproductos,
  obtenerproducto,
  actualizarproducto,
  eliminarproducto
};
