// src/data/areas.js

import oso from '../assets/especies/oso-de-anteojos.jpg';
import frailejon from '../assets/especies/frailejon.jpg';
import condor from '../assets/especies/condor.jpg';
import grallaria from '../assets/especies/grallaria.jpg';
import ranaRoja from '../assets/especies/rana-roja.jpg';
import palmaCera from '../assets/especies/palma-de-cera.jpg';
import colibri from '../assets/especies/colibri.jpg';
import mariposaMorpho from '../assets/especies/mariposa-morpho.jpg';
import monoTiti from '../assets/especies/mono-titi.jpg';
import babilla from '../assets/especies/babilla.jpg';
import iguanaVerde from '../assets/especies/iguana-verde.jpg';
import guadua from '../assets/especies/guadua.jpg';
import robleAndino from '../assets/especies/roble-andino.jpg';

// --- Importación de imágenes de fondo (locales) ---
import nevados from '../assets/fondos/nevados.jpg';
import florencia from '../assets/fondos/florencia.jpg';
import rioblanco from '../assets/fondos/rioblanco.jpg';
import popal from '../assets/fondos/popal.jpg';


export const areas = [
  // 1. PNN Los Nevados
  {
    id: 'los-nevados',
    nombre: 'PNN Los Nevados',
    categoria: 'Parque Nacional Natural',
    ecosistema: 'Páramo y glaciar',
    descripcion: 'Situado en el corazón del Eje Cafetero, este parque se destaca por las cumbres nevadas de sus tres montañas principales, que forman parte de un complejo volcánico: los Nevados del Ruiz (Kumanday), Santa Isabel (Poleka Kasue) y Tolima (Dulima). Aquí también se resguardan humedales altoandinos, bosques y páramos con un alto valor natural y cultural. Caminar por sus senderos es conocer ecosistemas que abastecen de agua a millones de habitantes en la región cafetera, mientras se descubre una biodiversidad adaptada a las condiciones extremas de la alta montaña.',
    color: '#1B4332',
    imagenFondo: nevados,
    especies: [
      { nombre: 'Frailejón', tipo: 'flora', imagen: frailejon, dato: 'Especie clave para la captura de agua.' },
      { nombre: 'Cóndor de los Andes', tipo: 'fauna', imagen: condor, dato: 'Ave emblemática en peligro de extinción.' },
      { nombre: 'Oso de Anteojos', tipo: 'fauna', imagen: oso, dato: 'El mayor carnívoro de Suramérica.' },
    ],
  },
  // 2. PNN Selva de Florencia
  {
    id: 'selva-florencia',
    nombre: 'PNN Selva de Florencia',
    categoria: 'Parque Nacional Natural',
    ecosistema: 'Selva húmeda',
    descripcion: 'El Parques Nacional Natural Selva de Florencia fue declarado el día 10 de marzo de 2005. Se encuentra ubicado en la Cordillera Central, al oriente del Departamento de Caldas, en los municipios de Samaná (78%) y Pensilvania (22%). Su extensión es de 10.019 hectáreas. Se encuentra ubicado en un amplio gradiente altitudinal que va desde los 850 hasta los 2400 metros, donde se presenta una variedad de climas, geología, geomorfología y suelos propios de los Andes Tropicales. Esto propicia el establecimiento de una enorme variedad de vida. La flora y fauna presente en el Parque es típica de la selva húmeda tropical, pero con elementos andinos propios de los pisos térmicos subandino y andino. El Parque es considerado la Estrella Hídrica del Oriente Caldense.',
    color: '#1B4332',
    imagenFondo: florencia,
    especies: [
      { nombre: 'Rana Roja', tipo: 'fauna', imagen: ranaRoja, dato: 'Anfibio venenoso que habita en la hojarasca.' },
      { nombre: 'Mono Tití', tipo: 'fauna', imagen: monoTiti, dato: 'Pequeño primate endémico de Colombia.' },
    ],
  },
  // 3. RFP Nacional Río Blanco y Quebrada Olivares
  {
    id: 'rio-blanco',
    nombre: 'RFP Nacional Río Blanco y Q. Olivares',
    categoria: 'Reserva Forestal Protectora Nacional',
    ecosistema: 'Bosque de niebla',
    descripcion: 'La Reserva Forestal Protectora de Río Blanco y Quebrada Olivares es una de las zonas con mayor biodiversidad del mundo y conservación de los recursos naturales. Está ubicada sobre la cordillera Central Andina en el departamento de Caldas, a tres (3) km del costado nororiente del municipio de Manizales. La Reserva de Río Blanco, en su totalidad está ubicada dentro del municipio de Manizales en la zona montañosa de la gran Cuenca del Río Chinchiná, posee 4.932 hectáreas de extensión de bosque de niebla limitando con los municipios de Marulanda y Neira. Está ubicada entre los 2.150 y 3.700 msnm. La temperatura promedio es de 11°C (52°F) y tiene una humedad relativa del 90 %.',
    color: '#2D6A4F',
    imagenFondo: rioblanco,
    especies: [
      { nombre: 'Grallaria milleri', tipo: 'fauna', imagen: grallaria, dato: 'Ave endémica de los bosques de niebla.' },
      { nombre: 'Mariposa Morpho', tipo: 'fauna', imagen: mariposaMorpho, dato: 'Sus alas azules brillan en la penumbra.' },
    ],
  },
  // 4. RFP El Popal
  {
    id: 'el-popal',
    nombre: 'RFP El Popal',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'En la Reserva Forestal Protectora El Popal nace el agua que bastece al municipio de Pensilvania, su riqueza hídrica es la fuente de vida para las diversas especies que la habitan.',
    color: '#2D6A4F',
    imagenFondo: popal,
    especies: [
      { nombre: 'Roble Andino', tipo: 'flora', imagen: robleAndino, dato: 'Árbol de gran tamaño que protege las fuentes hídricas.' },
    ],
  },
  // 5. RFP La Linda
  {
    id: 'la-linda',
    nombre: 'RFP La Linda',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Área protegida para la conservación de suelos y aguas.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueNiebla",
    especies: [
      { nombre: 'Colibrí', tipo: 'fauna', imagen: colibri, dato: 'Polinizador vital para la flora del bosque andino.' },
    ],
  },
  // 6. RFP Bosques de CHEC
  {
    id: 'bosques-chec',
    nombre: 'RFP Bosques de CHEC',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Reserva ubicada en zonas de influencia hidroeléctrica, protegiendo cuencas abastecedoras.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Palma de Cera', tipo: 'flora', imagen: palmaCera, dato: 'Árbol nacional de Colombia, en peligro de extinción.' },
    ],
  },
  // 7. RFP El Diamante
  {
    id: 'el-diamante',
    nombre: 'RFP El Diamante',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Reserva forestal protectora para la conservación de la biodiversidad.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Oso de Anteojos', tipo: 'fauna', imagen: oso, dato: 'Especie sombrilla del bosque andino.' },
    ],
  },
  // 8. RFP Tarcará
  {
    id: 'tarcara',
    nombre: 'RFP Tarcará',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Área de conservación de suelos y regulación hídrica.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Frailejón', tipo: 'flora', imagen: frailejon, dato: 'Captura agua de la niebla.' },
    ],
  },
  // 9. RFP Plan Alto
  {
    id: 'plan-alto',
    nombre: 'RFP Plan Alto',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Reserva para la protección de ecosistemas estratégicos.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Cóndor de los Andes', tipo: 'fauna', imagen: condor, dato: 'Ave emblemática de los Andes.' },
    ],
  },
  // 10. RFP Torre 4
  {
    id: 'torre-4',
    nombre: 'RFP Torre 4',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Área de conservación en la cordillera Central.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Grallaria milleri', tipo: 'fauna', imagen: grallaria, dato: 'Ave endémica de los bosques de niebla.' },
    ],
  },
  // 11. RFP La Marina
  {
    id: 'la-marina',
    nombre: 'RFP La Marina',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Reserva forestal para la protección de fuentes hídricas.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Palma de Cera', tipo: 'flora', imagen: palmaCera, dato: 'Árbol nacional en peligro.' },
    ],
  },
  // 12. RFP Sabinas
  {
    id: 'sabinas',
    nombre: 'RFP Sabinas',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Área de conservación de suelos y aguas.',
    color: '#2D6A4F',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Rana Roja', tipo: 'fauna', imagen: ranaRoja, dato: 'Anfibio venenoso de la hojarasca.' },
    ],
  },
  // 13. DMI Charca de Guarinocito
  {
    id: 'guarinocito',
    nombre: 'DMI Charca de Guarinocito',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Humedal y bosque seco',
    descripcion: 'Área de manejo integrado donde se armoniza la conservación con el uso sostenible de los recursos.',
    color: '#D4A373',
    imagenFondo: "fondoHumedal",
    especies: [
      { nombre: 'Babilla', tipo: 'fauna', imagen: babilla, dato: 'Especie característica de los humedales.' },
      { nombre: 'Iguana Verde', tipo: 'fauna', imagen: iguanaVerde, dato: 'Reptil que se asolea en los árboles.' },
    ],
  },
  // 14. DMI Laguna de San Diego
  {
    id: 'laguna-san-diego',
    nombre: 'DMI Laguna de San Diego',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Humedal andino',
    descripcion: 'Laguna de importancia para la conservación de aves y regulación hídrica.',
    color: '#D4A373',
    imagenFondo: "fondoHumedal",
    especies: [
      { nombre: 'Colibrí', tipo: 'fauna', imagen: colibri, dato: 'Polinizador de la flora andina.' },
    ],
  },
  // 15. DMI Cuchilla de Bellavista
  {
    id: 'cuchilla-bellavista',
    nombre: 'DMI Cuchilla de Bellavista',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Bosque andino',
    descripcion: 'Área de manejo integrado para la conservación de la biodiversidad.',
    color: '#D4A373',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Oso de Anteojos', tipo: 'fauna', imagen: oso, dato: 'Especie sombrilla del bosque andino.' },
    ],
  },
  // 16. DMI Cerro de Guadalupe
  {
    id: 'cerro-guadalupe',
    nombre: 'DMI Cerro de Guadalupe',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Bosque andino',
    descripcion: 'Área de manejo integrado en la cordillera Central.',
    color: '#D4A373',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Cóndor de los Andes', tipo: 'fauna', imagen: condor, dato: 'Ave emblemática de los Andes.' },
    ],
  },
  // 17. DMI Estrella Hídrica de Caldas
  {
    id: 'estrella-hidrica',
    nombre: 'DMI Estrella Hídrica de Caldas',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Páramo y bosque altoandino',
    descripcion: 'Zona de recarga hídrica fundamental para el departamento.',
    color: '#D4A373',
    imagenFondo: "fondoParamo",
    especies: [
      { nombre: 'Frailejón', tipo: 'flora', imagen: frailejon, dato: 'Captura agua de la niebla.' },
    ],
  },
  // 18. DCS Guacas-El Rosario
  {
    id: 'guacas',
    nombre: 'DCS Guacas-El Rosario',
    categoria: 'Distrito de Conservación de Suelos',
    ecosistema: 'Suelos y laderas',
    descripcion: 'Zona enfocada en la restauración y protección de suelos degradados.',
    color: '#E9C46A',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Guadua', tipo: 'flora', imagen: guadua, dato: 'Planta clave para la estabilización de suelos.' },
    ],
  },
  // 19. DCS El Gigante
  {
    id: 'el-gigante',
    nombre: 'DCS El Gigante',
    categoria: 'Distrito de Conservación de Suelos',
    ecosistema: 'Suelos y laderas',
    descripcion: 'Distrito para la protección de suelos y prevención de erosión.',
    color: '#E9C46A',
    imagenFondo: "fondoBosqueAndino",
    especies: [
      { nombre: 'Roble Andino', tipo: 'flora', imagen: robleAndino, dato: 'Árbol que protege las fuentes hídricas.' },
    ],
  },
];