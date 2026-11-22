// src/data/areas.js

import frailejon from '../assets/especies/frailejon.jpg';
import condor from '../assets/especies/condor.jpg';
import grallaria from '../assets/especies/grallaria.jpg';
import ranaRoja from '../assets/especies/rana-roja.jpg';
import palmaCera from '../assets/especies/palma-de-cera.jpg';
import mariposaMorpho from '../assets/especies/mariposa-morpho.jpg';
import robleAndino from '../assets/especies/roble-andino.jpg';
import patoParamuno from '../assets/especies/pato-paramuno.jpg';
import caciqueCandela from '../assets/especies/cacique-candela.jpg';
import gorrion from '../assets/especies/gorrion.jpg';
import zorroPerruno from '../assets/especies/zorro-perruno.jpg';
import colibriChillon from '../assets/especies/colibri-chillon.jpg';
import carriqui from '../assets/especies/carriqui.jpg';
import cuco from '../assets/especies/cuco.jpg';
import laurel from '../assets/especies/laurel.jpg';
import cusumbo from '../assets/especies/cusumbo.jpg';
import yarumo from '../assets/especies/yarumo.jpg';
import ardillaRoja from '../assets/especies/ardilla.jpg';
import chauna from '../assets/especies/chauna.jpg';
import serpienteLomo from '../assets/especies/serpiente-lomo.jpg';
import bienparado from '../assets/especies/bienparado.jpg';

// --- Importación de imágenes de fondo (locales) ---
import nevados from '../assets/fondos/nevados.jpg';
import florencia from '../assets/fondos/florencia.jpg';
import rioblanco from '../assets/fondos/rioblanco.jpg';
import popal from '../assets/fondos/popal.jpg';
import linda from '../assets/fondos/linda.jpg';
import chec from '../assets/fondos/chec.jpg';
import diamante from '../assets/fondos/diamante.jpg';
import tarcara from '../assets/fondos/tarcara.jpg';
import planalto from '../assets/fondos/planalto.jpg';
import torrecuatro from '../assets/fondos/torrecuatro.jpg';
import marina from '../assets/fondos/marina.jpg';
import guarinocito from '../assets/fondos/guarinocito.jpg';
import sandiego from '../assets/fondos/sandiego.jpg';
import bellavista from '../assets/fondos/bellavista.jpg';
import estrella from '../assets/fondos/estrella.jpg';
import guacas from '../assets/fondos/guacas.jpg';
import gigante from '../assets/fondos/gigante.jpg';


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
      { nombre: 'Pato Paramuno', tipo: 'fauna', imagen: patoParamuno, dato: 'Está adaptado para vivir en aguas heladas.' },
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
      { nombre: 'Rana Roja', tipo: 'fauna', imagen: ranaRoja, dato: 'Anfibio venenoso diminuto.' },
      { nombre: 'Cacique Candela', tipo: 'fauna', imagen: caciqueCandela, dato: 'Ave endémica de Colombia con vientre rojo fuego.' },
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
      { nombre: 'Gorrion', tipo: 'fauna', imagen: gorrion, dato: 'Ave muy sociable que suele habitar ciudades.' },
    ],
  },
  // 4. RFP El Popal
  {
    id: 'el-popal',
    nombre: 'RFP El Popal',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'En la Reserva Forestal Protectora El Popal nace el agua que abastece al municipio de Pensilvania, su riqueza hídrica es la fuente de vida para las diversas especies que la habitan.',
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
    descripcion: 'La reserva forestal protectora La Linda en el corregimiento San Daniel de Samaná, abastece los acueductos veredales del sector.',
    color: '#2D6A4F',
    imagenFondo: linda,
    especies: [
      { nombre: 'Zorro Perruno', tipo: 'fauna', imagen: zorroPerruno, dato: 'Cánido nocturno de Sudamérica.' },
    ],
  },
  // 6. RFP Bosques de CHEC
  {
    id: 'bosques-chec',
    nombre: 'RFP Bosques de CHEC',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'La Reserva Forestal Protectora Bosques Chec es patrimonio hídrico de #Caldas. Además de surtir el acueducto de Manizales y permitir la generación hidroeléctrica a lo largo del río Chinchiná, también protege los ecosistemas bosque altoandino y páramo.',
    color: '#2D6A4F',
    imagenFondo: chec,
    especies: [
      { nombre: 'Colibri Chillon', tipo: 'fauna', imagen: colibriChillon, dato: 'Pequeño colibrí andino de canto agudo y vibrante.' },
    ],
  },
  // 7. RFP El Diamante
  {
    id: 'el-diamante',
    nombre: 'RFP El Diamante',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'La Reserva Forestal Protectora El Diamante es un área de conservación y fábrica natural de #biodiversidad que provee de agua a los municipios de Aranzazu y Filadelfia, Caldas.',
    color: '#2D6A4F',
    imagenFondo: diamante,
    especies: [
      { nombre: 'Carriqui Violáceo', tipo: 'fauna', imagen: carriqui, dato: 'Ave ruidosa de plumaje azul.' },
    ],
  },
  // 8. RFP Tarcará
  {
    id: 'tarcara',
    nombre: 'RFP Tarcará',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'En Aguadas, Norte de Caldas, encontramos la Reserva Forestal Protectora Tarcará, cuyo buen estado de conservación de sus 727 hectáreas de bosque altoandino ha permitido un importante equilibrio ecosistémico.',
    color: '#2D6A4F',
    imagenFondo: tarcara,
    especies: [
      { nombre: 'Cuco ardilla', tipo: 'fauna', imagen: cuco, dato: 'Ave de cola larga que salta como ardilla.' },
    ],
  },
  // 9. RFP Plan Alto
  {
    id: 'plan-alto',
    nombre: 'RFP Planalto',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'Ubicada en límites con el municipio de Chinchiná. En estos relictos de bosques hay alrededor de 652 especies vegetales y 219 de vertebrados; gran diversidad de aves, lugar de paso en temporada de migración y hogar de otras especies.',
    color: '#2D6A4F',
    imagenFondo: planalto,
    especies: [
      { nombre: 'Laurel blanco', tipo: 'flora', imagen: laurel, dato: 'Árbol nativo utilizado como sombrío en cafetales' },
    ],
  },
  // 10. RFP Torre 4
  {
    id: 'torre-4',
    nombre: 'RFP Torre Cuatro',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'La Reserva Forestal Protectora Torre 4 tiene 310 hectáreas de extensión y es hábitat de diversas especies, entre ellos el hermosos colibrí paramuno.',
    color: '#2D6A4F',
    imagenFondo: torrecuatro,
    especies: [
      { nombre: 'Cusumbo', tipo: 'fauna', imagen: cusumbo, dato: 'Mamífero sociable de hocico alargado.' },
    ],
  },
  // 11. RFP La Marina
  {
    id: 'la-marina',
    nombre: 'RFP La Marina',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'La Reserva Forestal Protectora La Marina, ubicada en el municipio de Villamaría. Su vegetación de bosque alto andino está conformado por robles, yarumos blancos y cedros entre otras especies',
    color: '#2D6A4F',
    imagenFondo: marina,
    especies: [
      { nombre: 'Yarumo Blanco', tipo: 'flora', imagen: yarumo, dato: 'Árbol pionero que alberga hormigas.' },
    ],
  },
  // 12. RFP Sabinas
  {
    id: 'sabinas',
    nombre: 'RFP Sabinas',
    categoria: 'Reserva Forestal Protectora',
    ecosistema: 'Bosque andino',
    descripcion: 'La reserva forestal protectora de Sabinas, en Manizales, fue objeto de conservación con el fin de dar un uso adecuado a los suelos de ladera. Son 186 hectáreas asociadas a la bocatoma de Gallinazo, que hace parte del acueducto de la ciudad..',
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
    descripcion: 'Ubicada a tan solo 25 minutos del casco urbano de La Dorada, Caldas y a unas tres horas y media de Manizales, por la vía que conduce a Honda, la charca se extiende sobre un área aproximada de 64 hectáreas, con una longitud cercana a los 3 kilómetros y un ancho promedio de 250 metros en su parte más amplia. Su profundidad varía según la temporada: alrededor de 2,5 metros en verano y hasta 4,5 metros en invierno, lo que la convierte en un regulador natural del agua en esta zona ribereña del Magdalena Medio.',
    color: '#D4A373',
    imagenFondo: guarinocito,
    especies: [
      { nombre: 'Chauna Chavaria', tipo: 'fauna', imagen: chauna, dato: 'Ave grande de canto potente.' },
      { nombre: 'Ardilla Roja', tipo: 'fauna', imagen: ardillaRoja, dato: 'Mamífero omnívoro de la región.' },
    ],
  },
  // 14. DMI Laguna de San Diego
  {
    id: 'laguna-san-diego',
    nombre: 'DMI Laguna de San Diego',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Humedal andino',
    descripcion: 'La Laguna de San Diego se ubica en el corregimiento de San Diego, municipio de Samaná, en el departamento de Caldas. Este cuerpo de agua se formó en la caldera de un antiguo volcán, conocido como el maar de San Diego, y está acompañado por el Morro de San Diego, un cono volcánico que se eleva aproximadamente a 450 metros sobre el nivel de la laguna..',
    color: '#D4A373',
    imagenFondo: sandiego,
    especies: [
      { nombre: 'Serpiente Lomo Machete', tipo: 'fauna', imagen: serpienteLomo, dato: 'Serpiente verde rápida y no venenosa.' },
    ],
  },
  // 15. DMI Cuchilla de Bellavista
  {
    id: 'cuchilla-bellavista',
    nombre: 'DMI Cuchilla de Bellavista',
    categoria: 'Distrito de Manejo Integrado',
    ecosistema: 'Bosque andino',
    descripcion: 'El Distrito de Manejo Integrado, Cuchilla de Bellavista, ubicado en el municipio de Victoria, Caldas, es un extenso valle interandino del Magdalena Medio que alberga al tití gris, uno de los primates más importantes del Departamento. Las diversas especies de árboles han ayudado en protección de las fuentes hídricas y en la conexión de zonas boscosas',
    color: '#D4A373',
    imagenFondo: bellavista,
    especies: [
      { nombre: 'Bienparado Mayor', tipo: 'fauna', imagen: bienparado, dato: 'Ave nocturna experta en camuflaje.' },
    ],
  },
  // 16. DMI Cerro de Guadalupe
  {
    id: 'cerro-guadalupe',
    nombre: 'DMI Cerro Guadalupe',
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
    descripcion: 'El área protegida abarca 23.972 hectáreas conformada por ecosistemas estratégicos de alta montaña, de los que depende la seguridad hídrica de 250 mil habitantes, una cuarta parte de la población departamental. Está ubicada entre los municipios de Manizales, Neira, Aranzazu, Salamina y Marulanda en la Cordillera Central. Además, limita con las Reservas Forestales Protectoras (RFP) de las cuencas hidrográficas del Río Blanco y la RFP El Diamante.',
    color: '#D4A373',
    imagenFondo: estrella,
    especies: [
      { nombre: 'Zorro Perruno', tipo: 'flora', imagen: zorroPerruno, dato: 'Cánido nocturno de Sudamérica' },
    ],
  },
  // 18. DCS Guacas-El Rosario
  {
    id: 'guacas',
    nombre: 'DCS Guacas Rosario',
    categoria: 'Distrito de Conservación de Suelos',
    ecosistema: 'Suelos y laderas',
    descripcion: 'El Distrito de Conservación de Suelos (DCS) Guacas-Rosario es un área protegida de uso sostenible ubicada en la zona rural de Manizales, Caldas (en la parte baja de la cuenca del río Chinchiná), declarada en mayo de 2009 por Corpocaldas para recuperar suelos degradados, controlar la erosión y proteger los servicios ecosistémicos.',
    color: '#E9C46A',
    imagenFondo: guacas,
    especies: [
      { nombre: 'Mariposa', tipo: 'flora', imagen: mariposaMorpho, dato: 'Mariposa grande de azul brillante.' },
    ],
  },
  // 19. DCS El Gigante
  {
    id: 'el-gigante',
    nombre: 'DCS El Gigante',
    categoria: 'Distrito de Conservación de Suelos',
    ecosistema: 'Suelos y laderas',
    descripcion: 'Área protegida del departamento de Caldas que cuenta con fragmentos de bosque con palmas de cera, cedro negro, roble y pino colombiano.',
    color: '#E9C46A',
    imagenFondo: gigante,
    especies: [
      { nombre: 'Palma de Cera', tipo: 'flora', imagen: palmaCera, dato: 'Planta con tronco leñoso y hojas grandes.' },
    ],
  },
];