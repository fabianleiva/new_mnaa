import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import SelectedProjects from "./views/SelectedProjects";
import AllProjects from "./views/AllProjects";
import ProjectGallery from "./components/ProjectGallery";
import News from "./views/News";
import Info from "./views/Info";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects/selected" element={<SelectedProjects />}></Route>
        <Route path="/projects/all" element={<AllProjects />}></Route>
        <Route
          path="/projects/:projectSlug"
          element={<ProjectGallery />}
        ></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
