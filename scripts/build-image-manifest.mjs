// Lee de WordPress las variantes reales de cada imagen y las guarda en
// src/data/image-sizes.json, para que la web pueda armar srcset sin adivinar nombres.
// Uso: npm run images:manifest
import { writeFileSync, existsSync } from "node:fs";

const BASE = "https://new.mnaa.cl/wp-json/wp/v2/media";
const OUT = new URL("../src/data/image-sizes.json", import.meta.url);
const PER_PAGE = 100;

const fetchPage = async (page) => {
  const res = await fetch(
    `${BASE}?per_page=${PER_PAGE}&page=${page}&_fields=source_url,media_details`
  );
  if (!res.ok) throw new Error(`HTTP ${res.status} en página ${page}`);
  return {
    items: await res.json(),
    totalPages: Number(res.headers.get("x-wp-totalpages") || 1),
  };
};

try {
  const manifest = {};
  let page = 1;
  let totalPages = 1;
  do {
    const { items, totalPages: tp } = await fetchPage(page);
    totalPages = tp;
    for (const m of items) {
      const d = m.media_details;
      if (!d?.width || !m.source_url.endsWith(".webp")) continue;
      // clave: URL del original; valor: [ancho, alto, ancho1, archivo1, ancho2, archivo2, ...]
      const variants = Object.entries(d.sizes || {})
        .filter(([name, s]) => name !== "full" && name !== "thumbnail" && s.file)
        .map(([, s]) => [s.width, s.file])
        .sort((a, b) => a[0] - b[0]);
      manifest[m.source_url] = [d.width, d.height, ...variants.flat()];
    }
    page += 1;
  } while (page <= totalPages);

  writeFileSync(OUT, JSON.stringify(manifest));
  console.log(`image-sizes.json: ${Object.keys(manifest).length} imágenes`);
} catch (error) {
  // No romper el build si WordPress no responde: se usa el manifiesto anterior.
  console.warn(`No se pudo actualizar image-sizes.json: ${error.message}`);
  if (!existsSync(OUT)) writeFileSync(OUT, "{}");
}
