# Frontend - Aplicación de Eventos

Frontend de la aplicación de eventos favoritos. Construido con React.

## 📋 Requisitos previos

- Node.js instalado
- Backend corriendo en `http://localhost:3000`

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**

El archivo `.env` ya está configurado con:
```
REACT_APP_API_URL=http://localhost:3000
```

Si tu backend está en otra URL, modifica este archivo.

## 🏃‍♀️ Ejecutar la aplicación

**Modo desarrollo:**
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3001` (o el siguiente puerto disponible si 3000 está ocupado)

**Compilar para producción:**
```bash
npm run build
```

## 📁 Estructura del proyecto

```
frontend/
├── public/
│   └── index.html          # HTML base
├── src/
│   ├── components/         # Componentes React
│   │   ├── Auth/          # Componentes de autenticación
│   │   │   ├── Signup.js
│   │   │   ├── Signin.js
│   │   │   └── Auth.css
│   │   ├── Header/        # Barra de navegación
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Home/          # Página de inicio
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Favorites/     # Lista de favoritos
│   │   │   ├── Favorites.js
│   │   │   └── Favorites.css
│   │   ├── FavoriteCard/  # Tarjeta de evento favorito
│   │   │   ├── FavoriteCard.js
│   │   │   └── FavoriteCard.css
│   │   └── ProtectedRoute.js  # Componente para rutas protegidas
│   ├── contexts/          # Context API
│   │   └── AuthContext.js # Contexto de autenticación
│   ├── services/          # Servicios para API
│   │   ├── auth.service.js
│   │   └── favorites.service.js
│   ├── App.js             # Componente principal
│   ├── App.css            # Estilos globales
│   ├── index.js           # Punto de entrada
│   └── index.css          # Estilos base
├── .env                   # Variables de entorno
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Metodología BEM (CSS)

Todos los componentes utilizan la metodología BEM para los estilos CSS:

- **Bloque**: Componente principal (ej: `.auth`, `.header`, `.favorites`)
- **Elemento**: Parte del bloque (ej: `.auth__input`, `.header__logo`)
- **Modificador**: Variante del bloque o elemento (ej: `.auth__button--disabled`)

Ejemplo:
```css
.auth { }                    /* Bloque */
.auth__container { }         /* Elemento */
.auth__button { }            /* Elemento */
.auth__button--primary { }   /* Modificador */
```

## 🔑 Funcionalidades

### Autenticación
- **Registro de usuario** (`/signup`)
- **Inicio de sesión** (`/signin`)
- **Cierre de sesión**
- **Protección de rutas** (requiere autenticación)

### Gestión de Favoritos
- **Ver lista de favoritos** (`/favorites`)
- **Eliminar favoritos**
- **Mensajes de carga y error**

## 🛠️ Tecnologías utilizadas

- **React 18** - Librería de UI
- **React Router v6** - Navegación
- **Context API** - Gestión de estado
- **Fetch API** - Peticiones HTTP
- **CSS3** - Estilos con metodología BEM

## 📝 Notas importantes

1. **CORS**: El backend debe tener CORS habilitado para permitir peticiones desde el frontend
2. **LocalStorage**: Los tokens JWT se guardan en localStorage del navegador
3. **Rutas protegidas**: Las rutas que requieren autenticación redirigen a `/signin` si el usuario no está autenticado

## 🔗 Integración con el Backend

El frontend se conecta al backend a través de los servicios en `src/services/`:

- `auth.service.js` - Maneja registro, login y obtención de usuario
- `favorites.service.js` - Maneja operaciones CRUD de favoritos

Ambos servicios usan la variable de entorno `REACT_APP_API_URL` para las peticiones.

## 📱 Responsive

La aplicación es completamente responsive y se adapta a:
- Móviles (< 600px)
- Tablets (600px - 768px)
- Desktop (> 768px)

## 🎓 Proyecto de Bootcamp

Este proyecto fue creado como parte del bootcamp de desarrollo web, aplicando:
- ✅ React y componentes funcionales
- ✅ Hooks (useState, useEffect, useContext)
- ✅ Context API para estado global
- ✅ React Router para navegación
- ✅ Metodología BEM para CSS
- ✅ Fetch API para consumir REST API
- ✅ Manejo de errores y estados de carga
- ✅ Autenticación con JWT
- ✅ Rutas protegidas
