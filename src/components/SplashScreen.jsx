import { motion } from 'motion/react';
import { Play, Volume2 } from 'lucide-react';
import audioNaturaleza from '../assets/audio/naturaleza.mp3'; 

export default function SplashScreen({ onEnter }) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a1f14]">
      {/* Imagen de fondo animada (fade-in lento) */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop')" }}
      ></motion.div>
      
      {/* Capa de gradiente para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14] via-transparent to-[#0a1f14]/70"></div>

      <div className="relative z-10 text-center px-6">
        {/* Animación ultra suave: duración 3s, retraso de 0.5s, zoom sutil de 0.85 a 1 */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 3, 
            delay: 0.5, 
            ease: [0.16, 1, 0.3, 1] // Curva de aceleración muy suave (easeOutExpo)
          }} 
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display tracking-tight drop-shadow-lg">
            Latidos del <span className="text-[#E9C46A]">Bioterritorio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Una experiencia interactiva para proteger la vida en Caldas.
          </p>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }} // El botón aparece al final
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Aquí puedes inicializar el audio:
              const audio = new Audio(audioNaturaleza);
              audio.volume = 0.3;
              audio.play();
              onEnter();
            }}
            className="group relative inline-flex items-center gap-3 bg-[#E9C46A] text-[#1B4332] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(233,196,106,0.4)] cursor-pointer"
          >
            <Play className="w-6 h-6 fill-current" />
            Entrar al Territorio
            <Volume2 className="w-5 h-5 ml-2 opacity-70 group-hover:opacity-100" />
          </motion.button>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-4 text-sm text-gray-400"
          >
            Activa el sonido para una experiencia completa
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}