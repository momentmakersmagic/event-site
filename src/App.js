import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Layout";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

import ServicePage from "./pages/ServicePage";

// 🔥 HOME PAGE
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}

// 🔥 ROUTES WITH LAYOUT
function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* SERVICE PAGE */}
      <Route
        path="/service/:name"
        element={
          <Layout>
            <ServicePage />
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;