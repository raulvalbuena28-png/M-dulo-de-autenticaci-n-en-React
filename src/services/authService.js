// Servicio de autenticación del módulo Parqueadero.
// Los usuarios se guardan en localStorage (simula la base de datos),
// por lo que no se necesita una API externa.

const CLAVE = "parqueadero_usuarios";

// Obtiene la lista de usuarios guardados
function obtenerUsuarios() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
  } catch {
    return [];
  }
}

// Registra un usuario nuevo. Devuelve { ok, mensaje }
export function registrarUsuario(usuario, contrasena) {
  const u = usuario.trim();
  if (!u || !contrasena) {
    return { ok: false, mensaje: "Usuario y contraseña son obligatorios." };
  }
  if (contrasena.length < 4) {
    return { ok: false, mensaje: "La contraseña debe tener mínimo 4 caracteres." };
  }
  const usuarios = obtenerUsuarios();
  if (usuarios.some((x) => x.usuario.toLowerCase() === u.toLowerCase())) {
    return { ok: false, mensaje: "El usuario ya está registrado." };
  }
  usuarios.push({ usuario: u, contrasena });
  localStorage.setItem(CLAVE, JSON.stringify(usuarios));
  return { ok: true, mensaje: "Registro exitoso. Ya puede iniciar sesión." };
}

// Inicia sesión. Si es correcto: autenticación satisfactoria,
// de lo contrario: error en la autenticación.
export function iniciarSesion(usuario, contrasena) {
  const encontrado = obtenerUsuarios().find(
    (x) => x.usuario.toLowerCase() === usuario.trim().toLowerCase() &&
           x.contrasena === contrasena
  );
  return encontrado
    ? { ok: true, mensaje: "Autenticación satisfactoria" }
    : { ok: false, mensaje: "Error en la autenticación" };
}
