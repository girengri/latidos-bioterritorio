import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, CheckCircle, Map, TreePine, Shield, Droplets, X, ArrowRight } from 'lucide-react';
import MapaCaldas from './MapaCaldas';
import { areas } from '../data/areas'; // Importamos las áreas reales

export default function Dashboard({ usuario, areasCompletadas, onSelectArea, onOpenGame, onReset }) {
  // Estado para controlar qué categoría se abrió en el modal
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);

  // Definimos las categorías y las conectamos con los IDs de las áreas
  const categorias = [
    { id: 'pnn', nombre: 'Parques Nacionales', icono: TreePine, color: 'bg-[#1B4332]', areaIds: ['los-nevados', 'selva-florencia'] },
    { id: 'rfp', nombre: 'Reservas Forestales', icono: Droplets, color: 'bg-[#2D6A4F]', areaIds: ['rio-blanco', 'bosques-chec'] },
    { id: 'dmi', nombre: 'Distritos de Manejo Integrado', icono: Map, color: 'bg-[#D4A373]', areaIds: ['guarinocito'] },
    { id: 'dcs', nombre: 'Conservación de Suelos', icono: Shield, color: 'bg-[#E9C46A]', areaIds: ['guacas'] },
  ];

  // Filtramos las áreas que pertenecen a la categoría abierta
  const areasDeCategoria = categoriaAbierta 
    ? areas.filter(a => categoriaAbierta.areaIds.includes(a.id))
    : [];

  return (
    <div className="min-h-screen bg-[#F1FAEE] pb-20 relative">
      
      {/* Header tipo Álbum */}
      <div className="bg-[#1B4332] text-white pt-10 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6A4F] rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Hola, {usuario} 👋</h1>
            <p className="text-[#E9C46A]">Gestor del Bioterritorio - Progreso: {areasCompletadas.length} de 19 áreas</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onReset}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer hidden md:block"
            >
              Reiniciar Juego
            </button>
            <div className="w-16 h-16 bg-[#E9C46A] rounded-full flex items-center justify-center text-[#1B4332] font-bold text-2xl shadow-lg border-4 border-white">
              {usuario.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              // Validamos cuántas áreas de esta categoría ya se completaron
              const completadasCat = cat.areaIds.filter(id => areasCompletadas.includes(id)).length;
              const totalCat = cat.areaIds.length;

              return (
                <motion.div
                  key={cat.id}
                  onClick={() => setCategoriaAbierta(cat)} // Abre el modal
                  whileHover={{ scale: 1.02 }}
                  className={`${cat.color} p-6 rounded-2xl shadow-md text-white flex items-center justify-between cursor-pointer relative overflow-hidden group`}
                >
                  <div className="flex items-center gap-4">
                    <cat.icono className="w-10 h-10 opacity-80" />
                    <div>
                      <h3 className="font-bold text-lg">{cat.nombre}</h3>
                      <p className="text-sm opacity-80">{completadasCat} de {totalCat} completadas</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </motion.div>
              );
            })}
          </div>
          
          {/* Botón Juego */}
          <button 
            onClick={onOpenGame}
            className="w-full bg-[#E9C46A] text-[#1B4332] p-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3 cursor-pointer mt-4"
          >
            Iniciar Desafío de Administrador <Shield className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MODAL DE CATEGORÍA (Se abre al dar clic en una tarjeta de la derecha) */}
      <AnimatePresence>
        {categoriaAbierta && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Fondo oscuro */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setCategoriaAbierta(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            {/* Contenido del Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden"
            >
              <div className={`${categoriaAbierta.color} p-6 text-white flex justify-between items-center`}>
                <div className="flex items-center gap-3">
                  <categoriaAbierta.icono className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{categoriaAbierta.nombre}</h3>
                </div>
                <button 
                  onClick={() => setCategoriaAbierta(null)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4">Selecciona un área para explorar su biodiversidad y normatividad:</p>
                <div className="space-y-3">
                  {areasDeCategoria.map(area => {
                    const isCompleted = areasCompletadas.includes(area.id);
                    return (
                      <button
                        key={area.id}
                        onClick={() => {
                          onSelectArea(area);
                          setCategoriaAbierta(null); // Cierra el modal al entrar al área
                        }}
                        className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#2D6A4F] hover:bg-gray-50 transition-all flex justify-between items-center cursor-pointer group"
                      >
                        <div>
                          <p className="font-bold text-[#1B4332]">{area.nombre}</p>
                          <p className="text-xs text-gray-500">{area.ecosistema}</p>
                        </div>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#2D6A4F] transition-colors" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}