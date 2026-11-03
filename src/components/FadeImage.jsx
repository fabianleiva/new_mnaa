import { useEffect, useRef, useState } from "react";

// <img> que aparece con un fundido suave cuando está lista (descargada Y decodificada)
// y, si no la controla un grupo, cuando además entra en pantalla.
// Acepta las mismas props que <img>, más:
//  - delay (ms): retraso del fundido
//  - duration (ms): duración del fundido
//  - rise: sube levemente al aparecer
//  - reveal: si se indica, reemplaza el criterio "entró en pantalla" (lo decide un grupo, p. ej. una fila)
//  - onReady: se llama cuando la imagen quedó lista para pintarse
const FadeImage = ({
  className = "",
  rise = true,
  delay = 0,
  duration = 700,
  reveal,
  onReady,
  style,
  ...props
}) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [settled, setSettled] = useState(false);
  const [seen, setSeen] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  // Lista = descargada y decodificada. Así el fundido nunca arranca con una imagen a medio preparar.
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    let cancelled = false;
    setReady(false);
    setSettled(false);

    const markReady = () => {
      if (!cancelled) setReady(true);
    };
    const prepare = () => {
      if (typeof img.decode === "function")
        img.decode().then(markReady, markReady);
      else markReady();
    };

    if (img.complete && img.naturalWidth > 0) {
      prepare();
    } else {
      img.addEventListener("load", prepare, { once: true });
      img.addEventListener("error", markReady, { once: true });
    }
    return () => {
      cancelled = true;
      img.removeEventListener("load", prepare);
      img.removeEventListener("error", markReady);
    };
  }, [props.src, props.srcSet]);

  // avisa al grupo (si lo hay) que esta imagen ya está lista
  useEffect(() => {
    if (ready) onReady?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // marca la imagen como vista cuando una parte entra en pantalla (una sola vez)
  useEffect(() => {
    if (seen || reveal !== undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [seen, reveal]);

  const visible = ready && (reveal === undefined ? seen : reveal);

  // libera la capa de animación una vez terminado el fundido
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setSettled(true), duration + delay + 100);
    return () => clearTimeout(timer);
  }, [visible, duration, delay]);

  return (
    <img
      ref={ref}
      className={`${className} transition-[opacity,transform] ease-out motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : `opacity-[0.01] ${rise ? "translate-y-2" : ""}`
      }`}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        // la capa de animación solo existe mientras dura el fundido
        willChange: visible && !settled ? "opacity, transform" : undefined,
      }}
      {...props}
    />
  );
};

export default FadeImage;
