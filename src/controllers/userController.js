import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ✅ Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({ include: { Task: true } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios: ' + error.message });
  }
};

// ✅ Obtener un usuario por ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: BigInt(id) },
      include: { Task: true },
    });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error al buscar usuario: ' + error.message });
  }
};

// ✅ Crear usuario
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({ data: { name, email, password } });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'El correo ya está registrado.' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

// ✅ Actualizar usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id: BigInt(id) },
      data: { name, email, password },
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario: ' + error.message });
  }
};

// ✅ Eliminar usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: BigInt(id) } });
    res.json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar usuario: ' + error.message });
  }
};
