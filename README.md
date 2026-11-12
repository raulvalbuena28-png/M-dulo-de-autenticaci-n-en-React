# Parqueadero - Módulo de autenticación (React)
GA7-220501096-AA5-EV01

Módulo de registro e inicio de sesión del proyecto Parqueadero, hecho con React (Vite).

## Ejecutar
    npm install
    npm run dev

## Funcionamiento
- Registro: guarda usuario y contraseña (localStorage).
- Inicio de sesión: si son correctos muestra "Autenticación satisfactoria"; si no, "Error en la autenticación".

## Estructura
- src/services/authService.js  -> lógica de registro y login
- src/components/Login.jsx, Register.jsx -> formularios
- src/App.jsx -> alterna entre vistas
