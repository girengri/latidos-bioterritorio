import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Map, TreePine, Shield, Droplets, X, ArrowRight, HelpCircle, Trophy, Heart, Clock, Lightbulb } from 'lucide-react';
import MapaCaldas from './MapaCaldas';
import { areas } from '../data/areas';

export default function Dashboard({ usuario, areasCompletadas, onSelectArea, onReset }) {
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

  const categorias = [
    { id: 'pnn', nombre: 'Parques Nacionales', icono: TreePine, color: 'bg-[#1B4332]', areaIds: ['los-nevados', 'selva-florencia'] },
    { id: 'rfp', nombre: 'Reservas Forestales', icono: Droplets, color: 'bg-[#2D6A4F]', areaIds: ['rio-blanco', 'el-popal', 'la-linda', 'bosques-chec', 'el-diamante', 'tarcara', 'plan-alto', 'torre-4', 'la-marina', 'sabinas'] },
    { id: 'dmi', nombre: 'Distritos de Manejo Integrado', icono: Map, color: 'bg-[#D4A373]', areaIds: ['guarinocito', 'laguna-san-diego', 'cuchilla-bellavista', 'cerro-guadalupe', 'estrella-hidrica'] },
    { id: 'dcs', nombre: 'Conservación de Suelos', icono: Shield, color: 'bg-[#E9C46A]', areaIds: ['guacas', 'el-gigante'] },
  ];

  const areasDeCategoria = categoriaAbierta ? areas.filter(a => categoriaAbierta.areaIds.includes(a.id)) : [];

  return (
    <div className="min-h-screen bg-[#F1FAEE] pb-20 relative">
      
      {/* HEADER TIPO ÁLBUM CON INSIGNIAS */}
      <div className="bg-[#1B4332] text-white pt-10 pb-8 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F] rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Fila superior: Saludo y Avatar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Hola, {usuario} 👋</h1>
              <p className="text-[#E9C46A]">Gestor del Bioterritorio - Progreso: {areasCompletadas.length} de 19 áreas</p>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={onReset} className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer hidden md:block">
                Reiniciar Juego
              </button>
              <div className="w-16 h-16 bg-[#E9C46A] rounded-full flex items-center justify-center text-[#1B4332] font-bold text-2xl shadow-lg border-4 border-white">
                {usuario.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Fila de Insignias (Logros) */}
          <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="text-sm text-gray-300 mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#E9C46A]" /> Colección de Insignias
            </p>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => {
                const isCompleted = areasCompletadas.includes(area.id);
                return (
                  <div 
                    key={area.id}
                    title={area.nombre}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500
                      ${isCompleted 
                        ? 'border-white shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-110' 
                        : 'border-white/20 grayscale opacity-30'}`}
                    style={{ backgroundColor: isCompleted ? area.color : '#4B5563' }}
                  >
                    <Trophy className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mapa a la izquierda */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-[#1B4332]">Mapa de Áreas Protegidas</h2>
          <MapaCaldas onSelectArea={onSelectArea} />
        </div>

        {/* Categorías a la derecha */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1B4332]">Categorías de Gestión</h2>
          <div className="grid grid-cols-1 gap-4">
            {categorias.map((cat) => {
              const completadasCat = cat.areaIds.filter(id => areasCompletadas.includes(id)).length;
              const totalCat = cat.areaIds.length;

              return (
                <motion.div
                  key={cat.id}
                  onClick={() => setCategoriaAbierta(cat)}
                  whileHover={{ scale: 1.02 }}
                  className={`${cat.color} p-5 rounded-2xl shadow-md text-white flex items-center justify-between cursor-pointer relative overflow-hidden group`}
                >
                  <div className="flex items-center gap-4">
                    <cat.icono className="w-8 h-8 opacity-80" />
                    <div>
                      <h3 className="font-bold text-base">{cat.nombre}</h3>
                      <p className="text-sm opacity-80">{completadasCat} de {totalCat} completadas</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </motion.div>
              );
            })}
          </div>
          
          {/* BOTÓN DE INSTRUCCIONES */}
          <button 
            onClick={() => setMostrarInstrucciones(true)}
            className="w-full bg-white border-2 border-[#E9C46A] text-[#1B4332] p-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-[#F1FAEE] transition-colors flex items-center justify-center gap-3 cursor-pointer mt-4"
          >
            ¿Cómo jugar? <HelpCircle className="w-6 h-6 text-[#E9C46A]" />
          </button>
        </div>
      </div>

      {/* MODAL DE CATEGORÍA */}
      <AnimatePresence>
        {categoriaAbierta && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCategoriaAbierta(null)} className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"></motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden flex flex-col max-h-[80vh]">
              <div className={`${categoriaAbierta.color} p-6 text-white flex justify-between items-center shrink-0`}>
                <div className="flex items-center gap-3">
                  <categoriaAbierta.icono className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{categoriaAbierta.nombre}</h3>
                </div>
                <button onClick={() => setCategoriaAbierta(null)} className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-500 text-sm mb-4">Selecciona un área para explorar su biodiversidad y normatividad:</p>
                <div className="space-y-3">
                  {areasDeCategoria.map(area => {
                    const isCompleted = areasCompletadas.includes(area.id);
                    return (
                      <button key={area.id} onClick={() => { onSelectArea(area); setCategoriaAbierta(null); }} className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#2D6A4F] hover:bg-gray-50 transition-all flex justify-between items-center cursor-pointer group">
                        <div>
                          <p className="font-bold text-[#1B4332]">{area.nombre}</p>
                          <p className="text-xs text-gray-500">{area.ecosistema}</p>
                        </div>
                        {isCompleted ? <CheckCircle className="w-6 h-6 text-green-500 shrink-0" /> : <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#2D6A4F] transition-colors shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL DE INSTRUCCIONES */}
      <AnimatePresence>
        {mostrarInstrucciones && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMostrarInstrucciones(false)} className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"></motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden">
              <div className="bg-[#1B4332] p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-[#E9C46A]" />
                  <h3 className="text-2xl font-bold">Instrucciones del Juego</h3>
                </div>
                <button onClick={() => setMostrarInstrucciones(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#F1FAEE] p-3 rounded-full h-fit"><Trophy className="w-6 h-6 text-[#1B4332]" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B4332]">El Objetivo</h4>
                    <p className="text-gray-600 text-sm">Explora las 19 áreas del SIDAP Caldas, completa el desafío de cada una y colecciona todas las insignias en el mapa para convertirte en el Administrador del Bioterritorio.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-50 p-3 rounded-full h-fit"><Heart className="w-6 h-6 text-red-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B4332]">Vidas y Preguntas</h4>
                    <p className="text-gray-600 text-sm">Cada desafío tiene <strong>5 preguntas</strong> con 4 opciones de respuesta. Cuentas con <strong>2 vidas</strong>, lo que significa que solo puedes fallar 1 vez. Si fallas dos, pierdes. Necesitas acertar al menos 4 de 5 para ganar la insignia.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit"><Clock className="w-6 h-6 text-blue-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B4332]">Tiempo</h4>
                    <p className="text-gray-600 text-sm">Tienes <strong>60 segundos</strong> para responder cada pregunta. ¡Piensa rápido pero con cuidado!</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-yellow-50 p-3 rounded-full h-fit"><Lightbulb className="w-6 h-6 text-yellow-500" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B4332]">Comodines</h4>
                    <p className="text-gray-600 text-sm">Cuentas con dos ayudas por desafío: el <strong>50/50</strong> (elimina dos respuestas incorrectas) y la <strong>Pista</strong> (te da una ayuda sobre la respuesta correcta). Úsalos sabiamente.</p>
                  </div>
                </div>

                <button onClick={() => setMostrarInstrucciones(false)} className="w-full py-4 rounded-xl font-bold text-white text-lg bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors shadow-lg mt-4 cursor-pointer">
                  ¡Entendido, a jugar!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}