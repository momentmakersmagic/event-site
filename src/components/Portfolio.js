import { useState, useEffect } from "react";

// Birthday
import b1 from "../assets/portfolio/Birthday_1.jpeg";
import b2 from "../assets/portfolio/Birthday_2.jpeg";
import b3 from "../assets/portfolio/Birthday_3.jpeg";
import b4 from "../assets/portfolio/Birthday_4.jpeg";
import b5 from "../assets/portfolio/Birthday_5.jpeg";

// Shower
import s1 from "../assets/portfolio/Shower_1.jpeg";
import s2 from "../assets/portfolio/Shower_2.jpeg";
import s3 from "../assets/portfolio/Shower_3.png";

// Naming
import n1 from "../assets/portfolio/Naming_1.png";
import n2 from "../assets/portfolio/Naming_2.jpeg";
import n3 from "../assets/portfolio/Naming_3.jpeg";
import n4 from "../assets/portfolio/Naming_4.jpeg";

function Portfolio() {
  const [category, setCategory] = useState("all");
  const [index, setIndex] = useState(0);

  const data = {
    "birthday-decoration": [b1, b2, b3, b4, b5],
    "baby-shower": [s1, s2, s3],
    "naming-ceremony": [n1, n2, n3, n4],
  };

  const allImages = [
    ...data["birthday-decoration"],
    ...data["baby-shower"],
    ...data["naming-ceremony"],
  ];

  const images =
    category === "all"
      ? allImages
      : data[category] || [];

  // 🔥 AUTO SLIDE
  useEffect(() => {
    setIndex(0);

    const interval = setInterval(() => {
      setIndex((prev) =>
        images.length > 0 ? (prev + 1) % images.length : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [category, images.length]);

  const categories = [
    { key: "all", label: "All" },
    { key: "birthday-decoration", label: "Birthday Decoration" },
    { key: "baby-shower", label: "Baby Shower" },
    { key: "naming-ceremony", label: "Naming Ceremony" },
    { key: "engagement", label: "Engagement" },
    { key: "anniversary", label: "Anniversary" },
    { key: "photography-video", label: "Photography & Video" },
  ];

  const isComingSoon =
    category === "engagement" ||
    category === "anniversary" ||
    category === "photography-video";

  return (
    <div id="portfolio" className="bg-white py-16 px-4 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <div className="inline-block bg-yellow-500/20 border border-yellow-400/30 px-4 py-1 rounded-md mb-3">
            <span className="text-yellow-500 font-semibold text-sm">
              Our Work
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Events We've <br />
            <span className="text-pink-500">Brought to Life</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-lg">
            A glimpse of the magic we've created — every event crafted
            with creativity, precision, and passion.
          </p>

          {/* FILTER BUTTONS */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">

            {categories.map((item) => (
              <button
                key={item.key}
                onClick={() => setCategory(item.key)}
                className={`px-4 py-1 rounded-full text-sm transition
                  ${
                    category === item.key
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}
              >
                {item.label}
              </button>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full">

          <div className="h-72 md:h-[420px] rounded-xl overflow-hidden shadow-xl bg-gray-100 relative">

            {/* COMING SOON */}
            {isComingSoon && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 text-center">
                <h3 className="text-lg font-semibold">
                  Coming Soon ✨
                </h3>
                <p className="text-sm">
                  Exciting events will be added here soon
                </p>
              </div>
            )}

            {/* IMAGE */}
            {!isComingSoon && images.length > 0 && (
              <img
                src={images[index]}
                alt="portfolio"
                className="w-full h-full object-cover transition duration-700"
              />
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Portfolio;