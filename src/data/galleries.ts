import type { ImageMetadata } from 'astro';

import detalleseasy from '../assets/img/detalleseasy.jpg';
import manilla2 from '../assets/img/manilla2.jpg';
import resortes from '../assets/img/resortes.jpg';
import resortesbatea from '../assets/img/resortesbatea.jpg';
import vistabatea from '../assets/img/vistabatea.jpg';
import vistaeasycarp from '../assets/img/vistaeasycarp.jpg';
import pasador from '../assets/img/pasador.jpg';
import pasador2 from '../assets/img/pasador2.jpg';
import torneria from '../assets/img/torneria.png';
import videoPoster from '../assets/img/videotorno-poster.jpg';

export type MediaItem =
  | {
      type: 'image';
      src: ImageMetadata;
      /** Título visible bajo la miniatura. */
      title: string;
      /** Descripción corta opcional. */
      desc?: string;
      /** Texto alternativo. Si falta se usa el título. */
      alt?: string;
    }
  | {
      type: 'video';
      /** Ruta dentro de public/. */
      src: string;
      poster?: ImageMetadata;
      title: string;
      desc?: string;
    };

export const easycarpGallery: readonly MediaItem[] = [
  {
    type: 'image',
    src: detalleseasy,
    title: 'Brazo montado sobre la tolva',
    desc: 'Vista superior del brazo Easycarp ya instalado.',
    alt: 'Brazo del sistema Easycarp montado sobre la tolva de un camión',
  },
  {
    type: 'image',
    src: vistaeasycarp,
    title: 'Encarpe desplegado',
    desc: 'El brazo recorre la tolva completa de extremo a extremo.',
    alt: 'Brazo del encarpe extendido sobre una tolva negra',
  },
  {
    type: 'image',
    src: resortes,
    title: 'Resortes americanos',
    desc: 'Usamos resorte americano, el que aguanta el uso diario en ruta.',
    alt: 'Resorte americano montado en el soporte del encarpe',
  },
  {
    type: 'image',
    src: manilla2,
    title: 'Manivela de accionamiento',
    desc: 'Se acciona desde el costado, sin subirse a la tolva.',
    alt: 'Manivela del sistema de encarpe instalada en el costado del equipo',
  },
  {
    type: 'image',
    src: vistabatea,
    title: 'Instalación en batea',
    desc: 'El mismo sistema adaptado a batea de tres ejes.',
    alt: 'Camión batea amarillo con el sistema de encarpe instalado',
  },
  {
    type: 'image',
    src: resortesbatea,
    title: 'Resortes para batea',
    desc: 'Resorte tipo espiral montado sobre rodamientos.',
    alt: 'Mecanismo de resortes espirales sobre rodamientos bajo el chasis de una batea',
  },
];

export const torneriaGallery: readonly MediaItem[] = [
  {
    type: 'image',
    src: torneria,
    title: 'Torneado en plato',
    desc: 'Pieza montada en plato de tres mordazas.',
    alt: 'Pieza metálica montada en el plato de tres mordazas de un torno',
  },
  {
    type: 'video',
    src: '/images/videotorno.mp4',
    poster: videoPoster,
    title: 'El torno en acción',
    desc: 'Desbaste de un pasador, de la barra en bruto a la medida final.',
  },
  {
    type: 'image',
    src: pasador,
    title: 'Pasador terminado',
    desc: 'Fabricado a medida a partir de la pieza original.',
    alt: 'Pasador de acero torneado y terminado',
  },
  {
    type: 'image',
    src: pasador2,
    title: 'Conjunto pasador, buje y seguro',
    desc: 'Set completo para reemplazar el juego desgastado.',
    alt: 'Conjunto de pasador, buje y seguro de acero recién torneados',
  },
];

