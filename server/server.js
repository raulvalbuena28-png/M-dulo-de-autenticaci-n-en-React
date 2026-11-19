// Servidor de autenticación del Parqueadero (registro e inicio de sesión)
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // permite leer el body en JSON

// Usuarios guardados en memoria (se borran al reiniciar el servidor)
const usuarios = [];

// POST /api/registro  -> crea un usuario nuevo
app.post("/api/registro", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Usuario y contraseña son obligatorios" });
  }
  if (usuarios.find((u) => u.usuario === usuario)) {
    return res.status(409).json({ mensaje: "El usuario ya existe" });
  }

  usuarios.push({ usuario, password });
  res.status(201).json({ mensaje: "Usuario registrado correctamente" });
});

// POST /api/login  -> valida usuario y contraseña
app.post("/api/login", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Usuario y contraseña son obligatorios" });
  }

  const encontrado = usuarios.find(
    (u) => u.usuario === usuario && u.password === password
  );

  if (encontrado) {
    res.status(200).json({ mensaje: "Autenticación satisfactoria" });
  } else {
    res.status(401).json({ mensaje: "Error en la autenticación" });
  }
});

app.listen(3000, () => {
  console.log("API del parqueadero corriendo en http://localhost:3000");
});