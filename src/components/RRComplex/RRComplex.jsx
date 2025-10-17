import React, { useEffect } from "react";
import ComplexNavbar from "./ComplexNavbar";
import Footer from "../../containers/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Video from "../../assets/complexImage/backgroundVideo.mp4";
import Image from "../../assets/complexImage/basketball2.jpeg";
import Image1 from "../../assets/complexImage/billiboard.jpeg";
import Image2 from "../../assets/complexImage/dinningroom.jpeg";
import Image3 from "../../assets/complexImage/sittingarea.jpeg";
import Image4 from "../../assets/complexImage/basketball.jpeg";

const RRComplex = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
      autoFocus: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const AnimatedText = ({ text }) => {
    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

    return (
      <h2 className="text-4xl text-white justify-center items-center font-bold flex flex-wrap">
        {text.split("").map((char, index) => (
          <span
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50} // ⏱ delay increases per letter
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    );
  };

  return (
    <div className="bg-all relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0">
        <ComplexNavbar />
      </div>

      {/* Banner Section */}
      <main>
        <section
          className="complex-banner-section 
        about-banner relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="banner-wrpr text-overlay text-center pt-32 pb-10">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-5xl lg:text-6xl 
                font-extrabold bg-gradient-to-r from-white 
                via-red-400 to-red-600 bg-clip-text 
                text-transparent mb-6"
              >
                Red Riders Sports Complex
              </h1>

              <p
                data-aos="fade-up"
                className="text-white max-w-[636px] mx-auto mb-4"
              >
                Welcome to Red Riders Sports Complex — where passion meets
                performance! Experience world-class facilities, advanced
                training programs, and an energetic atmosphere built to inspire
                athletes of every level.
                <br />
                <b className="text-xl mt-3 inline-block">
                  {" "}
                  Train harder. Play smarter. Rise higher.
                </b>
              </p>

              {/* Video Play Button */}
              <div data-aos="flip-left" className="flex justify-center">
                <a
                  data-fancybox="video"
                  href={Video}
                  className="border border-white p-1 rounded-full"
                >
                  <span
                    className="group relative inline-flex 
                    items-center justify-center w-20 h-20
                  rounded-full bg-red-600 hover:bg-red-700 
                  transition-all duration-300 shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-10 h-10 group-hover:scale-110 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex flex-wrap mx-[-15px] justify-center">
              <div
                data-aos="fade-up"
                className="w-full px-[15px] sm:w-1/2 lg:w-1/3 mt-5"
              >
                <div className="w-full h-[350px]">
                  <img
                    src={Image}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="w-full px-[15px] sm:w-1/2 lg:w-1/3 mt-5"
              >
                <div className="w-full h-[350px]">
                  <img
                    src={Image3}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="w-full px-[15px] sm:w-1/2 lg:w-1/3 mt-5"
              >
                <div className="w-full h-[350px]">
                  <img
                    src={Image4}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="w-full px-[15px] sm:w-1/2 lg:w-1/3 mt-32"
              >
                <div className="w-full h-[350px]">
                  <img
                    src={Image1}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="w-full px-[15px] sm:w-1/2 lg:w-1/3 mt-32"
              >
                <div className="w-full h-[350px]">
                  <img
                    src={Image2}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 sports-excellence">
          <div className="max-w-7xl mx-auto px-3">
            <div className=" min-h-screen flex justify-center items-center ">
              <AnimatedText text="Your Very Own Red Riders Complex Is Coming Soon..." />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RRComplex;
