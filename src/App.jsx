import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ForedragPage from "./pages/ForedragPage";
import ArtiklerPage from "./pages/ArtiklerPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import CvPage from "./pages/CvPage";
import MinGlaedePage from "./pages/MinGlaedePage";
import KunstPage from "./pages/KunstPage";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foredrag" element={<ForedragPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/artikler" element={<ArtiklerPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/min-glaede" element={<MinGlaedePage />} />
          <Route path="/kunst" element={<KunstPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
