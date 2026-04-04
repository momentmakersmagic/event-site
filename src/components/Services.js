import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import birthday from "../assets/Birthday.png";
import shower from "../assets/Shower.png";
import naming from "../assets/Naming.png";
import engagement from "../assets/Engagement.png";
import anniversary from "../assets/Anniversary.png";
import photography from "../assets/Photography.png";

function Services() {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const services = [
    { name: "Birthday Decoration", img: birthday },
    { name: "Baby Shower", img: shower },
    { name: "Naming Ceremony", img: naming },
    { name: "Engagement", img: engagement },
    { name: "Anniversary", img: anniversary },
    { name: "Photography & Video", img: photography },
  ];

  const goToService = (name) => {
    const url = name
      .toLowerCase()
      .replace(/ & /g, " ")
      .replace(/ /g, "-");

    navigate(`/service/${url}`);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* TOP GRADIENT */}
      <div id="services" className="h-16 bg-gradient-to-b from-black/60 to-white"></div>

      <section className="bg-white py-16 px-4 md:px-12 overflow-hidden">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="text-left">

            <div className="inline-block bg-yellow-500/20 border border-yellow-400/30 px-4 py-1 rounded-md mb-3">
              <span className="text-yellow-500 font-semibold text-sm">
                What We Do
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
              Services Built for <br />
              <span className="text-pink-500">Every Occasion</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-md">
              Whether it's an intimate gathering of 10 or a grand celebration of 1000,
              we craft unforgettable experiences tailored just for you.
            </p>

            <p className="text-xs text-gray-400 mt-4">
              ← Swipe or use arrows to explore →
            </p>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative w-full">

            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:scale-110"
            >
              ◀️
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:scale-110"
            >
              ▶️
            </button>

            {/* SCROLL AREA */}
            <div
              ref={scrollRef}
              className="overflow-x-auto scroll-smooth scrollbar-hide px-1"
            >
              <div className="flex gap-4 pb-2">

                {services.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => goToService(item.name)}
                    className="flex-shrink-0 w-[160px] md:w-[220px] rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer group"
                  >

                    {/* IMAGE FIX */}
                    <div className="w-full h-[140px] md:h-[200px] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="bg-white p-2 text-center">
                      <h3 className="text-gray-800 font-medium text-xs md:text-sm">
                        {item.name}
                      </h3>
                    </div>

                  </div>
                ))}

                {/* EXTRA CARD */}
                <div className="flex-shrink-0 w-[160px] md:w-[220px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-500 text-center px-4 hover:border-pink-400 hover:text-pink-500 transition">

                  <div>
                    <p className="text-sm font-medium">
                      More Events
                    </p>
                    <p className="text-xs mt-1">
                      Coming Soon...
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Services;