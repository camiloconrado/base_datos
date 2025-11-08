import express from 'express';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(express.json());

// Convertir BigInt a string automáticamente al enviar JSON
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// Rutas principales
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
