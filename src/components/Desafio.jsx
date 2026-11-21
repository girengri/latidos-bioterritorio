// src/components/Desafio.jsx (Reemplaza el array de preguntas)
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, ShieldAlert } from 'lucide-react';

const preguntas = [
  {
    id: 1,
    pregunta: 'Eres el administrador de la Reserva Forestal Protectora Río Blanco. Un agricultor quiere ampliar su cultivo dentro de los límites de la reserva. Según la normatividad (Ley 99 de 1993), ¿qué debes hacer?',
    opciones: [
      { texto: 'Permitir la expansión porque genera economía local.', correcta: false, feedback: 'Incorrecto. Las Reservas Forestales Protectoras tienen vocación de conservación estricta de suelos y aguas. La expansión agrícola está restringida.' },
      { texto: 'Prohibir el acceso a toda la comunidad y militarizar la zona.', correcta: false, feedback: 'Incorrecto. La gobernanza requiere diálogo y educación ambiental, no solo medidas de fuerza.' },
      { texto: 'Aplicar el Plan de Manejo Ambiental (PMA), restringir la expansión y ofrecer alternativas de producción sostenible fuera del área.', correcta: true, feedback: 'Correcto. El PMA es el instrumento técnico y normativo que rige la administración y resuelve conflictos de uso.' },
    ],
  },
  {
    id: 2,
    pregunta: 'En el Distrito de Manejo Integrado (DMI) Charca de Guarinocito, se busca proteger el humedal, pero las comunidades locales pescan en él. ¿Cómo abordas esta situación bajo la normativa?',
    opciones: [
      { texto: 'Expulsar a los pescadores para que el ecosistema se recupere solo.', correcta: false, feedback: 'Incorrecto. El DMI es una categoría que permite el uso sostenible y la participación comunitaria.' },
      { texto: 'Regular la pesca mediante acuerdos comunitarios, vedas y monitoreo participativo, armonizando conservación y uso.', correcta: true, feedback: 'Correcto. Los Distritos de Manejo Integrado buscan el equilibrio entre la protección del ecosistema y el sustento de las comunidades.' },
      { texto: 'Ignorar la pesca y enfocarse solo en sembrar árboles.', correcta: false, feedback: 'Incorrecto. La gestión debe ser integral y atender los conflictos socioambientales.' },
    ],
  },
  {
    id: 3,
    pregunta: 'El PNN Los Nevados presenta un alto riesgo por turismo desordenado (basura, pisoteo del frailejón). ¿Cuál es el principal instrumento de planificación para controlar esto?',
    opciones: [
      { texto: 'El Plan de Ordenamiento Territorial (POT) del municipio.', correcta: false, feedback: 'Incorrecto. El POT regula el suelo urbano/rural municipal, pero los PNN tienen su propia administración nacional y plan de manejo.' },
      { texto: 'El Plan de Manejo del Parque Nacional con zonificación (intangible, primitiva, recuperación, uso público).', correcta: true, feedback: 'Correcto. La zonificación del Plan de Manejo define dónde se puede hacer turismo y dónde está prohibido para proteger los ecosistemas.' },
      { texto: 'Cobrar una multa a los turistas.', correcta: false, feedback: 'Incorrecto. Aunque hay sanciones, la regulación primaria se da a través de la zonificación del Plan de Manejo.' },
    ],
  },
  {
    id: 4,
    pregunta: 'En el Distrito de Conservación de Suelos (DCS) Guacas-El Rosario hay riesgo de deslizamientos por ganadería extensiva. ¿Qué acción es la más acertada?',
    opciones: [
      { texto: 'Implementar barreras vivas, reforestación con guadua y acuerdos de conservación con los ganaderos.', correcta: true, feedback: 'Correcto. El DCS busca restaurar y proteger suelos; la reforestación y los acuerdos son las herramientas técnicas del PMA.' },
      { texto: 'Prohibir la ganadería inmediatamente sin dar alternativas.', correcta: false, feedback: 'Incorrecto. Sin alternativas productivas, las comunidades no pueden cumplir la norma. Se debe acompañar con educación y apoyo.' },
    ],
  },
];

export default function Desafio() {
  // ... (el resto de la lógica del componente se mantiene igual)
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [completado, setCompletado] = useState(false);

  const preguntaActual = preguntas[indice];

  const handleSeleccion = (opcion) => {
    if (mostrarFeedback) return;
    setSeleccion(opcion);
    setMostrarFeedback(true);
  };

  const handleSiguiente = () => {
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
      setSeleccion(null);
      setMostrarFeedback(false);
    } else {
      setCompletado(true);
    }
  };

  const handleReiniciar = () => {
    setIndice(0);
    setSeleccion(null);
    setMostrarFeedback(false);
    setCompletado(false);
  };

  if (completado) {
    return (
      <section className="py-20 px-6 bg-[#F1FAEE]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center"
        >
          <CheckCircle className="w-16 h-16 text-[#2D6A4F] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#1B4332] mb-4">¡Desafío Superado!</h2>
          <p className="text-gray-600 mb-8">
            Has demostrado comprender los instrumentos de planificación y gobernanza del SIDAP Caldas. En la versión completa, podrás desbloquear insignias por cada una de las 19 áreas.
          </p>
          <button
            onClick={handleReiniciar}
            className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2D6A4F] transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Volver a intentar
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-[#F1FAEE] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShieldAlert className="w-8 h-8 text-[#E9C46A]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332]">
            El Desafío del Administrador
          </h2>
        </div>
        
        {/* Barra de progreso */}
        <div className="flex gap-2 mb-8">
          {preguntas.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${
                i <= indice ? 'bg-[#2D6A4F]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={indice}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <p className="text-sm font-semibold text-[#D4A373] mb-2 uppercase tracking-wide">
              Caso {indice + 1} de {preguntas.length}
            </p>
            <h3 className="text-2xl font-bold text-[#1B4332] mb-6">{preguntaActual.pregunta}</h3>

            <div className="space-y-3">
              {preguntaActual.opciones.map((opcion, i) => {
                let estilo = 'border-gray-200 hover:border-[#2D6A4F] hover:bg-gray-50';
                if (mostrarFeedback && seleccion === opcion) {
                  estilo = opcion.correcta
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50';
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleSeleccion(opcion)}
                    disabled={mostrarFeedback}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${estilo} disabled:cursor-default`}
                  >
                    <div className="flex items-start gap-3">
                      {mostrarFeedback && seleccion === opcion && (
                        opcion.correcta
                          ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          : <XCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      )}
                      <div>
                        <p className="font-medium text-gray-800">{opcion.texto}</p>
                        {mostrarFeedback && seleccion === opcion && (
                          <p className="text-sm mt-3 text-gray-600 bg-white/50 p-3 rounded-lg">{opcion.feedback}</p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {mostrarFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-end"
              >
                <button
                  onClick={handleSiguiente}
                  className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2D6A4F] transition-colors"
                >
                  {indice === preguntas.length - 1 ? 'Finalizar Desafío' : 'Siguiente Caso'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}