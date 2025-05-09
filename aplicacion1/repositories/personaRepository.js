const { personas } = require('../data/db');

const create = (persona) => {
  personas.push(persona);
  return persona;
};

const findAll = () => personas;

const findById = (id) => personas.find(p => p.id === id);

const update = (id, data) => {
  const index = personas.findIndex(p => p.id === id);
  if (index !== -1) {
    personas[index] = { ...personas[index], ...data };
    return personas[index];
  }
  return null;
};

const remove = (id) => {
  const index = personas.findIndex(p => p.id === id);
  if (index !== -1) {
    personas.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = { create, findAll, findById, update, remove };
