import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import FeaturedProjects from "./views/FeaturedProjects";
import ProjectGallery from "./components/ProjectGallery";
import AllProjects from "./views/AllProjects";
import Archive from "./views/Archive";
import Office from "./views/Office";
import Contact from "./views/Contact"
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<FeaturedProjects />}></Route>
        <Route path="/projects/all" element={<AllProjects/>}></Route>
        <Route path="/projects/:projectSlug" element={<ProjectGallery />}></Route>
        <Route path="/archive/publications" element={<Archive />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
