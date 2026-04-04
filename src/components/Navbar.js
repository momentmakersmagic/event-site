import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [active, setActive] = useState("home");

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 FINAL SCROLL FUNCTION (WORKS EVERYWHERE)
  const scrollTo = (id) => {
    // 👉 If not on home → go home first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setMenuOpen(false);
      setServiceOpen(false);
      return;
    }

    // 👉 If on home → scroll directly
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
    setServiceOpen(false);
  };

  // 🔥 SERVICE NAVIGATION
  const goToService = (item) => {
    const url = item
      .toLowerCase()
      .replace(/ & /g, " ")
      .replace(/ /g, "-");

    setMenuOpen(false);
    setServiceOpen(false);

    setTimeout(() => {
      navigate(`/service/${url}`);
    }, 100);
  };

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ACTIVE SECTION (ONLY ON HOME)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "portfolio",
        "process",
        "review",
        "faq",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const servicesList = [
    "Birthday Decoration",
    "Baby Shower",
    "Naming Ceremony",
    "Engagement",
    "Anniversary",
    "Photography & Video",
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#0f172a]/90 text-white z-50 shadow-md">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="w-8 h-8 rounded" />
            <h1 className="font-bold text-sm md:text-lg">
              The <span className="text-pink-500">Moment</span> Makers
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 items-center text-sm">

            {/* SERVICES */}
            <li className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-1 cursor-pointer">

                <span
                  onClick={() => scrollTo("services")}
                  className={active === "services" ? "text-pink-400" : ""}
                >
                  Services
                </span>

                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setServiceOpen(!serviceOpen);
                  }}
                  className={`text-xs ${serviceOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </div>

              <div
                className={`absolute mt-2 w-56 bg-white text-black rounded-xl shadow-lg p-3 ${
                  serviceOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {servicesList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => goToService(item)}
                    className="cursor-pointer py-2 hover:text-pink-500"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </li>

            <li onClick={() => scrollTo("portfolio")} className="cursor-pointer">
              Portfolio
            </li>
            <li onClick={() => scrollTo("process")} className="cursor-pointer">
              Process
            </li>
            <li onClick={() => scrollTo("review")} className="cursor-pointer">
              Review
            </li>
            <li onClick={() => scrollTo("faq")} className="cursor-pointer">
              FAQ
            </li>

            <button
              onClick={() => scrollTo("contact")}
              className="bg-pink-500 px-4 py-1 rounded-full"
            >
              Book Now
            </button>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-50 ${menuOpen ? "visible" : "invisible"}`}>

        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* SIDEBAR */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-6 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-black">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>✖</button>
          </div>

          <ul className="mt-6 space-y-5 text-black">

            <li onClick={() => scrollTo("home")} className="cursor-pointer">
              Home
            </li>

            {/* SERVICES */}
            <li>
              <div className="flex justify-between items-center">

                <span
                  onClick={() => scrollTo("services")}
                  className="cursor-pointer"
                >
                  Services
                </span>

                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setServiceOpen(!serviceOpen);
                  }}
                  className="cursor-pointer"
                >
                  {serviceOpen ? "▴" : "▾"}
                </span>
              </div>

              {serviceOpen && (
                <ul className="ml-3 mt-3 space-y-3 text-sm text-gray-600 border-l pl-3">
                  {servicesList.map((item, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToService(item);
                      }}
                      className="block w-full text-left hover:text-pink-500"
                    >
                      {item}
                    </button>
                  ))}
                </ul>
              )}
            </li>

            <li onClick={() => scrollTo("portfolio")}>Portfolio</li>
            <li onClick={() => scrollTo("process")}>Process</li>
            <li onClick={() => scrollTo("review")}>Review</li>
            <li onClick={() => scrollTo("faq")}>FAQ</li>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full bg-pink-500 text-white py-3 rounded-full mt-6"
            >
              Book Now
            </button>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;