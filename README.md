# 🧠 Proyecto: Gestor de Usuarios y Tareas con Node.js, Express, Prisma y Supabase

## 📋 Descripción

Este proyecto es una **API REST completa** desarrollada con **Node.js**, **Express** y **Prisma ORM**, conectada a una base de datos **PostgreSQL** alojada en **Supabase**.

Además, incluye una **interfaz web sencilla (HTML + Fetch API)** que permite gestionar usuarios y tareas directamente desde el navegador.

El objetivo del proyecto fue **practicar la creación de un backend profesional** con conexión real a una base de datos, aplicando buenas prácticas de desarrollo, control de versiones y documentación.

---

## ⚙️ Tecnologías utilizadas

- **Node.js** – entorno de ejecución de JavaScript
- **Express.js** – framework para crear el servidor
- **Prisma ORM** – conexión y modelado de la base de datos
- **Supabase (PostgreSQL)** – base de datos en la nube
- **HTML + CSS + Fetch API** – interfaz visual para probar la API
- **Git / GitHub** – control de versiones y ramas
- **Insomnia / Thunder Client** – pruebas de endpoints

---

## 🚀 Instalación y ejecución

1️⃣ Clonar el repositorio:
git clone https://github.com/camiloconrado/base_datos.git

2️⃣ Entrar en la carpeta del proyecto:
cd base_datos

3️⃣ Instalar dependencias:
npm install

4️⃣ Configurar el archivo .env con tus credenciales de Supabase:
DATABASE_URL="postgresql://usuario:password@host:5432/postgres"
DIRECT_URL="postgresql://usuario:password@host:5432/postgres"

5️⃣ Ejecutar el servidor:
node src/app.js

6️⃣ Abrir la interfaz web:
http://localhost:3000


🔗 Endpoints principales

👤 Usuarios
| Método | Endpoint     | Descripción                  |
| ------ | ------------ | ---------------------------- |
| GET    | `/users`     | Obtener todos los usuarios   |
| GET    | `/users/:id` | Obtener usuario por ID       |
| POST   | `/users`     | Crear nuevo usuario          |
| PUT    | `/users/:id` | Actualizar usuario existente |
| DELETE | `/users/:id` | Eliminar usuario             |

✅ Tareas
| Método | Endpoint     | Descripción                            |
| ------ | ------------ | -------------------------------------- |
| GET    | `/tasks`     | Obtener todas las tareas               |
| GET    | `/tasks/:id` | Obtener tarea por ID                   |
| POST   | `/tasks`     | Crear nueva tarea (requiere `user_id`) |
| PUT    | `/tasks/:id` | Actualizar tarea                       |
| DELETE | `/tasks/:id` | Eliminar tarea                         |

💻 Interfaz Web

El proyecto incluye una pequeña interfaz web en HTML ubicada en src/public/index.html
donde se pueden:

Crear usuarios
Crear tareas
Ver la lista de usuarios y tareas en tiempo real
Recibir mensajes de éxito o error

---

🧠 Autor
👤 Camilo Conrado