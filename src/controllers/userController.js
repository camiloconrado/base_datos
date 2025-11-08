import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ include: { Task: true } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un usuario
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'El correo ya está registrado.' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};
