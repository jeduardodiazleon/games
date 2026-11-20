# 🕹️ Arcade de Bolsillo

Colección de minijuegos para el navegador. Web: **https://jeduardodiazleon.github.io/games/**

## Estructura

```
games/
├── index.html            ← portal (no hace falta tocarlo)
├── juegos.js             ← CATÁLOGO: lista de juegos que aparecen en el portal
├── .nojekyll             ← le dice a GitHub Pages que sirva los archivos tal cual
├── assets/
│   ├── estilo.css        ← diseño del portal
│   ├── portal.js         ← lógica del portal
│   └── favicon.svg
└── juegos/
    ├── atasco-cosmico/
    │   ├── index.html    ← el juego (archivo autónomo)
    │   └── portada.svg   ← imagen de la tarjeta
    ├── ascensor-del-infierno/
    └── mi-sombra-me-odia/
```

## Actualizar un juego

1. Sustituye `juegos/<carpeta>/index.html` por la nueva versión.
2. (Opcional) En `juegos.js` sube la `version` y pon la fecha de hoy en `actualizado`. Durante 3 semanas la tarjeta mostrará el sello **ACTUALIZADO**.

## Añadir un juego nuevo

1. Crea la carpeta `juegos/mi-juego-nuevo/` con:
   - `index.html` → el juego (cualquier HTML autónomo vale).
   - `portada.svg` o `portada.png` → imagen 16:10 (por ejemplo 640×400). Si no hay, se muestra la inicial del juego.
2. Añade un bloque al final de la lista en `juegos.js`:

```js
  {
    carpeta: "mi-juego-nuevo",
    titulo: "Mi Juego Nuevo",
    descripcion: "Una frase que enganche.",
    color: "#2ef2ff",
    etiquetas: ["Acción"],
    controles: "Toque",
    record: "mijuego",        // opcional: clave de récord (ver abajo)
    version: "1.0",
    actualizado: "2026-12-01",
  },
```

3. Para que el juego tenga botón de volver al portal, enlaza a `../../index.html`.

### Récords en el portal (opcional)

Si el juego guarda su récord con `localStorage.setItem("arcade_" + clave, puntos)`, el portal lo muestra en la tarjeta y lo suma a los puntos totales. Pon esa misma `clave` en el campo `record`.

## Probar en local

Abre `index.html` con doble clic: funciona sin servidor.
