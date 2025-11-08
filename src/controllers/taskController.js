import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ✅ Obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({ include: { User: true } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas: ' + error.message });
  }
};

// ✅ Obtener una tarea por ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUnique({
      where: { id: BigInt(id) },
      include: { User: true },
    });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada.' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error al buscar tarea: ' + error.message });
  }
};

// ✅ Crear tarea (valida existencia de user_id)
export const createTask = async (req, res) => {
  const { title, description, completed, user_id } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: { id: BigInt(user_id) },
    });
    if (!userExists) {
      return res.status(404).json({ error: 'No se puede crear la tarea: el usuario no existe.' });
    }

    const newTask = await prisma.task.create({
      data: { title, description, completed, user_id: BigInt(user_id) },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear tarea: ' + error.message });
  }
};

// ✅ Actualizar tarea
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const task = await prisma.task.findUnique({ where: { id: BigInt(id) } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada.' });

    const updated = await prisma.task.update({
      where: { id: BigInt(id) },
      data: { title, description, completed },
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar tarea: ' + error.message });
  }
};

// ✅ Eliminar tarea
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUnique({ where: { id: BigInt(id) } });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada.' });

    await prisma.task.delete({ where: { id: BigInt(id) } });
    res.json({ message: 'Tarea eliminada correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar tarea: ' + error.message });
  }
};
