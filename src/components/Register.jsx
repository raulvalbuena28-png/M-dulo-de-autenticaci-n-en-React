// Componente de registro de usuarios
import { useState } from "react";
import { registrarUsuario } from "../services/authService";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [resultado, setResultado] = useState(null);

  // Maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    setResultado(registrarUsuario(usuario, contrasena));
    if (usuario && contrasena.length >= 4) setContrasena("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Registro</h2>
      <input placeholder="Usuario" value={usuario}
        onChange={(e) => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contrasena}
        onChange={(e) => setContrasena(e.target.value)} />
      <button type="submit">Registrarse</button>
      {resultado && (
        <p className={resultado.ok ? "ok" : "error"}>{resultado.mensaje}</p>
      )}
    </form>
  );
}
