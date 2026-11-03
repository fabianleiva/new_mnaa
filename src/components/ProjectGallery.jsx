import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext, useRef } from "react";
import { ApiContext } from "../context/ApiContext.jsx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { responsiveImage } from "../utils/responsiveImage";
import FadeImage from "./FadeImage";

const ProjectGallery = () => {
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const { projects } = useContext(ApiContext);
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const infoPanelRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(null);
  const [leaving, setLeaving] = useState(null);

  const imageUrls = project
    ? Object.values(project.acf.project_images).filter((img) => img)
    : [];
  const currentUrl = imageUrls[currentImageIndex];

  // Entrega las props de la foto de escritorio (se alinean con las del <img> para que el
  // navegador elija la misma variante al precargar).
  const desktopImage = (url) =>
    responsiveImage(url, (w, h) => `calc(60vh * ${(w / h).toFixed(3)})`);

  // Cruce entre fotos: la nueva se precarga y, cuando está lista, se disuelve sobre la anterior.
  useEffect(() => {
    if (!project || !currentUrl) return;
    if (!shown || shown.slug !== project.slug) {
      setShown({ url: currentUrl, slug: project.slug });
      setLeaving(null);
      return;
    }
    if (shown.url === currentUrl) return;

    let cancelled = false;
    const props = desktopImage(currentUrl);
    const probe = new Image();
    probe.sizes = props.sizes || "";
    if (props.srcSet) probe.srcset = props.srcSet;
    probe.src = props.src;
    const swap = () => {
      if (cancelled) return;
      setLeaving(shown);
      setShown({ url: currentUrl, slug: project.slug });
    };
    probe.decode().then(swap, swap);
    return () => {
      cancelled = true;
    };
  }, [currentUrl, project, shown]);

  // Retira la foto saliente cuando termina el cruce.
  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(() => setLeaving(null), 700);
    return () => clearTimeout(timer);
  }, [leaving]);

  // Precarga la foto anterior y la siguiente (solo en escritorio, donde se usa esta vista).
  useEffect(() => {
    if (!imageUrls.length || !window.matchMedia("(min-width: 768px)").matches)
      return;
    [-1, 1].forEach((offset) => {
      const url =
        imageUrls[(currentImageIndex + offset + imageUrls.length) % imageUrls.length];
      const props = desktopImage(url);
      const probe = new Image();
      probe.sizes = props.sizes || "";
      if (props.srcSet) probe.srcset = props.srcSet;
      probe.src = props.src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex, project]);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find((e) => e.slug === projectSlug);
      if (foundProject) {
        setProject(foundProject);
        setCurrentImageIndex(0);
      }
    }

    // Cambia el estado a 'true' después de 500ms
    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [projects, projectSlug]);

  const handleNextImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const handlePrevImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
    }
  };

  const handleNextProject = () => {
    if (projects.length > 0) {
      const filteredProjects = projects.filter(
        (p) => p.acf.project_filter === "destacado"
      );
      const currentIndex = filteredProjects.findIndex(
        (p) => p.slug === projectSlug
      );
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        const basePath = window.location.pathname.includes("/selected/")
          ? "/projects/selected/"
          : "/projects/";
        navigate(`${basePath}${filteredProjects[nextIndex].slug}`);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        infoPanelRef.current &&
        !infoPanelRef.current.contains(event.target)
      ) {
        setShowInfo(false);
      }
    };

    if (showInfo) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showInfo]);

  const projectDetails = project
    ? [
        { label: "Arquitectura", value: project.acf.architects },
        {
          label: "Arquitecto Asociado",
          value: project.acf.associate_architect,
        },
        { label: "Arquitectos a cargo", value: project.acf.lead_architects },
        { label: "Equipo", value: project.acf.team },
        { label: "Ubicación", value: project.acf.location },
        { label: "Año", value: project.acf.year },
        { label: "Superficie", value: project.acf.surface },
        { label: "Cliente", value: project.acf.client },
      ]
    : [];

  return (
    <main>
      <div
        id="desktop"
        className="w-screen h-[100dvh] flex flex-col justify-center items-center overflow-hidden relative hidden md:block"
      >
        {project && (
          <>
            <div className="absolute inset-0 flex">
              <div
                className="w-1/2 h-full relative group"
                onClick={handlePrevImage}
              >
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#242424] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowLeft />
                </span>
              </div>
              <div
                className="w-1/2 h-full relative group"
                onClick={handleNextImage}
              >
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#242424] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowRight />
                </span>
              </div>
            </div>

            <div className="grid place-items-center w-full h-full pointer-events-none">
              {leaving && (
                <img
                  key={`leaving-${leaving.url}`}
                  className="col-start-1 row-start-1 h-[60vh] w-auto object-contain gallery-leave"
                  {...desktopImage(leaving.url)}
                  alt=""
                  aria-hidden="true"
                />
              )}
              {shown && (
                <FadeImage
                  key={shown.url}
                  rise={false}
                  className="col-start-1 row-start-1 h-[60vh] w-auto object-contain"
                  {...desktopImage(shown.url)}
                  alt={`Image ${currentImageIndex + 1}`}
                  decoding="async"
                />
              )}
            </div>

            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo((prev) => !prev);
              }}
              className={`absolute bottom-0 left-0 p-3 text-base z-10 uppercase flex items-center gap-1 ${
                showInfo
                  ? "text-[#fafafa] hover:text-[#adadad]"
                  : "text-[#adadad] hover:text-[#242424]"
              }`}
            >
              {showInfo ? (
                "Cerrar"
              ) : (
                <>
                  {project.acf.project_title}
                  <FaPlus className="inline-block text-md" />
                </>
              )}
            </p>

            <p
              onClick={handleNextProject}
              className={`flex absolute bottom-0 right-0 p-3 text-[#adadad] hover:text-[#242424] z-10 text-2xl group ${
                showInfo ? "hidden" : ""
              }`}
            >
              <RxDoubleArrowRight />
            </p>

            <div
              ref={infoPanelRef}
              className={`fixed bottom-0 left-0 w-full bg-[#242424] justify-between opacity-90 text-[#fafafa] flex flex-col md:grid md:grid-cols-2 md:gap-3 transform transition-transform duration-300 ease-in-out tracking-wider ${
                showInfo ? "translate-y-0" : "translate-y-full"
              }`}
              style={{ height: "80vh", zIndex: 9 }}
            >
              <div className="w-full text-sm 2xl:text-base p-3 text-left md:col-span-1 font-[supreme-book]">
                {project.acf.summary}
              </div>

              <div className="max-w-[45vw] lg:max-w-[35vw] xl:max-w-[25vw] ml-auto text-sm 2xl:text-base p-3 text-right md:col-span-1 font-[supreme-book]">
                {projectDetails
                  .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
                  .map(({ label, value }) => (
                    <p key={label}>
                      {label}: {value}
                    </p>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div
        id="mobile"
        className={`md:hidden mt-[20vh] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          {project &&
            Object.values(project.acf.project_images)
              .filter((img) => img)
              .map((img, index) => (
                <FadeImage
                  key={index}
                  className="w-full h-auto object-cover px-3 pb-3"
                  {...responsiveImage(img, "100vw")}
                  alt={`Image ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
        </div>
        <div className="w-full bg-[#242424] text-[#fafafa] p-3 text-left flex flex-col py-6">
          <h3 className="mb-3">{project?.acf.project_title}</h3>
          <p>{project?.acf.summary}</p>
          <div className="mt-6">
            {projectDetails
              .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
              .map(({ label, value }) => (
                <p key={label}>
                  {label}: {value}
                </p>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectGallery;
