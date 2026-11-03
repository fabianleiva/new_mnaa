import { responsiveImage } from "./responsiveImage";

const requested = new Set();

// Descarga imágenes en segundo plano (poca prioridad, pocas a la vez) para que, al entrar a
// la sección, ya estén en la caché del navegador. Usa los mismos `srcset` y `sizes` que la
// tarjeta real, así el navegador elige la misma variante y la reutiliza.
export const prefetchImages = (items, concurrency = 3) => {
  const queue = items.filter(
    ({ url }) => url && !requested.has(url) && requested.add(url)
  );
  let cancelled = false;

  const next = () => {
    if (cancelled) return;
    const item = queue.shift();
    if (!item) return;
    const props = responsiveImage(item.url, item.sizes);
    const img = new Image();
    if ("fetchPriority" in img) img.fetchPriority = "low";
    img.decoding = "async";
    img.onload = img.onerror = next;
    if (props.sizes) img.sizes = props.sizes;
    if (props.srcSet) img.srcset = props.srcSet;
    img.src = props.src;
  };

  for (let i = 0; i < concurrency; i += 1) next();
  return () => {
    cancelled = true;
  };
};
