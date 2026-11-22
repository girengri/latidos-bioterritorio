import { useState, useEffect } from 'react';
import { ArrowLeft, PlayCircle, FileText, CheckCircle, Lock, X, Trophy, RotateCcw, XCircle, Heart, Clock, HelpCircle, Lightbulb, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const videosAreas = {
  'los-nevados': 'https://www.youtube.com/embed/tr44_1VlpbI?si=quSA4rJpkNCNwXwv',
  'selva-florencia': 'https://www.youtube.com/embed/CC3FZ9pERrA?si=pKmg7z41uryI-qkQ',
  'rio-blanco': 'https://www.youtube.com/embed/Blzam7Dtlbc?si=K6KAw-3yYug9kenO',
  'el-popal': 'https://www.youtube.com/embed/YNRmDLJ1v2c?si=kzVo9toPOqksvbyx',
  'la-linda': 'https://www.youtube.com/embed/7fLoKqXSB68?si=2ofUSpUdJ2euXTFZ',
  'bosques-chec': 'https://www.youtube.com/embed/D2vnM1fakp0?si=XRvUoHL8KqBkbzPb',
  'el-diamante': 'https://www.youtube.com/embed/gzda5-uSiIE?si=OmnXnlRtypzzRsLv',
  'tarcara': 'https://www.youtube.com/embed/gMWGxlB2weg?si=GRRPWBnmzMZLt1n2',
  'plan-alto': 'https://www.youtube.com/embed/DCDnWBbYC6U?si=GXtUC8yJzapEL9Rk',
  'torre-4': 'https://www.youtube.com/embed/y94MGKEjHMo?si=iiCTEf8y8HaILW2I',
  'la-marina': 'https://www.youtube.com/embed/gSvsb58fIbA?si=2qnF4F8-RMjyp77k',
  'guarinocito': 'https://www.youtube.com/embed/M9PmjzEHMuo?si=NYo-wAfrE1dI3n2R',
  'laguna-san-diego': 'https://www.youtube.com/embed/yjoIZuebilU?si=tB8LBwjmKUHMMJ8g',
  'cuchilla-bellavista': 'https://www.youtube.com/embed/cQS25u-Jywk?si=1oZmLSPjRZbN4VvG',
  'estrella-hidrica': 'https://www.youtube.com/embed/0qk5OjrMZgs?si=EQaS4Nhhrc5homaN',
  'guacas': 'https://www.youtube.com/embed/zA6xKQPNE3U?si=GxPl2oEo9-wLSt5I',
  'el-gigante': 'https://www.youtube.com/embed/h9XgOYgO-2c?si=oE2HQf4BQN8M1sF8',
};

const preguntasPorArea = {
  'los-nevados': [
    { 
      pregunta: "¿Qué ecosistema es el más representativo del PNN Los Nevados?", 
      opciones: ["Páramo y glaciar", "Selva húmeda tropical", "Humedal y manglar", "Bosque seco"], 
      correcta: 0,
      pista: "Piensa en las montañas altas y el frailejón."
    },
    { 
      pregunta: "¿Cuál de estas especies captura agua de la niebla y es clave en el páramo?", 
      opciones: ["El Oso de Anteojos", "El Frailejón", "La Babilla", "El Cóndor"], 
      correcta: 1,
      pista: "Es una planta con hojas peludas y tallo grueso."
    },
    { 
      pregunta: "¿Qué tipo de área protegida es Los Nevados?", 
      opciones: ["Distrito de Manejo Integrado", "Reserva Forestal", "Parque Nacional Natural", "Distrito de Conservación"], 
      correcta: 2,
      pista: "Es la categoría de mayor protección en Colombia."
    },
    { 
      pregunta: "¿Qué servicio ecosistémico principal brinda Los Nevados a la región?",
      opciones: ["Producción de petróleo", "Regulación hídrica (agua)", "Minería de oro", "Madera comercial"],
      correcta: 1,
      pista: "Su agua abastece a varias ciudades de Caldas."
    },
    {
      pregunta: "¿Quién administra directamente el PNN Los Nevados?",
      opciones: ["CORPOCALDAS", "Parques Nacionales Naturales (PNN)", "La Alcaldía de Manizales", "El Ejército Nacional"],
      correcta: 1,
      pista: "Es la entidad del gobierno nacional encargada de los parques."
    }
  ]
};

const preguntasGenerales = [
  { 
    pregunta: "¿Qué instrumento técnico rige la administración de esta área?", 
    opciones: ["El Plan de Ordenamiento Territorial (POT)", "El Plan de Manejo Ambiental (PMA)", "El Plan de Desarrollo Departamental", "El Código de Policía"], 
    correcta: 1,
    pista: "Es el documento que define qué se puede hacer y qué no en el área."
  },
  { 
    pregunta: "¿Quién lidera el Sistema Departamental de Áreas Protegidas (SIDAP) en Caldas?", 
    opciones: ["El Ministerio de Turismo", "CORPOCALDAS", "Las alcaldías municipales", "La Gobernación"], 
    correcta: 1,
    pista: "Es la corporación autónoma regional del departamento."
  },
  { 
    pregunta: "¿Qué significa que un área sea de 'conservación estricta'?", 
    opciones: ["Que se puede construir libremente", "Que su uso principal es la protección de la biodiversidad", "Que solo sirve para agricultura", "Que es de propiedad privada"], 
    correcta: 1,
    pista: "Su prioridad es la naturaleza, no el desarrollo urbano."
  },
  { 
    pregunta: "¿Cuál es el objetivo principal de las Reservas Forestales Protectoras?", 
    opciones: ["Extraer madera", "Proteger suelos y aguas", "Construir viviendas", "Fomentar la ganadería"], 
    correcta: 1,
    pista: "Se enfocan en los recursos naturales que nos dan vida."
  },
  { 
    pregunta: "¿Quiénes son actores clave en la gobernanza de las áreas protegidas?", 
    opciones: ["Solo el gobierno", "Solo las ONG", "Solo las empresas privadas", "Las comunidades locales y el gobierno"], 
    correcta: 3,
    pista: "La conservación es una corresponsabilidad de todos."
  }
];

export default function AreaDetail({ area, onBack, onComplete, isCompleted }) {
  const videoUrl = videosAreas[area.id] || 'https://www.youtube.com/embed/8K7w5m5b6c0'; 
  
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  
  const [vidas, setVidas] = useState(2);
  const [aciertos, setAciertos] = useState(0);
  const [tiempo, setTiempo] = useState(60);
  const [opcionesOcultas, setOpcionesOcultas] = useState([]);
  const [pistaVisible, setPistaVisible] = useState(false);
  const [comodines, setComodines] = useState({ cincuenta: true, pista: true });
  
  const [estadoJuego, setEstadoJuego] = useState('jugando'); 

  const preguntas = preguntasPorArea[area.id] || preguntasGenerales;
  const preguntaActual = preguntas[indicePregunta];

  const [opcionesMezcladas, setOpcionesMezcladas] = useState([]);

  useEffect(() => {
    if (isQuizOpen && preguntaActual) {
      const opcionesConEstado = preguntaActual.opciones.map((texto, index) => ({
        texto,
        isCorrecta: index === preguntaActual.correcta
      }));
      for (let i = opcionesConEstado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesConEstado[i], opcionesConEstado[j]] = [opcionesConEstado[j], opcionesConEstado[i]];
      }
      setOpcionesMezcladas(opcionesConEstado);
    }
  }, [indicePregunta, isQuizOpen, preguntaActual]);

  useEffect(() => {
    let intervalo;
    if (isQuizOpen && estadoJuego === 'jugando' && respuestaSeleccionada === null && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev - 1);
      }, 1000);
    } else if (tiempo === 0 && respuestaSeleccionada === null) {
      handleRespuesta(-1); 
    }
    return () => clearInterval(intervalo);
  }, [isQuizOpen, estadoJuego, respuestaSeleccionada, tiempo]);

  const handleRespuesta = (index) => {
    if (respuestaSeleccionada !== null) return; 
    setRespuestaSeleccionada(index);
    const esCorrecta = index !== -1 && opcionesMezcladas[index].isCorrecta;

    if (esCorrecta) {
      setAciertos((prev) => prev + 1);
    } else {
      const nuevasVidas = vidas - 1;
      setVidas(nuevasVidas);
      if (nuevasVidas === 0) {
        setTimeout(() => setEstadoJuego('derrota'), 2000);
      }
    }
  };

  const handleSiguiente = () => {
    if (vidas === 0) return;
    if (indicePregunta < preguntas.length - 1) {
      setIndicePregunta(indicePregunta + 1);
      setRespuestaSeleccionada(null);
      setTiempo(60);
      setOpcionesOcultas([]);
      setPistaVisible(false);
    } else {
      setEstadoJuego('victoria');
    }
  };

  const handleReiniciarQuiz = () => {
    setIndicePregunta(0);
    setRespuestaSeleccionada(null);
    setVidas(2);
    setAciertos(0);
    setTiempo(60);
    setOpcionesOcultas([]);
    setPistaVisible(false);
    setComodines({ cincuenta: true, pista: true });
    setEstadoJuego('jugando');
  };

  const handleFinalizarExitoso = () => {
    setIsQuizOpen(false);
    handleReiniciarQuiz();
    onComplete(area.id);
  };

  const usarCincuenta = () => {
    if (!comodines.cincuenta || respuestaSeleccionada !== null) return;
    const incorrectas = opcionesMezcladas.map((opt, i) => (!opt.isCorrecta ? i : null)).filter(i => i !== null);
    const aOcultar = incorrectas.sort(() => 0.5 - Math.random()).slice(0, 2); 
    setOpcionesOcultas(aOcultar);
    setComodines({ ...comodines, cincuenta: false });
  };

  const usarPista = () => {
    if (!comodines.pista || respuestaSeleccionada !== null) return;
    setPistaVisible(true);
    setComodines({ ...comodines, pista: false });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#0a1f14]">
      
      {/* IMAGEN DE FONDO Y TINTES */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-70" style={{ backgroundImage: `url('${area.imagenFondo}')` }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: `${area.color}25` }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none"></div>

      {/* CONTENIDO DE LA PÁGINA */}
      <div className="relative z-10">
        <div className="relative pt-24 pb-12 px-8 w-full max-w-4xl mx-auto">
          <button onClick={onBack} className="absolute top-8 left-8 bg-black/40 backdrop-blur-md p-3 rounded-full hover:bg-black/60 transition-colors cursor-pointer border border-white/20 shadow-lg">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block shadow-lg border border-white/20" style={{ backgroundColor: area.color }}>{area.categoria}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{area.nombre}</h1>
          <p className="text-gray-100 max-w-2xl text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">{area.descripcion}</p>
        </div>

        <div className="max-w-4xl mx-auto p-8 pt-0">
          
          {/* Normatividad y Enlace al PMA */}
          <div className="mb-12 bg-black/50 backdrop-blur-md border-l-4 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl" style={{ borderLeftColor: area.color }}>
            <div className="p-4 rounded-full bg-white/10 shrink-0"><FileText className="w-8 h-8" style={{ color: area.color }} /></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">Instrumento de Planificación</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Esta área se rige por su <strong>Plan de Manejo Ambiental (PMA)</strong>. Como administrador, tu labor es garantizar que las actividades humanas se realicen según la zonificación técnica.</p>
              
              {/* BOTÓN DEL PMA AGREGADO AQUÍ */}
              {area.documentoPMA && (
                <a 
                  href={area.documentoPMA} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:brightness-110 shadow-lg cursor-pointer"
                  style={{ backgroundColor: area.color }}
                >
                  <ExternalLink className="w-4 h-4" /> Ver Documento del PMA
                </a>
              )}
            </div>
          </div>

          {/* Video */}
          <div className="mb-12 bg-black rounded-3xl overflow-hidden shadow-2xl relative aspect-video border-2" style={{ borderColor: area.color }}>
             <iframe width="100%" height="100%" src={videoUrl} title={`Documental de ${area.nombre}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2 pointer-events-none">
               <PlayCircle className="w-4 h-4" style={{ color: area.color }} /> Documental del Área
             </div>
          </div>

          {/* Especies */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span style={{ color: area.color }}>●</span> Biodiversidad Clave
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {area.especies.map((esp, i) => (
              <motion.div key={i} whileHover={{ y: -5, scale: 1.02 }} className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg cursor-default">
                <div className="w-full h-24 bg-gray-800 rounded-xl mb-3 overflow-hidden"><img src={esp.imagen} alt={esp.nombre} className="w-full h-full object-cover" /></div>
                <p className="font-bold text-sm text-gray-100">{esp.nombre}</p>
                <p className="text-[10px] text-gray-400 capitalize border-t border-white/10 mt-2 pt-2">{esp.tipo}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{esp.dato}</p>
              </motion.div>
            ))}
          </div>

          {/* Botón de Juego */}
          <div className="text-center bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 text-white">¿Listo para administrar esta área?</h3>
            {isCompleted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                <p className="text-green-400 font-semibold mb-6 flex items-center justify-center gap-2"><CheckCircle className="w-6 h-6" /> ¡Has obtenido la insignia de este territorio!</p>
                <button disabled className="bg-green-600/20 text-green-400 border border-green-500/50 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 cursor-not-allowed"><CheckCircle className="w-5 h-5" /> Área Completada</button>
              </motion.div>
            ) : (
              <>
                <p className="text-gray-300 mb-6">Demuestra que conoces el Plan de Manejo superando el desafío técnico.</p>
                <button onClick={() => setIsQuizOpen(true)} className="text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg flex items-center gap-2 mx-auto cursor-pointer" style={{ backgroundColor: area.color }}>
                  <Lock className="w-5 h-5" /> Iniciar Desafío para Completar
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DEL JUEGO (QUIZ) */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 backdrop-blur-md"></motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-[#111827] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col">
              
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[1, 2].map((vida) => (
                      <Heart key={vida} className={`w-5 h-5 ${vida <= vidas ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <div className={`flex items-center gap-1 font-bold ${tiempo <= 10 ? 'text-red-500 animate-pulse' : 'text-gray-300'}`}>
                    <Clock className="w-5 h-5" /> {tiempo}s
                  </div>
                </div>
                <button onClick={() => setIsQuizOpen(false)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-gray-400"><X className="w-5 h-5" /></button>
              </div>

              <div className="p-8">
                {estadoJuego === 'jugando' && (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-2 w-1/2">
                        {preguntas.map((_, i) => (
                          <div key={i} className={`h-2 flex-1 rounded-full ${i <= indicePregunta ? '' : 'bg-white/10'}`} style={{ backgroundColor: i <= indicePregunta ? area.color : undefined }} />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={usarCincuenta} disabled={!comodines.cincuenta} className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${comodines.cincuenta ? 'bg-blue-600 hover:bg-blue-500 cursor-pointer' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}><HelpCircle className="w-3 h-3" /> 50/50</button>
                        <button onClick={usarPista} disabled={!comodines.pista} className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${comodines.pista ? 'bg-yellow-600 hover:bg-yellow-500 cursor-pointer' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}><Lightbulb className="w-3 h-3" /> Pista</button>
                      </div>
                    </div>

                    <p className="text-sm font-semibold mb-2" style={{ color: area.color }}>Pregunta {indicePregunta + 1} de {preguntas.length}</p>
                    <h4 className="text-xl font-bold text-white mb-4">{preguntaActual.pregunta}</h4>

                    {pistaVisible && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-200 text-sm flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 shrink-0" /> <strong>Pista:</strong> {preguntaActual.pista}
                      </motion.div>
                    )}

                    <div className="space-y-3">
                      {opcionesMezcladas.map((opcion, index) => {
                        if (opcionesOcultas.includes(index)) return null; 
                        let buttonClass = "border-white/10 hover:border-white/30 text-gray-300";
                        let Icon = null;

                        if (respuestaSeleccionada !== null) {
                          if (opcion.isCorrecta) {
                            buttonClass = "border-green-500 bg-green-500/10 text-green-400";
                            Icon = CheckCircle;
                          } else if (index === respuestaSeleccionada) {
                            buttonClass = "border-red-500 bg-red-500/10 text-red-400";
                            Icon = XCircle;
                          } else {
                            buttonClass = "border-white/5 text-gray-600 opacity-50";
                          }
                        }

                        return (
                          <button key={index} onClick={() => handleRespuesta(index)} disabled={respuestaSeleccionada !== null} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${buttonClass} ${respuestaSeleccionada === null ? 'cursor-pointer' : 'cursor-default'}`}>
                            <span>{opcion.texto}</span>
                            {Icon && <Icon className="w-5 h-5 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {respuestaSeleccionada === -1 && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 mt-4 text-center font-bold">¡Tiempo agotado! La respuesta correcta era la resaltada en verde.</motion.p>
                    )}

                    {respuestaSeleccionada !== null && vidas > 0 && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex justify-end">
                        <button onClick={handleSiguiente} className="px-6 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90 cursor-pointer" style={{ backgroundColor: area.color }}>
                          {indicePregunta < preguntas.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                        </button>
                      </motion.div>
                    )}
                  </>
                )}

                {estadoJuego === 'victoria' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                    <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                    <h3 className="text-3xl font-bold text-white mb-2">¡Desafío Superado!</h3>
                    <p className="text-gray-400 mb-8">
                      Has demostrado conocer el Plan de Manejo de {area.nombre}. <br/>
                      <strong className="text-white">Aciertos: {aciertos} de {preguntas.length}</strong>. Has ganado la insignia.
                    </p>
                    <button onClick={handleFinalizarExitoso} className="w-full py-4 rounded-xl font-bold text-white text-lg hover:brightness-110 transition-all shadow-lg cursor-pointer" style={{ backgroundColor: area.color }}>Reclamar Insignia y Completar</button>
                  </motion.div>
                )}

                {estadoJuego === 'derrota' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                    <XCircle className="w-20 h-20 mx-auto mb-4 text-red-500" />
                    <h3 className="text-3xl font-bold text-white mb-2">Juego Terminado</h3>
                    <p className="text-gray-400 mb-8">
                      Te has quedado sin vidas (solo se permite fallar 1 vez). <br/>
                      Aciertos: {aciertos}. Repasa la información e inténtalo de nuevo.
                    </p>
                    <button onClick={handleReiniciarQuiz} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"><RotateCcw className="w-5 h-5" /> Reintentar Desafío</button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}