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
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-12">
      <div id="process"
      className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* GOLD TAG */}
          <div className="inline-block bg-yellow-500/20 px-4 py-2 rounded-md border border-yellow-400/30 mb-4">
            <span className="text-yellow-600 font-semibold text-sm">
              HOW IT WORKS
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Your Event in <br />
            <span className="text-pink-500">4 Easy Steps</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-md">
            From planning to execution, we ensure a seamless and enjoyable
            experience for every client — no stress, just celebration.
          </p>
        </div>

        {/* RIGHT SIDE - STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-6 rounded-xl border transition-all duration-300 
              hover:-translate-y-1 hover:shadow-xl
              ${
                step.id === "02"
                  ? "border-pink-400 shadow-lg bg-white"
                  : "bg-white"
              }`}
            >
              {/* STEP NUMBER */}
              <h3 className="text-pink-500 text-2xl font-bold mb-2">
                {step.id}
              </h3>

              {/* TITLE */}
              <h4 className="text-lg font-semibold text-gray-800">
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