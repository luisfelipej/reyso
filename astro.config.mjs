// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Necesario para canonical, Open Graph y sitemap.xml.
  // Cambiar si el dominio final es otro (ver también src/data/site.ts).
  site: 'https://www.reyso.cl',

  // Precarga los enlaces internos al pasar el mouse: la navegación se siente instantánea.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // Tailwind 4 se integra como plugin de Vite. La configuración vive en
  // src/styles/global.css (@theme), no en un tailwind.config.js.
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
