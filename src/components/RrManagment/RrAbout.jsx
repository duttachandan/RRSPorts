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

import Image5 from "../../assets/NewAssets/topBadminton.jpg";

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
                number: "500",
                param: "+",
                label: "Events Managed",
              },
              {
                icon: FaUsers,
                number: "10",
                param: "+",
                label: "Athletes Managed",
              },
              {
                icon: FaMoneyBillWave,
                number: "50",
                param: "Cr",
                label: "Revenue Generated",
              },
              {
                icon: FaAward,
                number: "95",
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

      <section className="About-us-sec managment-about
      py-8 pt-40  text-white relative">
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
                <Button />
              </div>
              {/* Image Section */}
              <div data-aos="fade-left" className="w-full md:w-1/2 px-[15px]">
                <div
                  className="who-we-are ml-auto h-[500px] w-full
              md:max-w-[400px] rounded-3xl overflow-hidden relative"
                >
                  <div
                    className="p-4 absolute bottom-[-10px] left-[-34px] 
                bg-all text-center"
                  >
                    <span className="text-3xl font-bold">
                      <CountUpOnScroll base={0} target={100} />
                    </span>
                    +
                    <br />
                    <span>Active Members</span>
                  </div>
                  <div
                    className="p-4 absolute bottom-[70px] left-[-10px] 
                bg-all rounded-2xl text-center"
                  >
                    <span className="text-3xl font-bold">
                      <CountUpOnScroll base={0} target={12} />
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

      {/* Premier Tournaments - Enhanced */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-3">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold primary-text">
                Premier Tournaments & Leagues
              </h3>
              <p className="text-gray-400 mt-2">
                Professional tournaments that define sporting excellence
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#4B4D4E] to-transparent p-4 md:p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div>
                    <h4 className="text-2xl text-white flex items-center">
                      <div className="background-gray rounded-full p-3 mr-4">
                        <FaTrophy className="text-2xl text-gray-900 icon-bg" />
                      </div>
                      Red Riders Indoor Premiere League (RRIPL)
                    </h4>
                    <p className="text-white mt-3">
                      India's Premier Indoor Cricket Championship
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      The Red Riders Indoor Premiere League stands as the crown
                      jewel of our sporting calendar. With 10 successful seasons
                      completed, RRIPL has revolutionized indoor cricket in
                      Eastern India through its professional organization,
                      thrilling matches, and unparalleled player experience.
                    </p>

                    <div className="space-y-3 mb-6">
                      <h5 className="font-semibold text-white text-lg">
                        Key Features:
                      </h5>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center cursor-pointer change-icon">
                          <span className="icon-bg">
                            <FaCheckCircle className=" mr-2" />
                          </span>{" "}
                          Professional live scoring system
                        </li>
                        <li className="flex items-center cursor-pointer change-icon">
                          <span className="icon-bg">
                            <FaCheckCircle className=" mr-2" />
                          </span>{" "}
                          HD streaming and commentary
                        </li>
                        <li className="flex items-center cursor-pointer change-icon">
                          <span className="icon-bg">
                            <FaCheckCircle className=" mr-2" />
                          </span>{" "}
                          Cash prizes worth ₹5,00,000
                        </li>
                        <li className="flex items-center cursor-pointer change-icon">
                          <span className="icon-bg">
                            <FaCheckCircle className=" mr-2" />
                          </span>{" "}
                          Professional umpiring panel
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#4B4D4E] p-6 rounded-xl mb-4">
                      <h5 className="text-white mb-3">Season 11 Highlights</h5>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold icon-bg hover:text-white">
                            <CountUpOnScroll base={0} target={16} />+
                          </div>
                          <div className="text-gray-400 text-sm">Teams</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold icon-bg hover:text-white">
                            <CountUpOnScroll base={0} target={45} />+
                          </div>
                          <div className="text-gray-400 text-sm">Matches</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold icon-bg hover:text-white">
                            <CountUpOnScroll base={0} target={240} />+
                          </div>
                          <div className="text-gray-400 text-sm">Players</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold icon-bg hover:text-white">
                            ₹<CountUpOnScroll base={0} target={5} />L
                          </div>
                          <div className="text-gray-400 text-sm">
                            Prize Pool
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "10 Seasons Completed",
                    "Live Streaming",
                    "Professional Umpires",
                    "Player Awards",
                    "Sponsorship Partners",
                    "Media Coverage",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="icon-bg season-btn cursor-pointer px-4 py-2 rounded-full text-sm font-medium text-gray-900 flex items-center"
                    >
                      <FaStar className="mr-2" /> {tag}
                    </span>
                  ))}
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

            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
                {
                  icon: FaVolleyballBall,
                  name: "Football",
                  color: "text-green-500",
                },
              ].map((sport, index) => (
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  key={index}
                  className="background-gray p-4 rounded-xl text-center hover:transform hover:scale-110 transition-all duration-300 group"
                >
                  <sport.icon
                    className={`text-3xl ${sport.color} mx-auto mb-3 group-hover:text-white transition-colors`}
                  />
                  <h4 className="text-white text-sm">{sport.name}</h4>
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
