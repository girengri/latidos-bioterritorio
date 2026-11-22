// src/services/storage.js

/**
 * CAPA DE PERSISTENCIA (Service Layer)
 * 
 * Actualmente usa localStorage (ideal para el prototipo en GitHub Pages).
 * En un entorno real, reemplaza el cuerpo de estas funciones por:
 *   - fetch('/api/usuario', { method: 'POST', body: ... })
 *   - axios.post('/api/progreso', ...)
 *   - Firebase (setDoc, getDoc)
 * 
 * El resto de la aplicación (App.jsx, Dashboard.jsx) NO necesita cambios.
 */

const KEYS = {
  USUARIO: 'bioterritorio_user',
  PROGRESO: 'bioterritorio_progreso',
  AREA_ACTIVA: 'bioterritorio_area_activa',
};

// --- GESTIÓN DEL USUARIO ---
export const guardarUsuario = (nombre) => {
  try {
    localStorage.setItem(KEYS.USUARIO, nombre);
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
  }
};

export const leerUsuario = () => {
  try {
    return localStorage.getItem(KEYS.USUARIO);
  } catch (error) {
    console.error('Error al leer el usuario:', error);
    return null;
  }
};

export const borrarUsuario = () => {
  try {
    localStorage.removeItem(KEYS.USUARIO);
  } catch (error) {
    console.error('Error al borrar el usuario:', error);
  }
};

// --- GESTIÓN DEL PROGRESO (Áreas Completadas) ---
export const guardarProgreso = (areasCompletadas) => {
  try {
    localStorage.setItem(KEYS.PROGRESO, JSON.stringify(areasCompletadas));
  } catch (error) {
    console.error('Error al guardar el progreso:', error);
  }
};

export const leerProgreso = () => {
  try {
    const data = localStorage.getItem(KEYS.PROGRESO);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer el progreso:', error);
    return [];
  }
};

export const borrarProgreso = () => {
  try {
    localStorage.removeItem(KEYS.PROGRESO);
  } catch (error) {
    console.error('Error al borrar el progreso:', error);
  }
};

// --- GESTIÓN DEL ÁREA ACTIVA (Para que no se pierda al recargar) ---
export const guardarAreaActiva = (idArea) => {
  try {
    if (idArea) {
      localStorage.setItem(KEYS.AREA_ACTIVA, idArea);
    } else {
      localStorage.removeItem(KEYS.AREA_ACTIVA);
    }
  } catch (error) {
    console.error('Error al guardar el área activa:', error);
  }
};

export const leerAreaActiva = () => {
  try {
    return localStorage.getItem(KEYS.AREA_ACTIVA);
  } catch (error) {
    console.error('Error al leer el área activa:', error);
    return null;
  }
};

// --- LIMPIEZA TOTAL ---
export const limpiarTodo = () => {
  borrarUsuario();
  borrarProgreso();
  guardarAreaActiva(null);
};