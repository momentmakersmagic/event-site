function Reviews() {
  return (
    <section
      id="review"
      className="bg-white py-16 px-4 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-left">

          <div className="inline-block bg-yellow-500/20 px-4 py-1 rounded-md border border-yellow-400/30 mb-3">
            <span className="text-yellow-600 font-semibold text-sm">
              HAPPY CLIENTS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
            Real Reviews <br />
            <span className="text-pink-500">Loading Soon...</span>
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base max-w-md">
            We’re preparing to showcase real client experiences.
            Stay tuned — your event could be the first featured story!
          </p>

          {/* CTA */}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
          >
            Book Your Event
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          {/* 🔥 LOADING CARD */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border rounded-2xl p-8 md:p-10 text-center shadow-md max-w-md w-full">

            {/* ⭐ ICON */}
            <div className="text-5xl mb-4 animate-pulse">⭐</div>

            {/* LOADING TEXT */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Reviews Loading
              <span className="dot-animate"></span>
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Fetching client experiences...
            </p>

            {/* 🔥 SKELETON LOADER */}
            <div className="mt-6 space-y-3">
              <div className="h-3 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-4/5 mx-auto animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 DOT ANIMATION */}
      <style>
        {`
          .dot-animate::after {
            content: '';
            animation: dots 1.5s infinite;
          }

          @keyframes dots {
            0% { content: ''; }
            33% { content: '.'; }
            66% { content: '..'; }
            100% { content: '...'; }
          }
        `}
      </style>
    </section>
  );
}

export default Reviews;