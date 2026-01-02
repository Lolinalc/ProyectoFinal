# Backend - Aplicación de Eventos

Backend para la aplicación de eventos favoritos. Construido con Node.js, Express y MongoDB.

## 📋 Requisitos previos

- Node.js instalado
- MongoDB instalado y corriendo localmente, o una cuenta en MongoDB Atlas

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**

Copia el archivo `.env.example` y renómbralo a `.env`:
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/events-app
JWT_SECRET=cambia_esto_por_algo_seguro_y_aleatorio
JWT_EXPIRES_IN=7d
```

**Importante:** 
- Si usas MongoDB local, la URI es: `mongodb://localhost:27017/events-app`
- Si usas MongoDB Atlas, la URI será algo como: `mongodb+srv://usuario:password@cluster.mongodb.net/events-app`

3. **Iniciar MongoDB (si usas instalación local):**
```bash
mongod
```

## 🏃‍♀️ Ejecutar el servidor

**Modo desarrollo (con auto-restart):**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📡 Endpoints del API

### Autenticación

#### Registrar usuario
```
POST /users/signup
Content-Type: application/json

{
  "name": "Ana",
  "email": "ana@mail.com",
  "password": "123456"
}
```

#### Login
```
POST /users/signin
Content-Type: application/json

{
  "email": "ana@mail.com",
  "password": "123456"
}
```
Respuesta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Obtener perfil del usuario
```
GET /users/me
Authorization: Bearer <token>
```

### Favoritos

#### Obtener favoritos
```
GET /favorites
Authorization: Bearer <token>
```

#### Guardar favorito
```
POST /favorites
Authorization: Bearer <token>
Content-Type: application/json

{
  "eventId": "Z7r9jZ1AdF",
  "title": "Concierto Rock",
  "date": "2026-02-15",
  "venue": "Foro Cultural",
  "image": "https://..."
}
```

#### Eliminar favorito
```
DELETE /favorites/:id
Authorization: Bearer <token>
```

## 🧪 Probar el API

Puedes usar herramientas como:
- **Postman** (GUI)
- **Thunder Client** (extensión de VS Code)
- **curl** (línea de comandos)

Ejemplo con curl:
```bash
# Registrar usuario
curl -X POST http://localhost:3000/users/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana","email":"ana@mail.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/users/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@mail.com","password":"123456"}'
```

## 📁 Estructura del proyecto

```
backend/
├── controllers/         # Lógica de negocio
│   ├── users.js
│   └── favorites.js
├── models/             # Modelos de datos (MongoDB)
│   ├── user.js
│   └── favorite.js
├── routes/             # Definición de rutas
│   ├── users.js
│   └── favorites.js
├── middlewares/        # Middleware de autenticación
│   └── auth.js
├── utils/              # Utilidades (JWT)
│   └── jwt.js
├── app.js              # Configuración de Express
├── server.js           # Punto de entrada
├── package.json
└── .env                # Variables de entorno (NO subir a git)
```

## 🔒 Seguridad

- Las contraseñas se encriptan con bcryptjs
- La autenticación usa JWT (JSON Web Tokens)
- Los tokens expiran en 7 días por defecto
- Las rutas de favoritos están protegidas con middleware de autenticación

## 📝 Notas para el bootcamp

Este backend sigue las mejores prácticas:
- ✅ Separación de responsabilidades (MVC)
- ✅ Middleware de autenticación
- ✅ Validaciones en modelos y controladores
- ✅ Manejo de errores
- ✅ Variables de entorno para configuración
- ✅ Índices en MongoDB para evitar duplicados
- ✅ Respuestas consistentes en JSON
