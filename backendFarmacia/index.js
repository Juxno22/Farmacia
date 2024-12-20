const express = require('express')
const  bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const PORT = 4000;

app.use(bodyParser.json()); // Middleware para leer JSON
app.use(cors()); // Permite solicitudes desde cualquier origen

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});