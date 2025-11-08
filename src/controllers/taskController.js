import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({ include: { User: true } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una tarea
export const createTask = async (req, res) => {
  const { title, description, completed, user_id } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: { title, description, completed, user_id: BigInt(user_id) },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
