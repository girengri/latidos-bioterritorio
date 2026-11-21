// src/data/areas.js

// Importamos las imágenes locales que ya descargaste
import oso from '../assets/especies/oso-de-anteojos.jpg';
import frailejon from '../assets/especies/frailejon.jpg';
import condor from '../assets/especies/condor.jpg';
import grallaria from '../assets/especies/grallaria.jpg';
import ranaRoja from '../assets/especies/rana-roja.jpg';
import palmaCera from '../assets/especies/palma-de-cera.jpg';
import colibri from '../assets/especies/colibri.jpg';

export const areas = [
  {
    id: 'los-nevados',
    nombre: 'PNN Los Nevados',
    categoria: 'Parque Nacional Natural',
    ecosistema: 'Páramo y glaciar',
    descripcion: 'Área de conservación estricta. Alberga el ecosistema de páramo, fundamental para la regulación hídrica de Caldas.',
    color: '#1B4332',
    imagenFondo: 'https://images.unsplash.com/photo-1618828665021-7e2df7df7d7b?q=80&w=1600',
    especies: [
      { nombre: 'Frailejón', tipo: 'flora', imagen: frailejon, dato: 'Especie clave para la captura de agua.' },
      { nombre: 'Cóndor de los Andes', tipo: 'fauna', imagen: condor, dato: 'Ave emblemática en peligro de extinción.' },
      { nombre: 'Oso de Anteojos', tipo: 'fauna', imagen: oso, dato: 'El mayor carnívoro de Suramérica, habita en los bosques andinos.' },
    ],
  },
  {
    id: 'rio-blanco',
    nombre: 'RFP Río Blanco',
    categoria: 'Reserva Forestal Protectora Nacional',
    ecosistema: 'Bosque de niebla',
    descripcion: 'Área de protección de suelos y aguas. Abastece el acueducto de Manizales.',
    color: '#2D6A4F',
    imagenFondo: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600',
    especies: [
      { nombre: 'Grallaria milleri', tipo: 'fauna', imagen: grallaria, dato: 'Ave endémica de los bosques de niebla.' },
      { nombre: 'Mariposa Morpho', tipo: 'fauna', imagen: 'https://placehold.co/200x200?text=Mariposa', dato: 'Sus alas azules brillan en la penumbra del bosque.' },
    ],
  },
  {
    id: 'selva-florencia',
    nombre: 'PNN Selva de Florencia',
    categoria: 'Parque Nacional Natural',
    ecosistema: 'Selva húmeda',
    descripcion: 'Selva húmeda del oriente de Caldas. Alberga una gran biodiversidad y especies endémicas.',
    color: '#1B4332',
    imagenFondo: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600',
    especies: [
      { nombre: 'Rana Roja', tipo: 'fauna', imagen: ranaRoja, dato: 'Anfibio venenoso que habita en la hojarasca.' },
      { nombre: 'Mono Tití', tipo: 'fauna', imagen: 'https://placehold.co/200x200?text=Mono+Titi', dato: 'Pequeño primate endémico de Colombia.' },
    ],
  },
  {
    id: 'guarinocito',
    nombre: 'DMI Charca de Guarinocito',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Humedal y bosque seco',
    descripcion: 'Área de manejo integrado donde se armoniza la conservación con el uso sostenible de los recursos por parte de las comunidades.',
    color: '#D4A373',
    imagenFondo: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600',
    especies: [
      { nombre: 'Babilla', tipo: 'fauna', imagen: 'https://placehold.co/200x200?text=Babilla', dato: 'Especie característica de los humedales del Magdalena.' },
      { nombre: 'Iguana Verde', tipo: 'fauna', imagen: 'https://placehold.co/200x200?text=Iguana', dato: 'Reptil que se asolea en los árboles cercanos al agua.' },
    ],
  },
  {
    id: 'guacas',
    nombre: 'DCS Guacas-El Rosario',
    categoria: 'Distrito de Conservación de Suelos',
    ecosistema: 'Suelos y laderas',
    descripcion: 'Zona enfocada en la restauración y protección de suelos degradados para prevenir deslizamientos y erosión.',
    color: '#E9C46A',
    imagenFondo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600',
    especies: [
      { nombre: 'Guadua', tipo: 'flora', imagen: 'https://placehold.co/200x200?text=Guadua', dato: 'Planta clave para la estabilización de suelos.' },
      { nombre: 'Roble Andino', tipo: 'flora', imagen: 'https://placehold.co/200x200?text=Roble', dato: 'Árbol de gran tamaño que protege las fuentes hídricas.' },
    ],
  },
  {
    id: 'bosques-chec',
    nombre: 'RFP Bosques de CHEC',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Reserva ubicada en zonas de influencia hidroeléctrica, protegiendo cuencas abastecedoras.',
    color: '#2D6A4F',
    imagenFondo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600',
    especies: [
      { nombre: 'Palma de Cera', tipo: 'flora', imagen: palmaCera, dato: 'Árbol nacional de Colombia, en peligro de extinción.' },
      { nombre: 'Colibrí', tipo: 'fauna', imagen: colibri, dato: 'Polinizador vital para la flora del bosque andino.' },
    ],
  },
];