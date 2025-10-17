import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // very important

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

import testimonial3 from "../../assets/Testimonial Sectio/logoT.jpeg";
import testimonial4 from "../../assets/Testimonial Sectio/cmpny4.png";
import testimonial6 from "../../assets/Testimonial Sectio/cmpny6.png";
import logo1 from "../../assets/Testimonial Sectio/logo2.jpeg";
import logo2 from "../../assets/Testimonial Sectio/logo4.jpeg";

import CountUpOnScroll from "../../utils/countUpOnScroll";

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once when scrolled into view
      offset: 100, // offset before triggering animation
    });
  }, []);

  useEffect(() => {
    const loadProject = () => {
      const stored = localStorage.getItem("selectedProject");
      if (stored) {
        setSelectedProject(JSON.parse(stored));
      } else {
        setSelectedProject({
          id: 1,
          projectName: "Red Riders Sports Club",
        });
      }
    };

    loadProject();
    window.addEventListener("projectChanged", loadProject);
    return () => {
      window.removeEventListener("projectChanged", loadProject);
    };
  }, []);

  return (
    <>
      {/* Main Content */}
      <section className="about-banner">
        <div className="max-w-7xl px-3">
          <div data-aos="fade-up" className="text-center text-overlay">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
            >
              About {selectedProject?.projectName || "Red Riders"}
            </h1>
            <p className="text-md text-white max-w-3xl mx-auto">
              Excellence in Sports • Community Development • Professional
              Management
            </p>
            <ul className="breadCrumb">
              <li>
                <Link className="text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-3 text-center">
          <div className="background-gray cursor-pointer rounded-full p-4 w-fit mb-[20px] mx-auto">
            <FaTrophy className="text-4xl icon-bg" />
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold 
              primary-text mb-[30px]"
          >
            Welcome to Red Riders Sports Club
          </h2>
          <p className="text-md text-gray-300 max-w-4xl mx-auto">
            Established in 2010, Red Riders Sports Club has grown from a local
            community initiative to Kolkata's premier sports organization,
            uniting over 5,000 athletes and sports enthusiasts in our vibrant
            sporting family.
          </p>
        </div>
      </section>

      <div className="bg-floating-overlay">
        <div>
          {/* Stats Section */}
          <section>
            <div className="max-w-7xl mx-auto px-3">
              <div
                className="grid grid-cols-2 
                    md:grid-cols-4 gap-6 py-8"
              >
                {[
                  {
                    icon: FaUsers,
                    number: "100",
                    label: "Active Members",
                    fade: "fade-up",
                  },
                  {
                    icon: FaTrophy,
                    number: "10",
                    label: "Tournaments",
                    fade: "fade-down",
                  },
                  {
                    icon: FaCalendarAlt,
                    number: "5",
                    label: "Years of Excellence",
                    fade: "fade-up",
                  },
                  {
                    icon: FaAward,
                    number: "10",
                    label: "Active Sports",
                    fade: "fade-down",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="basic-card p-6 cursor-pointer
                        text-center border border-gray-700"
                    data-aos={stat.fade}
                  >
                    <stat.icon
                      className="text-3xl 
                        icon-bg mx-auto mb-3"
                    />
                    <div className="text-xl lg:text-3xl my-2 font-bold text-white">
                      <CountUpOnScroll
                        base={0}
                        target={stat.number}
                        duration={2}
                      />
                      +
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-8">
            <div className="max-w-7xl px-3 mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div
                  data-aos="flip-down"
                  className="bg-[#3F3F3F] p-8 rounded-xl border-l-4 
                  border[#01f6ff]"
                >
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-400 text-xl mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    To foster a vibrant sports community that promotes physical
                    fitness, mental well-being, and social connections through
                    inclusive, well-organized sporting events and tournaments.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-400 mr-2" /> Promote
                      sports at grassroots level
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-400 mr-2" /> Develop
                      future sporting champions
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-400 mr-2" /> Create
                      inclusive sporting environment
                    </li>
                  </ul>
                </div>

                <div
                  data-aos="flip-up"
                  className="bg-[#3F3F3F] p-8 rounded-xl border-l-4 
                  border-[#01f6ff]"
                >
                  <div className="flex items-center mb-4">
                    <FaLightbulb className="text-orange-400 text-xl mr-3" />
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    To become Eastern India's most respected sports club,
                    recognized for excellence in sports management, athlete
                    development, and community engagement by 2025.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <FaArrowRight className="text-blue-400 mr-2" /> Expand to
                      10,000+ members
                    </li>
                    <li className="flex items-center">
                      <FaArrowRight className="text-blue-400 mr-2" /> Establish
                      national-level tournaments
                    </li>
                    <li className="flex items-center">
                      <FaArrowRight className="text-blue-400 mr-2" /> Develop
                      professional sports infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Core Values */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-3">
          <h3
            className="text-2xl font-bold 
                primary-text text-center mb-[30px]"
          >
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-6">
            {[
              {
                icon: FaShieldAlt,
                title: "Integrity",
                desc: "Maintaining highest ethical standards in all our operations",
              },
              {
                icon: FaUsers,
                title: "Community",
                desc: "Building strong relationships and supporting each other",
              },
              {
                icon: FaTrophy,
                title: "Excellence",
                desc: "Striving for the highest standards in everything we do",
              },
              {
                icon: FaHandshake,
                title: "Teamwork",
                desc: "Collaborating to achieve common goals and success",
              },
              {
                icon: FaChartLine,
                title: "Innovation",
                desc: "Embracing new ideas and technologies in sports",
              },
              {
                icon: FaAward,
                title: "Passion",
                desc: "Fueling our journey with relentless enthusiasm for sports",
              },
            ].map((value, index) => (
              <div
                key={index}
                data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                className="bg-[#3F3F3F] p-6
                    text-center basic-card"
              >
                <value.icon className="text-3xl icon-bg mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
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

export default About;
