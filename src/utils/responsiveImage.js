import manifest from "../data/image-sizes.json";
import { buildSrcSet } from "./srcset";

// Devuelve { src, srcSet, sizes, width, height } para una imagen de WordPress.
// srcSet incluye todas las variantes generadas por WordPress más el original,
// así el navegador elige la más pequeña que se siga viendo nítida
// (considerando el tamaño en pantalla y la densidad de píxeles).
// Si la imagen no está en el manifiesto, devuelve solo { src }.
export const responsiveImage = (url, sizes) => {
  const entry = manifest[url];
  if (!entry) return { src: url };

  const { srcSet, width, height } = buildSrcSet(url, entry);

  // `sizes` puede ser una función de las dimensiones reales (para imágenes dimensionadas por alto).
  const sizesAttr = typeof sizes === "function" ? sizes(width, height) : sizes;

  return { src: url, srcSet, sizes: sizesAttr, width, height };
};
