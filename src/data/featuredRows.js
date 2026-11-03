// Cada fila: clase de grilla (completa, para que Tailwind la detecte) e ids por columna (null = hueco).
export const rows = [
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["54", "78", "72"] },
  { grid: "grid-cols-[1fr_2fr_2fr]", ids: ["70", "74", "75"] },
  { grid: "grid-cols-[2fr_2fr_2fr]", ids: ["47", "61", "79"] },
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["73", "71", "57"] },
  { grid: "grid-cols-[1fr_2fr_2fr]", ids: ["69", "67", "62"] },
  { grid: "grid-cols-[2fr_2fr_1fr]", ids: ["77", "64", "65"] },
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["50", "49", "41"] },
  { grid: "grid-cols-[2fr_2fr_1fr]", ids: ["60", "53", "51"] },
  { grid: "grid-cols-[3fr_2fr]", ids: ["39", "45"] },
  { grid: "grid-cols-[1fr]", ids: ["13"] },
  { grid: "grid-cols-[3fr_2fr]", ids: ["18", "21"] },
  { grid: "grid-cols-[2fr_1fr_1fr_1fr]", ids: ["14", null, "15", "10"] },
  { grid: "grid-cols-[1fr_1fr_2fr_1fr]", ids: [null, "08", "06", null] },
];

// Ancho de columna (en vw) a partir de la clase de grilla, para que el navegador
// elija la variante de imagen más pequeña que se siga viendo nítida.
export const columnShare = (grid) => {
  const frs = grid.match(/\d+(?=fr)/g).map(Number);
  const total = frs.reduce((a, b) => a + b, 0);
  return frs.map((fr) => Math.round((fr / total) * 100));
};
