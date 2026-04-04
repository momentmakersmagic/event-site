import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goToService = (name) => {
    const url = name
      .toLowerCase()
      .replace(/ & /g, " ")
      .replace(/ /g, "-");

    navigate(`/service/${url}`);
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-4 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>

          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-md" />
            <h2 className="text-lg font-bold text-white">
              The <span className="text-pink-500">Moment</span> Makers
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Creating unforgettable events with creativity, passion, and attention
            to every detail.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">

            <li onClick={() => scrollTo("home")} className="hover:text-pink-400 cursor-pointer transition">
              Home
            </li>

            <li onClick={() => scrollTo("services")} className="hover:text-pink-400 cursor-pointer transition">
              Services
            </li>

            <li onClick={() => scrollTo("portfolio")} className="hover:text-pink-400 cursor-pointer transition">
              Portfolio
            </li>

            <li onClick={() => scrollTo("process")} className="hover:text-pink-400 cursor-pointer transition">
              Process
            </li>

            <li onClick={() => scrollTo("review")} className="hover:text-pink-400 cursor-pointer transition">
              Review
            </li>

            <li onClick={() => scrollTo("faq")} className="hover:text-pink-400 cursor-pointer transition">
              FAQ
            </li>

            <li onClick={() => scrollTo("contact")} className="hover:text-pink-400 cursor-pointer transition">
              Book Now
            </li>

          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>

          <ul className="space-y-2 text-sm">

            <li onClick={() => goToService("Birthday Decoration")} className="hover:text-pink-400 cursor-pointer transition">
              Birthday Decoration
            </li>

            <li onClick={() => goToService("Baby Shower")} className="hover:text-pink-400 cursor-pointer transition">
              Baby Shower
            </li>

            <li onClick={() => goToService("Naming Ceremony")} className="hover:text-pink-400 cursor-pointer transition">
              Naming Ceremony
            </li>

            <li onClick={() => goToService("Engagement")} className="hover:text-pink-400 cursor-pointer transition">
              Engagement
            </li>

            <li onClick={() => goToService("Anniversary")} className="hover:text-pink-400 cursor-pointer transition">
              Anniversary
            </li>

            <li onClick={() => goToService("Photography & Video")} className="hover:text-pink-400 cursor-pointer transition">
              Photography & Video
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm">

            <li>
              📍 <span className="text-gray-400">Bangalore, India</span>
            </li>

            <li>
              📞 <span className="text-gray-400">+__________</span>
            </li>

            <li>
              📧 <span className="text-gray-400">momentmakersmagic@gmail.com</span>
            </li>

          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-5 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-full text-white text-sm transition"
          >
            Book Now
          </button>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">

        ©️ {new Date().getFullYear()} The Moment Makers. All rights reserved.

        <p className="mt-2 text-xs text-gray-500">
          Designed with ❤️ for unforgettable celebrations
        </p>

      </div>

    </footer>
  );
}

export default Footer;