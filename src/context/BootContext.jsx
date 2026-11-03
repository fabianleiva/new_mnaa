import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BootContext } from "./bootSignal";

// Controla el loader de entrada (#boot-loader, definido en index.html).
// Se oculta cuando se cumplen a la vez: la tipografía cargó, pasó un tiempo mínimo
// (para que no parpadee) y la página reportó que su contenido principal está listo.
// Hay un tope máximo para que nunca quede atascado.
const MIN_MS = 2000; // el nombre termina de aparecer (1 s) y se sostiene un momento
// Tras quedar lista la primera fila, se espera un poco más para que sus fotos ya estén
// visibles (su fundido dura 1.2 s) cuando el loader se retire.
const CONTENT_SETTLE_MS = 700;
const MAX_MS = 7000;
const FADE_MS = 1300; // fundido del nombre (0.6 s) + aparición de la web (0.7 s)

const BootProvider = ({ children }) => {
  const { pathname } = useLocation();
  // Solo la portada (grilla de destacados) espera a sus fotos; el resto solo el tiempo mínimo.
  const [waitsForContent] = useState(
    () => pathname === "/" || pathname === "/projects/selected"
  );
  const [contentReady, setContentReady] = useState(false);
  const [contentSettled, setContentSettled] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [minPassed, setMinPassed] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  // Los tiempos se miden desde que el usuario pidió la página (performance.now()),
  // así el tiempo de descarga del JavaScript cuenta dentro del mínimo.
  useEffect(() => {
    performance.mark("boot:app-mounted");
    let cancelled = false;
    (document.fonts?.ready ?? Promise.resolve()).then(
      () => !cancelled && setFontsReady(true)
    );
    const minTimer = setTimeout(
      () => setMinPassed(true),
      Math.max(0, MIN_MS - performance.now())
    );
    const maxTimer = setTimeout(
      () => setTimedOut(true),
      Math.max(0, MAX_MS - performance.now())
    );
    return () => {
      cancelled = true;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  useEffect(() => {
    if (!contentReady) return;
    const timer = setTimeout(() => setContentSettled(true), CONTENT_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [contentReady]);

  const done =
    timedOut ||
    (fontsReady && minPassed && (contentSettled || !waitsForContent));

  useEffect(() => {
    if (!done) return;
    const el = document.getElementById("boot-loader");
    if (!el) return;
    performance.mark("boot:loader-hide");
    el.classList.add("hide");
    const timer = setTimeout(() => el.remove(), FADE_MS);
    return () => clearTimeout(timer);
  }, [done]);

  return (
    <BootContext.Provider value={{ setContentReady, bootDone: done }}>
      {children}
    </BootContext.Provider>
  );
};

export default BootProvider;
