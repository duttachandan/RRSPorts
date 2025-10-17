import React from "react";

import {
  FaTrophy,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaMapMarkerAlt,
  FaStar,
  FaAward,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaCog,
  FaUserTie,
  FaClipboardList,
  FaMoneyBillWave,
  FaBuilding,
  FaSwimmer,
  FaRunning,
  FaBasketballBall,
  FaVolleyballBall,
  FaTableTennis,
  FaChess,
  FaDumbbell,
  FaUtensils,
  FaParking,
  FaWifi,
  FaFirstAid,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../Button";

// import Image5 from "../../assets/NewAssets/topBadminton.jpg";
import testimonial3 from "../../assets/Testimonial Sectio/logoT.jpeg";
import testimonial4 from "../../assets/Testimonial Sectio/cmpny4.png";
import testimonial6 from "../../assets/Testimonial Sectio/cmpny6.png";
import logo1 from "../../assets/Testimonial Sectio/logo2.jpeg";
import logo2 from "../../assets/Testimonial Sectio/logo4.jpeg";
import Image5 from "../../assets/complexHouse/mng27.jpeg";

import CountUpOnScroll from "../../utils/countUpOnScroll";

const RrAbout = () => {
  return (
    <>
      <section className="pt-32">
        <div className="about-banner mng-about-banner relative">
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-overlay">
              <div className="text-center space-y-6">
                <h2
                  className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
                >
                  Red Riders Sports Management
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Professional sports management solutions that transform
                  organizations through strategic planning, operational
                  excellence, and data-driven performance optimization.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap mx-[-15px]
            sm:absolute static left-0 top-0 
            sm:left-[51%] sm:top-[100%] 
            about-card-transform mt-5 w-[100%] sm:w-[80%]
            bottom-[-200px] z-[99] px-3"
          >
            {[
              {
                icon: FaClipboardList,
                number: "50",
                param: "+",
                label: "Sports Events",
              },
              {
                icon: FaUsers,
                number: "500",
                param: "+",
                label: "Live Streaming",
              },
              {
                icon: FaMoneyBillWave,
                number: "1500",
                param: "+",
                label: "Player Played",
              },
              {
                icon: FaAward,
                number: "99.9",
                param: "%",
                label: "Client Satisfaction",
              },
            ].map((stat, index) => (
              <div key={index} className="px-[15px] w-[50%] sm:w-[25%]">
                {/* <stat.icon className="text-3xl text-blue-400 mx-auto mb-3" /> */}
                <div
                  className="max-w-full 
                  mx-auto text-center border h-[130px] mb-3 sm:mb-0
                  basic-card p-6 cursor-pointer border-gray-700"
                >
                  <div className="text-lg md:text-2xl font-bold text-white">
                    <CountUpOnScroll base={0} target={stat.number} />
                    <span>{stat.param}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="About-us-sec managment-about
      py-8 pt-40  text-white relative"
      >
        <div
          className="absolute z-[0] w-[50%] h-[50%] left-20 
        top-[-20px] blue__gradient"
        ></div>
        <div className="text-overlay">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex flex-wrap mx-[-15px] items-center">
              {/* Content Section */}
              <div
                data-aos="fade-right"
                className="w-full mb-8 md:mb-0 md:w-1/2 px-[15px]"
              >
                <div className="subtitle">Who We Are</div>
                <h2
                  className="title2 text-3xl mb-3 font-extrabold bg-gradient-to-r from-white 
                    via-red-400 to-red-600 bg-clip-text 
                    text-transparent"
                >
                  Your End-to-End Sports Event Partner
                </h2>
                <p className="mb-4">
                  Founded in the vibrant city of Kolkata, Red Riders Sports
                  Management is your trusted partner in delivering high-impact
                  sporting events. We specialize in managing the full lifecycle
                  of sports tournaments—from concept to execution—ensuring every
                  detail is handled with expertise. Our team blends creativity,
                  structure, and precision to bring unforgettable sports
                  experiences to life.
                </p>
              </div>
              {/* Image Section */}
              <div data-aos="fade-left" className="w-full md:w-1/2 px-[15px]">
                <div
                  className="who-we-are ml-auto h-[500px] w-full
              md:max-w-[400px] rounded-3xl overflow-hidden relative"
                >
                  <div
                    className="p-0 absolute bottom-0 left-[-10px] 
                bg-all text-center px-[5px] pb-[10px] w-[130px]"
                  >
                    <span className="text-3xl font-bold">
                      <CountUpOnScroll base={0} target={15} />
                    </span>
                    +
                    <br />
                    <span>Sports</span>
                  </div>
                  <div
                    className="p-4 absolute bottom-[70px] left-[-10px] 
                bg-all rounded-2xl text-center"
                  >
                    <span className="text-3xl font-bold">
                      <CountUpOnScroll base={0} target={50} />
                    </span>
                    +
                    <br />
                    <span>Sports Event</span>
                  </div>
                  <img
                    className="w-full object-cover h-full"
                    src={Image5}
                    alt="Top View of Badminton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline / Testimonial Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              MILESTONES
            </h3>
            <p className="text-gray-400 mt-2">
              A journey of excellence through our flagship tournaments
            </p>
          </div>

          {/* Timeline Container */}
          <div
            className="relative flex flex-col md:flex-row items-center 
          md:justify-between gap-10 md:gap-0"
          >
            {/* Line behind icons */}
            <div
              className="hidden md:block absolute top-[70px] 
            left-0 w-full h-[2px] bg-gray-600 z-0"
            ></div>

            {[
              {
                img: testimonial4,
                title: "AALSOC CRICKET LEAGUE",
                desc: "Our first Cricket tournament with 100 players. The complete auction and games were conducted with excellence.",
              },
              {
                img: logo1,
                title: "ACE PREMIER LEAGUE",
                desc: "Pickleball tournament with over 120 players managed across 4 courts over 2 days.",
              },
              {
                img: testimonial3,
                title: "RIDERS CUP 2025",
                desc: "Premier inter-club cricket tournament featuring Kolkata’s elite clubs with live streaming and DRS options.",
              },
              {
                img: logo2,
                title: "SATURDAY CLUB CARNIVAL 2025",
                desc: "One of the most prestigious club tournaments of the city with live scoring and streaming for all sports.",
              },
              {
                img: testimonial6,
                title: "HINDUSTHAN CLUB CARNIVAL 2025",
                desc: "Featuring 15 different sports and 800+ players, one of the biggest inter-club tournaments in the city.",
              },
            ].map((event, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                className="flex flex-col items-center text-center relative z-10 md:w-[18%] w-full"
              >
                {/* Hexagon Image */}
                <div
                  className="relative w-[120px] h-[120px]
                 md:w-[140px] md:h-[140px] flex items-center 
                 justify-center bg-gray-700 clip-hexagon border-4 border-blue-800 shadow-lg"
                >
                  <img
                    src={event.img}
                    alt={event.title}
                    className="object-contain w-[90%] h-[90%] clip-hexagon-inner"
                  />
                </div>

                {/* Text */}
                <div className="mt-6 max-w-xs">
                  <h4 className="text-lg font-bold text-white">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">{event.desc}</p>
                </div>
              </div>
            ))}
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
    </>
  );
};

export default RrAbout;
