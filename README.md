# Reyso

Sitio web de **Reyso**: encarpe manual Easycarp y tornería para camiones.

Hecho con [Astro](https://astro.build) 5 y [Tailwind CSS](https://tailwindcss.com) 4.

## Empezar

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

| Comando            | Qué hace                                       |
| :----------------- | :--------------------------------------------- |
| `pnpm dev`         | Servidor de desarrollo en `localhost:4321`     |
| `pnpm build`       | Compila el sitio a `./dist/`                   |
| `pnpm preview`     | Previsualiza el build antes de publicar        |
| `pnpm lint`        | ESLint sobre `.js`, `.ts` y `.astro`           |
| `pnpm format`      | Formatea todo con Prettier                     |

## Estructura

```text
src/
├── assets/img/        Fotos originales. Astro las optimiza a WebP en el build.
├── components/        Componentes reutilizables (ver abajo).
├── data/
│   ├── site.ts        Teléfono, correo, dirección, navegación y servicios.
│   ├── galleries.ts   Contenido de las tres galerías.
│   └── icons.ts       Trazados SVG de los iconos.
├── layouts/
│   └── Layout.astro   HTML base, SEO, Open Graph y datos estructurados.
├── pages/             Una página por ruta + sitemap.xml.
└── styles/
    └── global.css     Sistema de diseño (tokens de color, tipografía, utilidades).
public/                Se sirve tal cual desde la raíz: /favicon.svg, /og.jpg, /images/…
```

## Dos cosas importantes al editar

**1. Los datos de contacto se cambian en un solo lugar.**
Todo lo que sea teléfono, correo, horario, dirección o redes sociales vive en
`src/data/site.ts`. Cambiarlo ahí lo actualiza en el header, el footer, los
botones de WhatsApp, la página de contacto y los datos estructurados de Google.

Hay campos que quedaron vacíos a propósito porque todavía no están confirmados
(`addressStreet`, `addressCity`, `hours`, `instagram`, `mapsUrl`). Mientras
estén vacíos, esos bloques simplemente no se muestran. Al rellenarlos aparecen
solos.

**2. Tailwind 4 no usa `tailwind.config.js`.**
La configuración es CSS-first: los colores, tipografías y utilidades propias
están declarados con `@theme` y `@utility` dentro de `src/styles/global.css`.
Ahí viven los tokens de marca (`brand-*` para el ámbar `#fdc313`, `ink-*` para
el navy `#1e293b`, ambos tomados del logo de Easycarp).

## Antes de publicar

- Confirmar el dominio en `src/data/site.ts` (`site.url`) y en `astro.config.mjs`
  (`site`). Hoy apuntan a `https://www.reyso.cl`.
- Rellenar dirección y horario en `src/data/site.ts`.
- Revisar que `/sitemap.xml` y `/robots.txt` respondan en el build.
