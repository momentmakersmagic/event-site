import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

import heroBg from "../assets/hero_background.jpeg";
import slide2 from "../assets/hero_slide2_background.png";
import video1 from "../assets/hero_slide1_video.mp4";
import logo from "../assets/logo.jpeg";

function Hero() {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  const [videoFinished, setVideoFinished] = useState(false);

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
      <div className="relative z-10 w-full max-w-5xl text-center mt-6 px-4">

        {/* BRAND TEXT */}
        <div className="inline-block bg-yellow-500/20 backdrop-blur-md px-4 py-1 rounded-md border border-yellow-400/30">
          <span className="text-yellow-300 text-xs md:text-base font-medium">
            Bangalore’s Premium Event Designers
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-white text-xl md:text-5xl font-bold mt-3">
          We Make Every Event <br />
          <span className="text-pink-400">Unforgettable & Magical ✨</span>
        </h1>

        <p className="text-gray-300 mt-2 text-sm md:text-lg max-w-xl mx-auto">
          From birthdays to grand celebrations — we design unforgettable experiences.
        </p>

        {/* SLIDER */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-2xl">

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
            autoplay={false} // 🔥 IMPORTANT
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >

            {/* 🎥 SLIDE 1 */}
            <SwiperSlide>
              <div className="h-72 md:h-[420px] w-full bg-black">

                <video
                  ref={videoRef}
                  src={video1}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onEnded={() => {
                    setVideoFinished(true);

                    // 🔥 MOVE NEXT
                    swiperRef.current.slideNext();

                    // 🔥 START AUTOPLAY AFTER VIDEO
                    setTimeout(() => {
                      swiperRef.current.autoplay.start();
                    }, 500);
                  }}
                />

              </div>
            </SwiperSlide>

            {/* 🟣 SLIDE 2 */}
            <SwiperSlide>
              <div className="h-72 md:h-[420px] relative flex items-center justify-center bg-black">

                {/* ✅ PERFECT IMAGE FIT */}
                <img
                  src={slide2}
                  className="w-full h-full object-contain"
                />

                <div className="absolute">
                  <div className="bg-black/60 p-5 rounded-xl text-white text-center">
                    <h2 className="text-lg md:text-3xl font-bold">
                      Decoration for Every Occasion
                    </h2>

                    <button
                      onClick={() => scrollTo("services")}
                      className="mt-4 bg-pink-500 px-6 py-2 rounded-full"
                    >
                      Explore
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            {/* ⭐ SLIDE 3 */}
            <SwiperSlide>
              <div className="h-72 md:h-[420px] bg-white flex flex-col justify-center items-center px-6">

                {/* LOGO */}
                <img src={logo} className="w-16 mb-3" />

                <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800">
                  Why Choose Us
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">

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
            className="bg-pink-500 text-white px-8 py-3 rounded-full"
          >
            Start Planning Your Event
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;