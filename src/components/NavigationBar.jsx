import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [projectsState, setProjectsState] = useState("active");
  const [featuredState, setFeaturedState] = useState("active");
  const [allProjectsState, setAllProjectsState] = useState("inactive");

  const [archiveState, setArchiveState] = useState("inactive");
  const [publicationsState, setPublicationsState] = useState("inactive");
  const [conferencesState, setConferencesState] = useState("inactive");

  const [officeState, setOfficeState] = useState("inactive");
  const [aboutState, setAboutState] = useState("inactive");
  const [teamState, setTeamState] = useState("inactive");

  const [contactState, setContactState] = useState("inactive");

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("navbarState"));

    if (storedState) {
      setProjectsState(storedState.projectsState);
      setFeaturedState(storedState.featuredState);
      setAllProjectsState(storedState.allProjectsState);
      setArchiveState(storedState.archiveState);
      setPublicationsState(storedState.publicationsState);
      setConferencesState(storedState.conferencesState);
      setOfficeState(storedState.officeState);
      setAboutState(storedState.aboutState);
      setTeamState(storedState.teamState);
      setContactState(storedState.contactState);
    }
  }, []);

  useEffect(() => {
    const navbarState = {
      projectsState,
      featuredState,
      allProjectsState,
      archiveState,
      publicationsState,
      conferencesState,
      officeState,
      aboutState,
      teamState,
      contactState,
    };

    localStorage.setItem("navbarState", JSON.stringify(navbarState));
  }, [
    projectsState,
    featuredState,
    allProjectsState,
    archiveState,
    publicationsState,
    conferencesState,
    officeState,
    aboutState,
    teamState,
    contactState,
  ]);

  useEffect(() => {
    // Si la ruta es la URL base "/", restablece todos los estados del menú
    if (pathname === "/") {
      setProjectsState("active");
      setFeaturedState("active");
      setAllProjectsState("inactive");
      setArchiveState("inactive");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setOfficeState("inactive");
      setAboutState("inactive");
      setTeamState("inactive");
      setContactState("inactive");
    }
  }, [pathname]);

  const setActiveStates = (clickedLink) => {
    if (clickedLink === "projects" || clickedLink === "featured") {
      // MENU
      setProjectsState("active");
      setArchiveState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
      //SUB-MENU
      setFeaturedState("active");
      setAllProjectsState("inactive");
    } else if (clickedLink === "allProjects") {
      // MENU
      setProjectsState("active");
      setArchiveState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
      //SUB-MENU
      setFeaturedState("inactive");
      setAllProjectsState("active");
    }
    if (clickedLink === "archive" || clickedLink === "publications") {
      // MENU
      setProjectsState("inactive");
      setArchiveState("active");
      setOfficeState("inactive");
      setContactState("inactive");
      //SUB-MENU
      setPublicationsState("active");
      setConferencesState("inactive");
    } else if (clickedLink === "conferences") {
      // MENU
      setProjectsState("inactive");
      setArchiveState("active");
      setOfficeState("inactive");
      setContactState("inactive");
      //SUB-MENU
      setPublicationsState("inactive");
      setConferencesState("active");
    }
    if (clickedLink === "office" || clickedLink === "about") {
      // MENU
      setProjectsState("inactive");
      setArchiveState("inactive");
      setOfficeState("active");
      setContactState("inactive");
      //SUB-MENU
      setAboutState("active");
      setTeamState("inactive");
    } else if (clickedLink === "team") {
      // MENU
      setProjectsState("inactive");
      setArchiveState("inactive");
      setOfficeState("active");
      setContactState("inactive");
      //SUB-MENU
      setAboutState("inactive");
      setTeamState("active");
    }
    if (clickedLink === "contact") {
      // MENU
      setProjectsState("inactive");
      setArchiveState("inactive");
      setOfficeState("inactive");
      setContactState("active");
    }
  };

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showProjectsSecondLine =
    pathname.startsWith("/projects") || pathname === "/";

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en archivo
  const showArchiveSecondLine = pathname.startsWith("/archive");

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en oficina
  const showOfficeSecondLine = pathname.startsWith("/office");

  return (
    <>
      <header>
        <nav className="flex justify-between fixed top-6 inset-x-6 z-[100] mnaaBold">
          <div>
            <div className="flex text-lg md:text-xl webTitle">
              <NavLink
                className={projectsState}
                to="/"
                onClick={() => setActiveStates("projects")}
              >
                <h3 className="pr-3">Proyectos</h3>
              </NavLink>
              <NavLink
                className={archiveState}
                to="/archive/publications"
                onClick={() => setActiveStates("archive")}
              >
                <h3 className="pr-3">Archivo</h3>
              </NavLink>
              <NavLink
                className={officeState}
                to="/office/about"
                onClick={() => setActiveStates("office")}
              >
                <h3 className="pr-3">Oficina</h3>
              </NavLink>
              <NavLink
                className={contactState}
                to="/contact"
                onClick={() => setActiveStates("contact")}
              >
                <h3 className="pr-3">Contacto</h3>
              </NavLink>
            </div>
            {showProjectsSecondLine && (
              <div className="flex text-lg md:text-xl webTitle">
                <NavLink
                  className={featuredState}
                  to="/"
                  onClick={() => setActiveStates("featured")}
                >
                  <h3 className="pr-1">Destacados</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink
                  className={allProjectsState}
                  to="/projects/all"
                  onClick={() => setActiveStates("allProjects")}
                >
                  <h3 className="pr-1">Todos</h3>
                </NavLink>
              </div>
            )}
            {showArchiveSecondLine && (
              <div className="flex text-lg md:text-xl webTitle">
                <NavLink
                  className={publicationsState}
                  to="/archive/publications"
                  onClick={() => setActiveStates("publications")}
                >
                  <h3 className="pr-1">Publicaciones</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink
                  className={conferencesState}
                  to="/archive/conferences"
                  onClick={() => setActiveStates("conferences")}
                >
                  <h3 className="pr-1">Conferencias</h3>
                </NavLink>
              </div>
            )}
            {showOfficeSecondLine && (
              <div className="flex text-lg md:text-xl webTitle">
                <NavLink
                  className={aboutState}
                  to="/office/about"
                  onClick={() => setActiveStates("about")}
                >
                  <h3 className="pr-1">Acerca de</h3>
                </NavLink>
                <h3 className="pr-1 text-[#242424]">/</h3>
                <NavLink
                  className={teamState}
                  to="/office/team"
                  onClick={() => setActiveStates("team")}
                >
                  <h3 className="pr-1">Equipo</h3>
                </NavLink>
              </div>
            )}
          </div>
          <div className="text-lg md:text-xl ">
            <NavLink
              className="webTitle"
              to="/"
              onClick={() => setActiveStates("projects")}
            >
              <h3 className="webTitle">Max Núñez Arquitectos</h3>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavigationBar;
