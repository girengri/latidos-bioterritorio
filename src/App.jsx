import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

// Componentes
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AreaDetail from './components/AreaDetail';

// Datos y persistencia
import { areas } from './data/areas';
import { 
  guardarUsuario, leerUsuario, 
  guardarProgreso, leerProgreso, 
  limpiarTodo 
} from './services/storage';

import audioNaturaleza from './assets/audio/naturaleza.mp3'; 

export default function App() {
  const navigate = useNavigate();
  const location = useLocation(); // Para saber en qué ruta estamos
  
  const [usuario, setUsuario] = useState('');
  const [areasCompletadas, setAreasCompletadas] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 1. Cargar datos persistentes al iniciar
  useEffect(() => {
    const savedUser = leerUsuario();
    const savedProgress = leerProgreso();

    if (savedUser) setUsuario(savedUser);
    if (savedProgress) setAreasCompletadas(savedProgress);
  }, []);

  // 2. Control Maestro del Audio
  useEffect(() => {
    if (!audioRef.current) return;

    // Si estamos en la pantalla de inicio, el audio se pausa
    if (location.pathname === '/') {
      audioRef.current.pause();
      return;
    }

    // Si no estamos en el splash, obedecemos al botón
    if (isPlaying) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(err => console.log("Audio bloqueado", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, location.pathname]);

  const toggleAudio = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  // 3. Handlers
  const handleEnter = () => {
    setIsPlaying(true); // Inicia audio
    navigate('/auth'); // Navega
  };
  
  const handleLogin = (nombre) => {
    setUsuario(nombre);
    guardarUsuario(nombre); // Guarda en storage
    navigate('/dashboard');
  };

  const handleCompletarArea = (id) => {
    if (!areasCompletadas.includes(id)) {
      const nuevoProgreso = [...areasCompletadas, id];
      setAreasCompletadas(nuevoProgreso);
      guardarProgreso(nuevoProgreso); // Guarda en storage
    }
  };

  const handleReset = () => {
    limpiarTodo(); // Limpia el storage
    setUsuario('');
    setAreasCompletadas([]);
    setIsPlaying(false);
    navigate('/'); // Devuelve al splash
  };

  // Envoltorio para AreaDetail que obtiene el ID de la URL
  function AreaDetailWrapper() {
    const { id } = useParams();
    const area = areas.find(a => a.id === id);

    if (!area) return <div className="text-white text-center mt-20">Área no encontrada</div>;

    return (
      <AreaDetail 
        area={area} 
        onBack={() => navigate('/dashboard')} 
        onComplete={handleCompletarArea}
        isCompleted={areasCompletadas.includes(area.id)} 
      />
    );
  }

  // Verificamos si estamos en el splash para ocultar el botón de audio
  const isSplash = location.pathname === '/';

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={audioNaturaleza} type="audio/mpeg" />
      </audio>

      {/* Botón flotante de audio (oculto en el splash) */}
      {!isSplash && (
        <button
          type="button"
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-[9999] bg-[#1B4332]/90 backdrop-blur-md p-3 rounded-full text-white shadow-2xl border-2 border-white/30 hover:bg-[#1B4332] hover:scale-110 transition-all cursor-pointer"
        >
          {isPlaying ? <Volume2 className="w-6 h-6 text-white" /> : <VolumeX className="w-6 h-6 text-red-400" />}
        </button>
      )}

      {/* ENRUTADOR CON ANIMACIONES */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 1.5 }}>
              <SplashScreen onEnter={handleEnter} />
            </motion.div>
          } />
          
          <Route path="/auth" element={
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.6 }}>
              <Auth onLogin={handleLogin} />
            </motion.div>
          } />
          
          <Route path="/dashboard" element={
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
              <Dashboard 
                usuario={usuario} 
                areasCompletadas={areasCompletadas}
                onSelectArea={(area) => navigate(`/area/${area.id}`)}
                onReset={handleReset}
              />
            </motion.div>
          } />
          
          <Route path="/area/:id" element={
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }}>
              <AreaDetailWrapper />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}