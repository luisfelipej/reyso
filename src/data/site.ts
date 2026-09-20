/**
 * Fuente única de verdad del sitio.
 *
 * Si cambia el teléfono, el correo o el horario, se cambia SOLO acá y se
 * actualiza en las 6 páginas, el footer, los botones flotantes y los datos
 * estructurados de Google.
 */

export const site = {
  name: 'Reyso',
  legalName: 'Reyso',
  /** Usado para canonical, Open Graph y sitemap. Cambiar si el dominio es otro. */
  url: 'https://www.reyso.cl',
  tagline: 'Encarpe Easycarp y tornería para camiones',
  description:
    'Reyso fabrica e instala el sistema de encarpe manual Easycarp para tolvas y bateas, y fabrica en torno las piezas a medida que el equipo necesita. Taller en Peñalolén, Santiago.',
  locale: 'es_CL',
} as const;

export const contact = {
  /** Formato internacional sin signos, para los enlaces wa.me y tel: */
  phoneRaw: '56999097058',
  phonePretty: '+56 9 9909 7058',
  email: 'reyso.lajc@gmail.com',

  addressStreet: 'Quebrada de Umallani 946',
  addressCity: 'Peñalolén',
  addressRegion: 'Región Metropolitana',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Quebrada+de+Umallani+946%2C+Pe%C3%B1alol%C3%A9n%2C+Santiago',

  /**
   * Campos opcionales. Si quedan vacíos, esos bloques no se muestran en
   * ninguna parte del sitio. Al rellenarlos aparecen solos en el footer,
   * en la página de contacto y en los datos estructurados de Google.
   *
   * `hours` queda vacío a propósito: los horarios son conversables.
   */
  hours: '', // ej: 'Lunes a viernes 9:00 – 18:30'
  instagram: '', // ej: 'https://instagram.com/reyso.cl'
  facebook: '',
} as const;

/** Construye un enlace de WhatsApp con mensaje ya escrito. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${contact.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const telLink = `tel:+${contact.phoneRaw}`;
export const mailLink = `mailto:${contact.email}`;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/easycarp', label: 'Easycarp' },
  { href: '/torneria', label: 'Tornería' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export type Service = {
  href: string;
  title: string;
  short: string;
  description: string;
  bullets: readonly string[];
};

export const services: readonly Service[] = [
  {
    href: '/easycarp',
    title: 'Easycarp',
    short: 'Encarpe manual',
    description:
      'Sistema de encarpe manual para camiones tolva bidireccionales, doble puente y bateas. Se instala sobre el equipo que ya tienes.',
    bullets: ['Tolvas y bateas', 'Resortes americanos', 'Instalación incluida'],
  },
  {
    href: '/torneria',
    title: 'Tornería',
    short: 'Piezas a medida',
    description:
      'Fabricamos pasadores, bujes, ejes y seguros a medida, con las tolerancias que pide la pieza original.',
    bullets: ['Pasadores y bujes', 'Ejes y seguros', 'Copia desde muestra'],
  },
];
