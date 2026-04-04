import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Reviews() {
  const reviews = [
    {
      name: "Arjun Rao",
      rating: 5,
      text: "The birthday setup was beyond what we imagined. Everything was perfectly arranged and looked stunning!",
    },
    {
      name: "Sneha Reddy",
      rating: 4,
      text: "Loved the baby shower decoration. Very elegant and well managed. Highly recommended!",
    },
    {
      name: "Karthik Sharma",
      rating: 5,
      text: "Amazing work on my daughter's naming ceremony. Guests were impressed!",
    },
    {
      name: "Priya Nair",
      rating: 4,
      text: "Great experience overall. Smooth execution and beautiful decoration.",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Professional team and creative ideas. Made our event unforgettable!",
    },
  ];

  return (
    <section id="review" className="bg-white py-16 px-4 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <div className="inline-block bg-yellow-500/20 px-4 py-1 rounded-md border border-yellow-400/30 mb-3">
            <span className="text-yellow-600 font-semibold text-sm">
              HAPPY CLIENTS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            They Loved It. <br />
            <span className="text-pink-500">You Will Too ❤️</span>
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base max-w-md mx-auto md:mx-0">
            We’re a growing Bangalore-based team creating memorable events with
            creativity, care, and perfection.
          </p>

        </div>

        {/* RIGHT SLIDER */}
        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 shadow-lg">

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
          >

            {reviews.map((review, index) => (
              <SwiperSlide key={index}>

                <div className="flex flex-col items-center text-center px-3 md:px-6">

                  {/* AVATAR */}
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-lg mb-3">
                    {review.name.charAt(0)}
                  </div>

                  {/* RATING */}
                  <div className="mb-2 text-yellow-400 text-lg">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* NAME */}
                  <div className="mt-4 font-semibold text-gray-800">
                    {review.name}
                  </div>

                  {/* LOCATION */}
                  <div className="text-xs text-gray-400">
                    Bangalore Client
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}

export default Reviews;