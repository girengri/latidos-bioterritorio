import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'motion/react'; // <-- Importamos motion
import { areas } from '../data/areas';

export default function MapaCaldas({ onSelectArea }) {
  const defaultCoords = [5.1, -75.3];

  const coords = {
    // PNN
    'los-nevados': [4.8500, -75.3500],
    'selva-florencia': [5.4667, -74.9333],
    // RFP
    'rio-blanco': [5.0500, -75.4500],
    'el-popal': [5.4000, -75.1000],
    'la-linda': [5.1000, -75.6000],
    'bosques-chec': [4.9800, -75.6500],
    'el-diamante': [5.3000, -74.9000],
    'tarcara': [5.5000, -75.3000],
    'plan-alto': [5.2000, -75.3000],
    'torre-4': [5.0000, -75.2000],
    'la-marina': [4.9000, -75.5000],
    'sabinas': [5.6000, -75.5000],
    // DMI
    'guarinocito': [5.4667, -74.6667],
    'laguna-san-diego': [5.3500, -75.0000],
    'cuchilla-bellavista': [5.6000, -75.0000],
    'cerro-guadalupe': [5.0500, -75.7000],
    'estrella-hidrica': [5.0000, -75.0000],
    // DCS
    'guacas': [5.2000, -75.5000],
    'el-gigante': [5.2500, -75.6500],
  };

  return (
    // 1. ANIMACIÓN DE ENTRADA: Envolvemos el div en un motion.div
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl relative z-0 border-4 border-white"
    >
      <MapContainer center={defaultCoords} zoom={9} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {areas.map((area) => {
          const posicion = coords[area.id] || defaultCoords;

          // 2. ICONO PERSONALIZADO CON PULSO Y HOVER
          const customIcon = L.divIcon({
            className: 'custom-marker bg-transparent border-none',
            html: `
              <div class="relative flex items-center justify-center w-8 h-8 group">
                <!-- Efecto de Onda (Pulso) -->
                <span class="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style="background-color: ${area.color};"></span>
                
                <!-- Punto Central (Con Hover) -->
                <span class="relative inline-flex rounded-full h-5 w-5 border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-150" style="background-color: ${area.color};"></span>
              </div>
            `,
            iconSize: [32, 32], // Aumentamos el tamaño para que quepa el pulso
            iconAnchor: [16, 16], // Centrado exacto
            popupAnchor: [0, -16]
          });

          return (
            <Marker key={area.id} position={posicion} icon={customIcon}>
              <Popup className="rounded-xl overflow-hidden shadow-lg">
                <div className="p-2 min-w-[200px]">
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wider text-white px-2 py-1 rounded-full mb-2 inline-block"
                    style={{ backgroundColor: area.color }}
                  >
                    {area.categoria}
                  </span>
                  <h3 className="font-bold text-[#1B4332] text-sm leading-tight mb-2">{area.nombre}</h3>
                  <button 
                    onClick={() => onSelectArea(area)}
                    className="w-full bg-[#1B4332] text-white py-2 rounded-lg font-bold hover:bg-[#2D6A4F] transition-colors cursor-pointer text-sm"
                  >
                    Explorar área
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </motion.div>
  );
}