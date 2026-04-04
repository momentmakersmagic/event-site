import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  // 🔥 SCROLL FUNCTION
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 SERVICE NAVIGATION
  const goToService = (name) => {
    const url = name
      .toLowerCase()
      .replace(/ & /g, " ")
      .replace(/ /g, "-");

    navigate(`/service/${url}`);
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-14 px-4 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            The <span className="text-pink-500">Moment</span> Makers
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            Creating unforgettable events with creativity, passion, and attention to every detail.
          </p>

          <img
            src={logo}
            alt="logo"
            className="w-24 rounded-md shadow-md"
          />
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">

            <li onClick={() => scrollTo("home")} className="hover:text-pink-400 cursor-pointer">Home</li>

            <li onClick={() => scrollTo("services")} className="hover:text-pink-400 cursor-pointer">Services</li>

            <li onClick={() => scrollTo("portfolio")} className="hover:text-pink-400 cursor-pointer">Portfolio</li>

            <li onClick={() => scrollTo("process")} className="hover:text-pink-400 cursor-pointer">Process</li>

            <li onClick={() => scrollTo("review")} className="hover:text-pink-400 cursor-pointer">Review</li>

            <li onClick={() => scrollTo("faq")} className="hover:text-pink-400 cursor-pointer">FAQ</li>

            <li onClick={() => scrollTo("contact")} className="hover:text-pink-400 cursor-pointer">Book Now</li>

          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>

          <ul className="space-y-2 text-sm">

            <li onClick={() => goToService("Birthday Decoration")} className="hover:text-pink-400 cursor-pointer">
              Birthday Decoration
            </li>

            <li onClick={() => goToService("Baby Shower")} className="hover:text-pink-400 cursor-pointer">
              Baby Shower
            </li>

            <li onClick={() => goToService("Naming Ceremony")} className="hover:text-pink-400 cursor-pointer">
              Naming Ceremony
            </li>

            <li onClick={() => goToService("Engagement")} className="hover:text-pink-400 cursor-pointer">
              Engagement
            </li>

            <li onClick={() => goToService("Anniversary")} className="hover:text-pink-400 cursor-pointer">
              Anniversary
            </li>

            <li onClick={() => goToService("Photography & Video")} className="hover:text-pink-400 cursor-pointer">
              Photography & Video
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm">
            <li>📍 __________</li>
            <li>📞 __________</li>
            <li>📧 __________</li>
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-5 bg-pink-500 px-5 py-2 rounded-full text-white text-sm hover:scale-105 transition"
          >
            Book Now
          </button>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        ©️ {new Date().getFullYear()} The Moment Makers. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;