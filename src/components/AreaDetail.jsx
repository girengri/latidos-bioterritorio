import { ArrowLeft, PlayCircle, FileText, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const videosAreas = {
  'los-nevados': 'https://www.youtube.com/embed/Tu_ID_Video_Nevados',
  'rio-blanco': 'https://www.youtube.com/embed/Tu_ID_Video_RioBlanco',
  'selva-florencia': 'https://www.youtube.com/embed/Tu_ID_Video_Selva',
  'guarinocito': 'https://www.youtube.com/embed/Tu_ID_Video_Guarinocito',
  'guacas': 'https://www.youtube.com/embed/Tu_ID_Video_Guacas',
  'bosques-chec': 'https://www.youtube.com/embed/Tu_ID_Video_CHEC',
};

export default function AreaDetail({ area, onBack, onComplete, isCompleted }) {
  const videoUrl = videosAreas[area.id] || 'https://www.youtube.com/embed/8K7w5m5b6c0'; 

  return (
    // 1. El contenedor base es oscuro, pero NO tiene el color sólido de la categoría
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0a1f14]">
      
      {/* 2. IMAGEN DE FONDO: Quitamos mix-blend-multiply y subimos la opacidad al 90% */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-90"
        style={{ backgroundImage: `url('${area.imagenFondo}')` }}
      ></div>
      
      {/* 3. TINTE DE COLOR (El toque sutil que pediste): Usamos el color de la categoría al 15% (sufijo 25) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: `${area.color}25` }}
      ></div>

      {/* 4. CAPA DE OSCURECIMIENTO GRADUAL: Para que el texto de arriba y abajo se lea bien, pero el centro sea claro */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none"></div>

      {/* CONTENIDO DE LA PÁGINA */}
      <div className="relative z-10">
        
        {/* Header / Título */}
        <div className="relative pt-24 pb-12 px-8 w-full max-w-4xl mx-auto">
          <button 
            onClick={onBack} 
            className="absolute top-8 left-8 bg-black/40 backdrop-blur-md p-3 rounded-full hover:bg-black/60 transition-colors cursor-pointer border border-white/20 shadow-lg"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <span 
            className="text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block shadow-lg border border-white/20"
            style={{ backgroundColor: area.color }}
          >
            {area.categoria}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{area.nombre}</h1>
          <p className="text-gray-100 max-w-2xl text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">{area.descripcion}</p>
        </div>

        {/* Cuerpo del contenido */}
        <div className="max-w-4xl mx-auto p-8 pt-0">
          
          {/* Sección de Normatividad */}
          <div 
            className="mb-12 bg-black/50 backdrop-blur-md border-l-4 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl"
            style={{ borderLeftColor: area.color }}
          >
            <div className="p-4 rounded-full bg-white/10">
              <FileText className="w-8 h-8" style={{ color: area.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Instrumento de Planificación</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Esta área se rige por su <strong>Plan de Manejo Ambiental (PMA)</strong>. Como administrador, tu labor es garantizar que las actividades humanas (turismo, investigación, uso de recursos) se realicen según la zonificación técnica, protegiendo los objetivos de conservación del SIDAP.
              </p>
            </div>
          </div>

          {/* Video Educativo */}
          <div 
            className="mb-12 bg-black rounded-3xl overflow-hidden shadow-2xl relative aspect-video border-2"
            style={{ borderColor: area.color }}
          >
             <iframe 
               width="100%" 
               height="100%" 
               src={videoUrl}
               title={`Documental de ${area.nombre}`}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             ></iframe>
             <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2 pointer-events-none">
               <PlayCircle className="w-4 h-4" style={{ color: area.color }} /> Documental del Área
             </div>
          </div>

          {/* Especies (Fichas) */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span style={{ color: area.color }}>●</span> Biodiversidad Clave
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {area.especies.map((esp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg cursor-default"
              >
                <div className="w-full h-24 bg-gray-800 rounded-xl mb-3 overflow-hidden">
                  <img src={esp.imagen} alt={esp.nombre} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-sm text-gray-100">{esp.nombre}</p>
                <p className="text-[10px] text-gray-400 capitalize border-t border-white/10 mt-2 pt-2">{esp.tipo}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{esp.dato}</p>
              </motion.div>
            ))}
          </div>

          {/* Sección de Desafío / Completado */}
          <div className="text-center bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-white">¿Listo para administrar esta área?</h3>
            
            {isCompleted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                className="flex flex-col items-center"
              >
                <p className="text-green-400 font-semibold mb-6 flex items-center justify-center gap-2">
                  <CheckCircle className="w-6 h-6" /> ¡Has obtenido la insignia de este territorio!
                </p>
                <button 
                  disabled
                  className="bg-green-600/20 text-green-400 border border-green-500/50 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 cursor-not-allowed"
                >
                  <CheckCircle className="w-5 h-5" /> Área Completada
                </button>
              </motion.div>
            ) : (
              <>
                <p className="text-gray-300 mb-6">Demuestra que conoces el Plan de Manejo de esta área superando el desafío técnico.</p>
                <button 
                  onClick={() => onComplete(area.id)}
                  className="text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
                  style={{ backgroundColor: area.color }}
                >
                  <Lock className="w-5 h-5" /> Iniciar Desafío para Completar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}