import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import heroBg from "../assets/hero_background.jpeg";
import slide2 from "../assets/hero_slide2_background.png";
import video1 from "../assets/hero_slide1_video.mp4";
import logo from "../assets/logo.jpeg";

function Hero() {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center pt-[80px] relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl text-center mt-6 px-4">

        {/* BRAND TEXT */}
        <div className="inline-block bg-yellow-500/20 backdrop-blur-md px-4 py-1 rounded-md border border-yellow-400/30">
          <span className="text-yellow-300 text-xs md:text-base font-medium">
            Bangalore’s Premium Event Designers
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-white text-2xl md:text-5xl font-bold mt-3 leading-tight">
          We Make Every Event <br />
          <span className="text-pink-400">Unforgettable & Magical ✨</span>
        </h1>

        <p className="text-gray-300 mt-2 text-sm md:text-lg max-w-xl mx-auto">
          From birthdays to grand celebrations — we design unforgettable experiences.
        </p>

        {/* SLIDER */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-2xl w-full">

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
            autoplay={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full"
          >

            {/* 🎥 SLIDE 1 */}
            <SwiperSlide>
              <div className="w-full h-[220px] md:h-[420px] bg-black">

                <video
                  ref={videoRef}
                  src={video1}
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onEnded={() => {
                    swiperRef.current?.slideNext();

                    setTimeout(() => {
                      swiperRef.current?.autoplay.start();
                    }, 500);
                  }}
                />

              </div>
            </SwiperSlide>

            {/* 🟣 SLIDE 2 */}
            <SwiperSlide>
              <div className="w-full h-[220px] md:h-[420px] relative flex items-center justify-center bg-black">

                {/* FIXED IMAGE */}
                <img
                  src={slide2}
                  alt="Decoration"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute">
                  <div className="bg-black/60 p-4 md:p-5 rounded-xl text-white text-center">
                    <h2 className="text-base md:text-3xl font-bold">
                      Decoration for Every Occasion
                    </h2>

                    <button
                      onClick={() => scrollTo("services")}
                      className="mt-3 md:mt-4 bg-pink-500 px-5 py-2 rounded-full"
                    >
                      Explore
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            {/* ⭐ SLIDE 3 */}
            <SwiperSlide>
              <div className="w-full h-[220px] md:h-[420px] bg-white flex flex-col justify-center items-center px-6">

                {/* LOGO */}
                <img src={logo} alt="logo" className="w-14 md:w-16 mb-3" />

                <h2 className="text-lg md:text-3xl font-bold text-center text-gray-800">
                  Why Choose Us
                </h2>

                <div className="mt-4 md:mt-6 grid grid-cols-2 gap-4 md:gap-6 text-center text-xs md:text-sm">

                  <div>
                    🎨
                    <p className="font-semibold mt-1">Creative Themes</p>
                  </div>

                  <div>
                    💰
                    <p className="font-semibold mt-1">Budget Friendly</p>
                  </div>

                  <div>
                    ⚡
                    <p className="font-semibold mt-1">Fast Setup</p>
                  </div>

                  <div>
                    ⭐
                    <p className="font-semibold mt-1">Trusted Service</p>
                  </div>

                </div>

              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-3 rounded-full"
          >
            Start Planning Your Event
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;