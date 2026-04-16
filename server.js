const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('./')); // Serve the site files
app.use(express.json());

const logFile = path.join(__dirname, 'registro_mensajes.txt');

// API Endpoint to receive messages
app.post('/api/contacto', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    
    if (!nombre || !email || !asunto || !mensaje) {
        return res.status(400).send('Todos los campos son requeridos');
    }

    const now = new Date();
    const id = Date.now();
    const fecha = now.toLocaleDateString('es-ES');
    const hora = now.toLocaleTimeString('es-ES');
    
    const separator = "--------------------------------------------------\n";
    const logEntry = `ID: ${id}\nFECHA: ${fecha}\nHORA: ${hora}\nNOMBRE: ${nombre}\nEMAIL: ${email}\nASUNTO: ${asunto}\nMENSAJE: ${mensaje}\n${separator}`;

    fs.appendFile(logFile, logEntry, (err) => {
        if (err) {
            console.error('Error al guardar el mensaje:', err);
            return res.status(500).send('Error interno del servidor');
        }
        console.log(`Mensaje registrado (ID: ${id})`);
        res.status(200).send('Mensaje guardado correctamente');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
    console.log(`Registrando mensajes en: ${logFile}`);
});
