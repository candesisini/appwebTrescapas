const { productos } = require('../data/db');

const create = (producto) => {
  productos.push(producto);
  return producto;
};

const findAll = () => productos;

const findById = (id) => productos.find(p => p.id === id);

const update = (id, data) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos[index] = { ...productos[index], ...data };
    return productos[index];
  }
  return null;
};

const remove = (id) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = { create, findAll, findById, update, remove };
