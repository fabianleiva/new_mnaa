import manifest from "../data/image-sizes.json";

// Devuelve { src, srcSet, sizes, width, height } para una imagen de WordPress.
// srcSet incluye todas las variantes generadas por WordPress más el original,
// así el navegador elige la más pequeña que se siga viendo nítida
// (considerando el tamaño en pantalla y la densidad de píxeles).
// Si la imagen no está en el manifiesto, devuelve solo { src }.
export const responsiveImage = (url, sizes) => {
  const entry = manifest[url];
  if (!entry) return { src: url };

  const [width, height, ...variants] = entry;
  const dir = url.slice(0, url.lastIndexOf("/") + 1);
  // El navegador descarta el srcset si repite un ancho (WordPress a veces genera dos variantes iguales).
  const byWidth = new Map();
  for (let i = 0; i < variants.length; i += 2) {
    if (variants[i] < width) byWidth.set(variants[i], `${dir}${variants[i + 1]} ${variants[i]}w`);
  }
  const candidates = [...byWidth.values(), `${url} ${width}w`];

  // `sizes` puede ser una función de las dimensiones reales (para imágenes dimensionadas por alto).
  const sizesAttr = typeof sizes === "function" ? sizes(width, height) : sizes;

  return { src: url, srcSet: candidates.join(", "), sizes: sizesAttr, width, height };
};
