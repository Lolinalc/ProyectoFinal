# 🐱 Cat Facts

Proyecto final del curso de **Web Developer**. Cat Facts es una aplicación web interactiva que consume APIs externas para mostrar datos curiosos y aleatorios sobre gatos, con un sistema de autenticación completo y una interfaz moderna y responsive.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_DOM-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Descripción del proyecto

**Cat Facts** es una aplicación desarrollada como proyecto final del curso de Web Developer. Su objetivo es consumir datos desde APIs externas sobre gatos y presentarlos en una interfaz visual e interactiva. Los usuarios pueden registrarse, iniciar sesión y personalizar su experiencia marcando sus tarjetas favoritas con "me gusta".

El proyecto integra conceptos clave del desarrollo fullstack: autenticación segura con JWT, manejo de estado en el frontend, consumo de APIs asíncronas y diseño responsive.
![alt Inicio](<Cat Fact Inicio.webp>)
![alt Home](<Cat Fact Home.webp>)

---

## 🛠️ Tecnologías utilizadas

| Tecnología                | Rol en el proyecto                                |
| ------------------------- | ------------------------------------------------- |
| **React**                 | Librería principal de UI y manejo de componentes  |
| **Next.js**               | Framework de React con enrutamiento y renderizado |
| **Node.js**               | Entorno de ejecución del servidor                 |
| **JavaScript**            | Lenguaje principal (71.1% del código)             |
| **CSS**                   | Estilos y diseño visual (28.0% del código)        |
| **HTML**                  | Estructura base (0.9% del código)                 |
| **JWT (JSON Web Tokens)** | Autenticación segura de usuarios                  |
| **API externa de gatos**  | Fuente de datos random sobre gatos                |

---

## ✨ Funcionalidades

### 🔐 Autenticación de usuarios

- **Registro:** Los nuevos usuarios pueden crear una cuenta proporcionando su correo electrónico y contraseña.
- **Inicio de sesión:** Los usuarios registrados pueden acceder a la aplicación con sus credenciales.
- **Cierre de sesión:** Los usuarios pueden cerrar sesión de forma segura desde cualquier pantalla.

### ❤️ Interacción con el contenido

- **Sistema de "Me gusta":** Los usuarios pueden dar o quitar "me gusta" a cualquier tarjeta de Cat Facts, personalizando su experiencia dentro de la app.

### 📱 Diseño responsive

- La interfaz se adapta correctamente a diferentes tamaños de pantalla: **desktop**, **tablet** y **móvil**, asegurando una experiencia de uso óptima en cualquier dispositivo.

---

## ⚙️ Arquitectura y patrones técnicos

### Asincronía y manejo de promesas

El proyecto hace uso extensivo de patrones modernos de JavaScript para manejar operaciones asíncronas:

- **`async/await`** para un código más legible al consumir APIs.
- **Promesas con `.then()` y `.catch()`** para encadenamiento de operaciones.
- **`try/catch`** para manejo robusto de errores en llamadas a la API y en la lógica de autenticación.

### Seguridad y validación

- **Tokens JWT** para autenticación segura entre el cliente y el servidor, garantizando que solo usuarios autenticados puedan acceder a funcionalidades protegidas.
- **Validación HTML5** con atributos como `required`, `minLength`, `maxLength` y `type="email"` para asegurar la integridad de los datos antes de enviarlos al servidor.
- **Validación de entrada de usuario** en el lado del cliente para mejorar la experiencia y reducir errores.

---

## 🌐 Análisis del portal web

La aplicación está organizada en torno a una experiencia de usuario fluida:

1. **Landing / Home:** El usuario llega a la página principal donde se muestran las tarjetas de Cat Facts generadas dinámicamente desde la API.
2. **Autenticación:** Rutas protegidas de `/register` y `/login` con formularios validados tanto en el cliente como en el servidor.
3. **Dashboard de usuario:** Una vez autenticado, el usuario puede interactuar con las tarjetas y guardar sus favoritas mediante el sistema de "me gusta".
4. **Persistencia de sesión:** Gracias a los tokens JWT, la sesión del usuario se mantiene activa entre recargas de página.

El flujo completo garantiza que un usuario no autenticado no pueda acceder a funcionalidades reservadas, y que la experiencia sea coherente en móvil, tablet y desktop.

---

## 📝 Conclusiones

El desarrollo de **Cat Facts** permitió aplicar y consolidar los conocimientos adquiridos a lo largo del curso de Web Developer, enfrentando retos reales del desarrollo fullstack:

- Se implementó un sistema de autenticación funcional y seguro usando JWT, comprendiendo el ciclo completo de registro, login y gestión de sesiones.
- El consumo de APIs externas con `async/await` y el manejo de errores con `try/catch` fortaleció la comprensión de la asincronía en JavaScript moderno.
- La construcción de una UI responsive con React y Next.js evidenció la importancia del diseño adaptable para distintos dispositivos.
- El proyecto integró frontend y backend en una sola arquitectura con Next.js, facilitando el desarrollo y el despliegue.

Cat Facts es más que un proyecto académico: es una aplicación funcional que demuestra la capacidad de construir productos digitales completos, desde la autenticación hasta el consumo de datos en tiempo real.

---

> Desarrollado con 💛 por **Lolina** — Proyecto Final, Curso Web Developer · Triple Ten
