import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 1-2 weeks in advance to ensure availability and proper planning.",
    },
    {
      q: "Do you handle events outside Bangalore?",
      a: "Currently, we primarily operate within Bangalore, but we can consider nearby locations based on requirements.",
    },
    {
      q: "What’s included in the free consultation?",
      a: "We discuss your event ideas, theme, budget, and suggest suitable decoration concepts.",
    },
    {
      q: "Can I customize a package to suit my budget?",
      a: "Absolutely! We provide flexible and customizable packages based on your needs.",
    },
    {
      q: "How do I confirm my booking?",
      a: "Once you finalize the design, you can confirm your booking with a small advance payment.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div id="faq"
      className="max-w-3xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Questions?
        </h2>

        <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mt-2">
          We've Got Answers.
        </h3>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Everything you need to know before planning your perfect event.
        </p>

      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h4 className="text-gray-800 font-medium text-sm md:text-base">
                {faq.q}
              </h4>

              <span className="text-pink-500 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {activeIndex === index && (
              <p className="text-gray-500 mt-3 text-sm text-left">
                {faq.a}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;