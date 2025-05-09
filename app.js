const express = require('express');
const bodyParser = require('body-parser');
const personaRoutes = require('./routes/personaRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/personas', personaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
