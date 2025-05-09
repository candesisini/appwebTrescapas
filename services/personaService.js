const Persona = require('../models/persona');
const repo = require('../repositories/personaRepository');

const crearPersona = (data) => {
  const persona = new Persona(data.nombre, data.apellido, data.edad);
  return repo.create(persona);
};

const listarPersonas = () => repo.findAll();

const obtenerPersona = (id) => repo.findById(id);

const actualizarPersona = (id, data) => repo.update(id, data);

const eliminarPersona = (id) => repo.remove(id);

module.exports = {
  crearPersona,
  listarPersonas,
  obtenerPersona,
  actualizarPersona,
  eliminarPersona
};
