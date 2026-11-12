// Componente de inicio de sesión
import { useState } from "react";
import { iniciarSesion } from "../services/authService";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [resultado, setResultado] = useState(null);

  // Maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    setResultado(iniciarSesion(usuario, contrasena));
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Iniciar sesión</h2>
      <input placeholder="Usuario" value={usuario}
        onChange={(e) => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contrasena}
        onChange={(e) => setContrasena(e.target.value)} />
      <button type="submit">Ingresar</button>
      {resultado && (
        <p className={resultado.ok ? "ok" : "error"}>{resultado.mensaje}</p>
      )}
    </form>
  );
}
