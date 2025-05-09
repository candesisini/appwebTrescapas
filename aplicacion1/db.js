// db.js
const mongoose = require('mongoose');

// Aquí se conecta a la base de datos
mongoose.connect('mongodb://localhost:27017/miApp', { useNewUrlParser: true, useUnifiedTopology: true });

const Persona = mongoose.model('Persona', {
  nombre: String,
  apellido: String,
  edad: Number,
});

const Producto = mongoose.model('Producto', {
  nombre: String,
  descripcion: String,
  precio: Number,
});

module.exports = { Persona, Producto };
