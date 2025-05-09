const service = require('../services/productoService');

const crear = (req, res) => {
  const producto = service.crearproducto(req.body);
  res.status(201).json(producto);
};

const listar = (req, res) => {
  res.json(service.listarproductos());
};

const obtener = (req, res) => {
  const producto = service.obtenerproducto(req.params.id);
  if (producto) res.json(producto);
  else res.status(404).json({ error: 'No encontrado' });
};

const actualizar = (req, res) => {
  const producto = service.actualizarproducto(req.params.id, req.body);
  if (producto) res.json(producto);
  else res.status(404).json({ error: 'No encontrado' });
};

const eliminar = (req, res) => {
  const ok = service.eliminarproducto(req.params.id);
  if (ok) res.status(204).end();
  else res.status(404).json({ error: 'No encontrado' });
};

module.exports = { crear, listar, obtener, actualizar, eliminar };
