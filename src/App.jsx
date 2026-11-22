import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import AreaDetail from './components/AreaDetail';
import Desafio from './components/Desafio';

// Tu archivo local de audio
import audioNaturaleza from './assets/audio/naturaleza.mp3'; 

export default function App() {
  const [pantalla, setPantalla] = useState('splash');
  const [usuario, setUsuario] = useState('');
  const [areaActiva, setAreaActiva] = useState(null);
  const [areasCompletadas, setAreasCompletadas] = useState([]);
  
  // ESTADO CLAVE: isPlaying en lugar de isMuted
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('bioterritorio_user');
    const savedProgress = localStorage.getItem('bioterritorio_progreso');

    if (savedUser) {
      setUsuario(savedUser);
      setPantalla('dashboard');
    }
    if (savedProgress) {
      try {
        setAreasCompletadas(JSON.parse(savedProgress));
      } catch (error) {
        console.error("Error al leer el progreso guardado", error);
      }
    }
  }, []);

  const iniciarAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Volumen inicial al 40%
      audioRef.current.play()
        .then(() => setIsPlaying(true)) // Marcamos que está sonando
        .catch(error => console.log("El navegador bloqueó el audio.", error));
    }
  };

  // FUNCIÓN DEFINITIVA: Pausar y Reproducir
  const toggleAudio = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause(); // ¡Esto detiene el audio de verdad!
        setIsPlaying(false);
      }
    }
  };

  const handleEnter = () => {
    iniciarAudio(); // Inicia la música al entrar
    setPantalla('auth');
  };
  
  const handleLogin = (nombre) => {
    setUsuario(nombre);
    localStorage.setItem('bioterritorio_user', nombre);
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
      localStorage.setItem('bioterritorio_progreso', JSON.stringify(nuevoProgreso)); 
    }
  };

  const handleReset = () => {
    localStorage.removeItem('bioterritorio_user');
    localStorage.removeItem('bioterritorio_progreso');
    setUsuario('');
    setAreasCompletadas([]);
    setPantalla('splash');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reinicia el audio al segundo 0
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* ELEMENTO DE AUDIO CON TU ARCHIVO LOCAL */}
      <audio ref={audioRef} loop>
        <source src={audioNaturaleza} type="audio/mpeg" />
      </audio>

      {/* BOTÓN FLOTANTE DE SILENCIO (Usa isPlaying) */}
      <button
        type="button"
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[9999] bg-[#1B4332]/90 backdrop-blur-md p-3 rounded-full text-white shadow-2xl border-2 border-white/30 hover:bg-[#1B4332] hover:scale-110 transition-all cursor-pointer"
        title={isPlaying ? "Pausar sonido" : "Reanudar sonido"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white" />
        ) : (
          <VolumeX className="w-6 h-6 text-red-400" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {pantalla === 'splash' && (
          <motion.div key="splash" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <SplashScreen onEnter={handleEnter} />
          </motion.div>
        )}

        {pantalla === 'auth' && (
          <motion.div key="auth" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Auth onLogin={handleLogin} />
          </motion.div>
        )}

        {pantalla === 'dashboard' && (
          <motion.div key="dashboard" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
            <Dashboard 
              usuario={usuario} 
              areasCompletadas={areasCompletadas}
              onSelectArea={handleSelectArea}
              onOpenGame={() => setPantalla('juego')}
              onReset={handleReset}
            />
          </motion.div>
        )}

        {pantalla === 'area' && areaActiva && (
          <motion.div key="area" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }}>
            <AreaDetail 
              area={areaActiva} 
              onBack={() => setPantalla('dashboard')} 
              onComplete={handleCompletarArea}
              isCompleted={areasCompletadas.includes(areaActiva.id)} 
            />
          </motion.div>
        )}

        {pantalla === 'juego' && (
          <motion.div key="juego" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="min-h-screen bg-[#F1FAEE] pt-10">
            <button onClick={() => setPantalla('dashboard')} className="ml-8 mb-4 text-[#1B4332] font-bold flex items-center gap-2 cursor-pointer">
              ← Volver al Panel
            </button>
            <Desafio />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}