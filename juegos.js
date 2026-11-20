/* =============================================================
   CATÁLOGO DE JUEGOS — el único archivo que tocas para el portal
   -------------------------------------------------------------
   · Para AÑADIR un juego: crea la carpeta  juegos/<carpeta>/  con su
     index.html (y opcionalmente portada.svg / portada.png) y copia
     uno de estos bloques al final de la lista.
   · Para ACTUALIZAR un juego: reemplaza juegos/<carpeta>/index.html
     y, si quieres que se note, cambia "version" y "actualizado".
   · El orden de esta lista es el orden en el que salen en la web.
   ============================================================= */
window.JUEGOS = [
  {
    carpeta: "atasco-cosmico",          // nombre de la carpeta dentro de /juegos
    titulo: "Atasco Cósmico",
    descripcion: "Los planetas comparten órbitas que se cruzan. Tócalos para frenarlos y evita el choque cósmico.",
    color: "#ffb347",                   // color de acento de la tarjeta
    etiquetas: ["Puzzle", "Reflejos"],
    controles: "Toque",
    record: "atasco",                   // clave de récord que usa el juego (opcional)
    version: "1.0",
    actualizado: "2026-11-20",
  },
  {
    carpeta: "ascensor-del-infierno",
    titulo: "Ascensor del Infierno",
    descripcion: "Primer día como ascensorista del Edificio Averno, en pleno dibujo animado de los años 30. VIPs con prisa, demonios y apagones.",
    color: "#ff4d5e",
    etiquetas: ["Gestión", "Retro"],
    controles: "Toque",
    record: "ascensor",
    version: "1.0",
    actualizado: "2026-11-20",
  },
  {
    carpeta: "mi-sombra-me-odia",
    titulo: "Mi Sombra Me Odia",
    descripcion: "Tus errores del pasado te persiguen repitiendo cada paso. Haz que tus sombras choquen entre sí y escapa.",
    color: "#9b8cff",
    etiquetas: ["Acción", "Supervivencia"],
    controles: "Arrastrar",
    record: "sombra",
    version: "1.0",
    actualizado: "2026-11-20",
  },
];
