import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AreaDetail from './components/AreaDetail';
import Desafio from './components/Desafio';

export default function App() {
  const [pantalla, setPantalla] = useState('splash');
  const [usuario, setUsuario] = useState('');
  const [areaActiva, setAreaActiva] = useState(null);
  const [areasCompletadas, setAreasCompletadas] = useState([]);

  // 1. EFECTO PARA CARGAR EL PROGRESO AL INICIAR
  useEffect(() => {
    const savedUser = localStorage.getItem('bioterritorio_user');
    const savedProgress = localStorage.getItem('bioterritorio_progreso');

    if (savedUser) {
      setUsuario(savedUser);
      setPantalla('dashboard'); // Si ya hay usuario, salta directo al dashboard
    }
    if (savedProgress) {
      try {
        setAreasCompletadas(JSON.parse(savedProgress));
      } catch (error) {
        console.error("Error al leer el progreso guardado", error);
      }
    }
  }, []);

  const handleEnter = () => setPantalla('auth');
  
  const handleLogin = (nombre) => {
    setUsuario(nombre);
    localStorage.setItem('bioterritorio_user', nombre); // Guardamos el nombre
    setPantalla('dashboard');
  };

  const handleSelectArea = (area) => {
    setAreaActiva(area);
    setPantalla('area');
  };

  const handleCompletarArea = (id) => {
    if (!areasCompletadas.includes(id)) {
      const nuevoProgreso = [...areasCompletadas, id];
      setAreasCompletadas(nuevoProgreso);
      localStorage.setItem('bioterritorio_progreso', JSON.stringify(nuevoProgreso)); // Guardamos el progreso
    }
    // No devolvemos al dashboard inmediatamente, dejamos que el usuario vea que se completó
    // setPantalla('dashboard'); 
  };

  // Función extra para reiniciar el juego (útil para probar)
  const handleReset = () => {
    localStorage.removeItem('bioterritorio_user');
    localStorage.removeItem('bioterritorio_progreso');
    setUsuario('');
    setAreasCompletadas([]);
    setPantalla('splash');
  };

  return (
    <AnimatePresence mode="wait">
      {pantalla === 'splash' && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <SplashScreen onEnter={handleEnter} />
        </motion.div>
      )}

      {pantalla === 'auth' && (
        <motion.div
          key="auth"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Auth onLogin={handleLogin} />
        </motion.div>
      )}

      {pantalla === 'dashboard' && (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Dashboard 
            usuario={usuario} 
            areasCompletadas={areasCompletadas}
            onSelectArea={handleSelectArea}
            onOpenGame={() => setPantalla('juego')}
            onReset={handleReset} // Pasamos la función de reinicio
          />
        </motion.div>
      )}

      {pantalla === 'area' && areaActiva && (
        <motion.div
          key="area"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <AreaDetail 
            area={areaActiva} 
            onBack={() => setPantalla('dashboard')} 
            onComplete={handleCompletarArea}
            // AQUÍ ESTÁ LA CLAVE: Le decimos si el área ya está completada
            isCompleted={areasCompletadas.includes(areaActiva.id)} 
          />
        </motion.div>
      )}

      {pantalla === 'juego' && (
        <motion.div
          key="juego"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#F1FAEE] pt-10"
        >
          <button onClick={() => setPantalla('dashboard')} className="ml-8 mb-4 text-[#1B4332] font-bold flex items-center gap-2 cursor-pointer">
            ← Volver al Panel
          </button>
          <Desafio />
        </motion.div>
      )}
    </AnimatePresence>
  );
}