import { useParams, useNavigate } from "react-router-dom";

// 🔥 FUTURE: SERVICE DATA
const serviceData = {
  "birthday-decoration": {
    title: "Birthday Decoration",
    desc: "Beautiful birthday setups for all ages.",
  },
  "baby-shower": {
    title: "Baby Shower",
    desc: "Celebrate motherhood with elegant themes.",
  },
  "naming-ceremony": {
    title: "Naming Ceremony",
    desc: "Traditional & modern naming events.",
  },
  "engagement": {
    title: "Engagement",
    desc: "Memorable engagement setups.",
  },
  "anniversary": {
    title: "Anniversary",
    desc: "Celebrate love and milestones.",
  },
  "photography-video": {
    title: "Photography & Video",
    desc: "Capture every special moment.",
  },
};

function ServicePage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const service = serviceData[name];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-center px-4">

      {/* IF SERVICE EXISTS */}
      {service ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-pink-500">
            {service.title}
          </h1>

          <p className="mt-3 text-gray-600">
            {service.desc}
          </p>

          <p className="mt-4 text-gray-500">
            🚧 This page is under development
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-500">
            Service Not Found
          </h1>
        </>
      )}

      {/* BUTTONS */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 text-white px-5 py-2 rounded-full"
        >
          Go Home
        </button>

        <button
          onClick={() => navigate("/#contact")}
          className="border border-pink-500 text-pink-500 px-5 py-2 rounded-full"
        >
          Plan This Event
        </button>
      </div>

    </div>
  );
}

export default ServicePage;