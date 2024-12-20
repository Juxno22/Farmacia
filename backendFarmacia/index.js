const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const consultaRoutes = require('./routes/consulta');
const inventoryRoutes = require('./routes/inventario');

const app = express();
app.use(bodyParser.json()); // Middleware para leer JSON
app.use(cors()); // Permite solicitudes desde cualquier origen

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});
// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/consulta', consultaRoutes);
app.use('/api/inventory', inventoryRoutes);

//Servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});