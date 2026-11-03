import { useCallback, useEffect, useRef, useState } from "react";

// Revela una lista de tarjetas con imagen por tandas, sin depender del scroll:
//  1. La primera tanda se descarga sola y aparece cuando todas sus fotos están listas.
//  2. Luego el resto se descarga en segundo plano, algunas tandas por delante de las ya listas.
//  3. Cada tanda aparece completa, en orden, apenas está lista.
// Si una tanda tarda demasiado, se revela igual para no dejar la página vacía.
const LOOKAHEAD_CHUNKS = 2;
const FIRST_TIMEOUT = 5000;
const CHUNK_TIMEOUT = 3000;

// Tamaño de la tanda según el ancho de pantalla (aprox. dos filas de la grilla)
const chunkSizeForViewport = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) return 10; // 5 columnas
  if (window.matchMedia("(min-width: 768px)").matches) return 6; // 3 columnas
  return 3; // 1 columna
};

export const useChunkedReveal = (total) => {
  const [size] = useState(chunkSizeForViewport);
  const readyRef = useRef(new Set());
  const [, setTick] = useState(0);
  const [forced, setForced] = useState(0);

  const onReady = useCallback((index) => {
    if (!readyRef.current.has(index)) {
      readyRef.current.add(index);
      setTick((t) => t + 1);
    }
  }, []);

  const chunks = Math.ceil(total / size);
  const chunkReady = (c) => {
    const end = Math.min(total, (c + 1) * size);
    for (let i = c * size; i < end; i += 1) {
      if (!readyRef.current.has(i)) return false;
    }
    return true;
  };

  let consecutive = 0;
  while (consecutive < chunks && chunkReady(consecutive)) consecutive += 1;
  const revealed = total > 0 ? Math.max(consecutive, forced) : 0;

  useEffect(() => {
    if (total === 0 || revealed >= chunks) return;
    const timer = setTimeout(
      () => setForced(revealed + 1),
      revealed === 0 ? FIRST_TIMEOUT : CHUNK_TIMEOUT
    );
    return () => clearTimeout(timer);
  }, [total, chunks, revealed]);

  const chunkOf = (index) => Math.floor(index / size);
  return {
    isRevealed: (index) => chunkOf(index) < revealed,
    shouldLoad: (index) =>
      chunkOf(index) < (consecutive >= 1 ? consecutive + LOOKAHEAD_CHUNKS : 1),
    onReady,
  };
};
