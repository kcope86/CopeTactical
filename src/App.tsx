import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ParacordPage from "./pages/ParacordPage";
import MaterialsPage from "./pages/MaterialsPage";
import MaterialDetailsPage from "./pages/MaterialDetailsPage";
import MainLayout from "./layout/MainLayout";
import BuildDetailPage from "./pages/BuildDetailPage";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/build/:id" element={<BuildDetailPage />} />
        <Route path="/paracord" element={<ParacordPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/materials/:category" element={<MaterialDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </MainLayout>
  );
}