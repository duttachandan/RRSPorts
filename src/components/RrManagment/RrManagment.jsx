import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CountUpOnScroll from "../../utils/countUpOnScroll";
import Button from "../Button";

import {
  FaTrophy,
  FaRunning,
  FaVolleyballBall,
  FaTableTennis,
  FaChess,
} from "react-icons/fa";

// Images
import Image4 from "../../assets/newPhoto/tabletennis.webp";
import Image3 from "../../assets/newPhoto/pickleball.jpg";
import Image2 from "../../assets/newPhoto/indoor.jpg";
import Image1 from "../../assets/newPhoto/mssportsarenaboxcricketindoorcricketnets1720855134478.webp";

import Image6 from "../../assets/newPhoto/cricket-equipments-on-green-grass-2025-02-10-12-00-42-utc.jpg";
import Image7 from "../../assets/complexHouse/mng14.jpeg";
import Image8 from "../../assets/complexHouse/mng23.jpeg";
import Image9 from "../../assets/complexHouse/mng24.jpeg";

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
                    <h1
                      data-aos="fade-up"
                      className="text-3xl sm:text-5xl lg:text-6xl 
                    font-extrabold bg-gradient-to-r from-white 
                    via-red-400 to-red-600 bg-clip-text 
                    text-transparent mb-4 uppercase"
                    >
                      Sports Management
                    </h1>
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

      {/* Sport Driving Excellence In Sports */}
      <section className="sports-excellence py-24">
        <div className="max-w-7xl mx-auto px-3">
          <div className="mx-[-15px] flex flex-wrap-reverse items-center">
            <div data-aos="fade-left" className="lg:w-1/2 w-full px-[15px]">
              <h2
                className="text-2xl uppercase sm:text-3xl
                font-extrabold bg-gradient-to-r from-white 
                via-red-400 to-red-600 bg-clip-text 
                text-transparent mb-4 max-w-[613px]"
              >
                SPORT - driving excellence in sports with innovation, passion
                and unmatched dedication.
              </h2>
              <p className="text-white mb-5">
                At RED RIDER SPORTS COMPLEX, we believe that excellence isn’t
                just achieved — it’s built through innovation, passion, and
                relentless dedication. Our mission is to push the boundaries of
                performance, empower athletes, and redefine what’s possible in
                the world of sports. Every step we take is driven by the pursuit
                of greatness — inspiring the champions of today and tomorrow.
              </p>
              <div className="mx-[-5px] flex flex-wrap ">
                <div className="w-1/2 px-[5px]">
                  <div
                    className="about-img w-full h-[150px] 
                        rounded overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Image8}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 px-[5px]">
                  <div
                    className="about-img w-full h-[150px] 
                        rounded overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Image9}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="lg:w-1/2 w-full mb-6 lg:mb-0 px-[15px]"
            >
              <div
                className="main-about-img 
                max-w-[400px] mx-auto lg:ml-auto lg:mr-0 h-full 
                rounded-lg overflow-hidden"
              >
                <img className="w-full object-cover" src={Image7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="About-us-sec py-24 text-white relative">
        <div
          className="absolute z-[0] w-[50%] h-[50%] left-20 
        top-[-20px] blue__gradient"
        ></div>
        <div className="text-overlay">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex flex-row-reverse flex-wrap mx-[-15px] items-center">
              {/* Content Section */}
              <div
                data-aos="fade-right"
                className="w-full text-end mb-8 md:mb-0 md:w-1/2 px-[15px]"
              >
                <div className="subtitle ml-auto">Why Choose Red Riders</div>
                <h2
                  className="title2 text-3xl mb-3 font-extrabold bg-gradient-to-r from-white 
                    via-red-400 to-red-600 bg-clip-text 
                    text-transparent"
                >
                  Building Experiences Beyond the Game
                </h2>
                <p className="mb-4">
                  At Red Riders, we believe sports are more than just
                  competition — they’re about community, teamwork, and
                  unforgettable memories. With our passion, precision, and
                  hands-on approach, we create experiences that leave a lasting
                  impact on players, organizers, and audiences alike.
                </p>
              </div>
              {/* Image Section */}
              <div data-aos="fade-left" className="w-full md:w-1/2 px-[15px]">
                <div
                  className="mx-auto w-full
                  sm:max-w-[400px] rounded-3xl mb-8 md:mb-0
                  overflow-hidden relative"
                >
                  <img
                    className="w-full object-bottom object-cover h-full"
                    src={Image6}
                    alt="Top View of Badminton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Disciplines */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-3">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold primary-text">
                Sports Disciplines
              </h3>
              <p className="text-gray-400">
                Comprehensive sporting opportunities for all enthusiasts
              </p>
            </div>

            <div className="flex flex-wrap mx-[-15px]  justify-center">
              {[
                {
                  icon: FaTrophy,
                  name: "Cricket",
                  color: "text-yellow-400",
                },
                {
                  icon: FaRunning,
                  name: "Pickleball",
                  color: "text-green-400",
                },
                {
                  icon: FaTableTennis,
                  name: "Table Tennis",
                  color: "text-red-400",
                },
                {
                  icon: FaChess,
                  name: "Chess",
                  color: "text-purple-400",
                },
                {
                  icon: FaTrophy,
                  name: "Badminton",
                  color: "text-indigo-400",
                },
              ].map((sport, index) => (
                <div className="px-[15px] w-1/2 sm:w-1/3 md:w-1/5">
                  <div
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    key={index}
                    className="background-gray mb-4 p-4 rounded-xl text-center
                          hover:transform hover:scale-110 transition-all duration-300 group"
                  >
                    <sport.icon
                      className={`text-3xl ${sport.color} mx-auto mb-3 group-hover:text-white transition-colors`}
                    />
                    <h4 className="text-white text-sm">{sport.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RrManagment;
