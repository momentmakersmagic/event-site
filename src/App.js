import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import ServicePage from "./pages/ServicePage";

// ✅ HOME PAGE (your current design)
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

// ✅ ROUTES
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:name" element={<ServicePage />} />
    </Routes>
  );
}

export default App;