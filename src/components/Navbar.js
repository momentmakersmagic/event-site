import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [active, setActive] = useState("home");

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setServiceOpen(false);
    }
  };

  const goToService = (item) => {
    const url = item
      .toLowerCase()
      .replace(/ & /g, " ")
      .replace(/ /g, "-");

    navigate(`/service/${url}`);
    setMenuOpen(false);
    setServiceOpen(false);
  };

  // CLOSE DROPDOWN OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ACTIVE SECTION
  useEffect(() => {
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
  }, []);

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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="w-8 h-8 rounded" />
            <h1 className="font-bold text-base md:text-lg">
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
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className={`text-xs transition-transform ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                >
                  &#9662;
                </span>
              </div>

              <div
                className={`absolute mt-2 w-56 bg-white text-black rounded-xl shadow-lg p-3 transition-all duration-300 ${
                  serviceOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {servicesList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => goToService(item)}
                    className="hover:text-pink-500 cursor-pointer py-2"
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
              className="bg-pink-500 px-4 py-1 rounded-full hover:scale-105 transition"
            >
              Book Now
            </button>
          </ul>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* SIDEBAR */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* CLOSE */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl"
            >
              ✖
            </button>
          </div>

          <ul className="mt-6 space-y-5 text-black text-base">

            <li onClick={() => scrollTo("home")} className="cursor-pointer">
              Home
            </li>

            {/* SERVICES */}
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services <span>{serviceOpen ? "▴" : "▾"}</span>
              </div>

              {serviceOpen && (
                <ul className="ml-3 mt-3 space-y-3 text-sm text-gray-600 border-l pl-3">
                  {servicesList.map((item, i) => (
                    <li key={i} onClick={() => goToService(item)}>
                      {item}
                    </li>
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