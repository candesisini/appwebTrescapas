// rutas.js
const express = require('express');
const { crearPersona, crearProducto } = require('./negocio');
const router = express.Router();

// Ruta para crear una persona
router.post('/personas', (req, res) => {
  const { nombre, apellido, edad } = req.body;
  crearPersona(nombre, apellido, edad)
    .then((persona) => res.status(201).json(persona))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Ruta para crear un producto
router.post('/productos', (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  crearProducto(nombre, descripcion, precio)
    .then((producto) => res.status(201).json(producto))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
