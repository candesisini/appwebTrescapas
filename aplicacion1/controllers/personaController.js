const service = require('../services/personaService');

const crear = (req, res) => {
  const persona = service.crearPersona(req.body);
  res.status(201).json(persona);
};

const listar = (req, res) => {
  res.json(service.listarPersonas());
};

const obtener = (req, res) => {
  const persona = service.obtenerPersona(req.params.id);
  if (persona) res.json(persona);
  else res.status(404).json({ error: 'No encontrada' });
};

const actualizar = (req, res) => {
  const persona = service.actualizarPersona(req.params.id, req.body);
  if (persona) res.json(persona);
  else res.status(404).json({ error: 'No encontrada' });
};

const eliminar = (req, res) => {
  const ok = service.eliminarPersona(req.params.id);
  if (ok) res.status(204).end();
  else res.status(404).json({ error: 'No encontrada' });
};

module.exports = { crear, listar, obtener, actualizar, eliminar };
