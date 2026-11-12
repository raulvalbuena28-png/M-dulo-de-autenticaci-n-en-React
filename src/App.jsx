// Componente principal: alterna entre Login y Registro
import { useState } from "react";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

export default function App() {
  const [vista, setVista] = useState("login");

  return (
    <main className="tarjeta">
      <h1>Parqueadero</h1>
      <nav>
        <button onClick={() => setVista("login")}>Iniciar sesión</button>
        <button onClick={() => setVista("registro")}>Registro</button>
      </nav>
      {vista === "login" ? <Login /> : <Register />}
    </main>
  );
}
