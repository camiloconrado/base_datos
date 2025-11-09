import express from 'express';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar rutas absolutas (necesario para usar __dirname con ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// ✅ Convertir BigInt a string automáticamente al enviar JSON
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// ✅ Servir la carpeta "public" (interfaz HTML)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Rutas principales de la API
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// ✅ Puerto y mensaje de inicio
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Interfaz web disponible en http://localhost:${PORT}/`);
});
