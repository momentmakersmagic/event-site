function Process() {
  const steps = [
    {
      id: "01",
      title: "Tell Us Your Vision",
      desc: "Share your ideas, theme, and expectations. We understand your needs and plan accordingly.",
    },
    {
      id: "02",
      title: "Get a Custom Plan",
      desc: "We design a personalized event plan including decor, setup, and experience.",
    },
    {
      id: "03",
      title: "We Handle Everything",
      desc: "From setup to execution, we manage everything so you can relax.",
    },
    {
      id: "04",
      title: "You Enjoy the Day",
      desc: "Sit back and enjoy your event while we make it unforgettable.",
    },
  ];

  return (
    <section id="process" className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-12 overflow-hidden">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="text-left">

          <div className="inline-block bg-yellow-500/20 px-4 py-1 rounded-md border border-yellow-400/30 mb-3">
            <span className="text-yellow-600 font-semibold text-sm">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
            Your Event in <br />
            <span className="text-pink-500">4 Easy Steps</span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-md">
            From planning to execution, we ensure a seamless and enjoyable
            experience — no stress, just celebration.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative p-5 md:p-6 rounded-xl transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              ${
                index === 1
                  ? "bg-pink-50 border border-pink-400 shadow-md"
                  : "bg-white border"
              }`}
            >

              {/* NUMBER BADGE */}
              <div className="absolute -top-3 -left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
                {step.id}
              </div>

              {/* TITLE */}
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mt-2">
                {step.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;