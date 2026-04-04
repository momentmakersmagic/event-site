import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ServicePage() {
  const { name } = useParams();
  const navigate = useNavigate();

  // 🔥 SCROLL TO TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  // 🔥 FORMAT NAME
  const formatName = (text) => {
    if (!text) return "";
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const serviceTitle = formatName(name);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-[90px] px-4 md:px-12 pb-16">

      <div className="max-w-5xl mx-auto">

        {/* 🔙 BACK */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-pink-500 hover:text-pink-600"
        >
          ← Back to Home
        </button>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          {serviceTitle}
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          We are currently building this service page with full details,
          pricing, and real event showcases.
        </p>

        {/* CARD */}
        <div className="mt-10 bg-white rounded-2xl p-10 text-center shadow-xl border">

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            🚧 Coming Soon
          </h2>

          <p className="text-gray-500 mt-2">
            This service page will be available shortly.
          </p>

          {/* 🔥 FIXED BUTTON */}
          <button
            onClick={() =>
              navigate("/", { state: { scrollTo: "services" } })
            }
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
          >
            Explore Other Services
          </button>

        </div>

      </div>
    </div>
  );
}

export default ServicePage;