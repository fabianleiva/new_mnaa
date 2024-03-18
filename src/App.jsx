import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import FeaturedProjects from "./views/FeaturedProjects";
import AllProjects from "./views/AllProjects";
import ProjectGallery from "./components/ProjectGallery";
import Publications from "./views/Publications";
import Conferences from "./views/Conferences";
import About from "./views/About";
import Team from "./views/Team";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<FeaturedProjects />}></Route>
        <Route path="/projects/all" element={<AllProjects />}></Route>
        <Route
          path="/projects/:projectSlug"
          element={<ProjectGallery />}
        ></Route>
        <Route path="/archive/publications" element={<Publications />}></Route>
        <Route path="/archive/conferences" element={<Conferences />}></Route>
        <Route path="/office/about" element={<About />}></Route>
        <Route path="/office/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
