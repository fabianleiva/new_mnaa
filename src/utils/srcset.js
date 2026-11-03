// Arma el `srcset` de una imagen de WordPress a partir de su entrada del manifiesto
// ([ancho, alto, ancho1, archivo1, ancho2, archivo2, ...]). Lo usan la app y el script de build.
export const buildSrcSet = (url, entry) => {
  const [width, height, ...variants] = entry;
  const dir = url.slice(0, url.lastIndexOf("/") + 1);
  // El navegador descarta el srcset si repite un ancho (WordPress a veces genera dos variantes iguales).
  const byWidth = new Map();
  for (let i = 0; i < variants.length; i += 2) {
    if (variants[i] < width)
      byWidth.set(variants[i], `${dir}${variants[i + 1]} ${variants[i]}w`);
  }
  const srcSet = [...byWidth.values(), `${url} ${width}w`].join(", ");
  return { srcSet, width, height };
};
