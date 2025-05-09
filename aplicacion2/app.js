const express = require('express');
const bodyParser = require('body-parser');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/producto', productoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
