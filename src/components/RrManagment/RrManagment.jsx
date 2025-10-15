import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Images
import Image1 from "../../assets/NewAssets/AboutBg2.jpg";
import Image2 from "../../assets/NewAssets/sports-center.jpg";
import Image3 from "../../assets/NewAssets/tenis-court.jpg";
import Image4 from "../../assets/NewAssets/tenis-grass.jpg";
import Image5 from "../../assets/NewAssets/topBadminton.jpg"

const RrManagment = () => {
  return (
    <main>
      <section className="mng-banner-section">
        <Splide
          aria-label="Banner"
          options={{
            type: "fade",
            rewind: true, // ensures looping effect
            speed: 2000, // smooth fade duration (2 seconds)
            interval: 4000, // each slide stays visible for 5 seconds
            autoplay: true,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
          }}
        >
          {[Image1, Image2, Image3, Image4].map((img, index) => (
            <SplideSlide key={index}>
              <div
                className="banner-img"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="banner-overlay">
                  <div className="banner-content">
                    <h1 data-aos="fade-up"
                      className="text-3xl sm:text-5xl lg:text-6xl 
                    font-extrabold bg-gradient-to-r from-white 
                    via-red-400 to-red-600 bg-clip-text 
                    text-transparent  mb-4">Sports Management</h1>
                    <p data-aos="fade-up">
                      Empowering your sports journey with world-class facilities
                      and organized recreation.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
      <section className="About-us-sec py-5 text-white">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex flex-wrap mx-[-15px] items-center">
            {/* Content Section */}
            <div className="w-full md:w-1/2 px-[15px]">
              <div className="subtitle">
                Who We Are
              </div>
              <h2 className="title2 text-3xl mb-3">
                Your End-to-End Sports Event Partner
              </h2>
              <p>Founded in the vibrant city of Kolkata,
                Red Riders Sports Management is your trusted
                partner in delivering high-impact sporting events.
                We specialize in managing the full lifecycle of sports
                tournaments—from concept to execution—ensuring every detail
                is handled with expertise. Our team blends creativity, structure,
                and precision to bring unforgettable sports experiences to life.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 px-[15px]">
              <div className="who-we-are mx-auto max-w-[400px]">
                <img className="w-full object-cover h-full" src={Image5} alt="Top View of Badminton" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RrManagment;
