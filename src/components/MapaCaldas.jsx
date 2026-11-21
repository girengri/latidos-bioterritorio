import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { areas } from '../data/areas';

export default function MapaCaldas({ onSelectArea }) {
  // Coordenadas centrales de Caldas
  const defaultCoords = [5.1, -75.3];

  // Coordenadas ajustadas para las 6 áreas (aproximadas para el demo)
  const coords = {
    'los-nevados': [4.8500, -75.3500],
    'rio-blanco': [5.0500, -75.4500],
    'selva-florencia': [5.4667, -74.9333],
    'guarinocito': [5.4667, -74.6667], // Ajustada más al norte (La Dorada)
    'guacas': [5.2000, -75.5000], // Ajustada al noroccidente
    'bosques-chec': [4.9800, -75.6500], // Ajustada hacia el sur-occidente
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
                width: 24px; 
                height: 24px; 
                border-radius: 50%; 
                border: 3px solid white; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                transition: transform 0.2s;
              "></div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12], // Centra el icono en la coordenada
            popupAnchor: [0, -12]
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
                  <h3 className="font-bold text-[#1B4332] text-lg leading-tight mb-2">{area.nombre}</h3>
                  <button 
                    onClick={() => onSelectArea(area)}
                    className="w-full bg-[#1B4332] text-white py-2 rounded-lg font-bold hover:bg-[#2D6A4F] transition-colors cursor-pointer"
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