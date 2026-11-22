import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { areas } from '../data/areas';

export default function MapaCaldas({ onSelectArea }) {
  // Coordenadas centrales de Caldas
  const defaultCoords = [5.1, -75.3];

  // Coordenadas para las 19 áreas protegidas
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
    <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl relative z-0 border-4 border-white">
      <MapContainer center={defaultCoords} zoom={9} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {areas.map((area) => {
          const posicion = coords[area.id] || defaultCoords;

          // Creamos un icono personalizado usando el color del área
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background-color: ${area.color}; 
                width: 20px; 
                height: 20px; 
                border-radius: 50%; 
                border: 3px solid white; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                transition: transform 0.2s;
              "></div>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            popupAnchor: [0, -10]
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
    </div>
  );
}