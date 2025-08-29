import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import DonationsPage from "./pages/DonationsPage/DonationsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        {/* rota fallback */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
