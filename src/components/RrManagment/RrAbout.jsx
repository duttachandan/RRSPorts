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

import Image1 from "../../assets/NewAssets/AboutComplexmain.jpg";
import Image2 from "../../assets/NewAssets/badminton.avif";
import Image3 from "../../assets/NewAssets/Complex.avif";

import CountUpOnScroll from "../../utils/countUpOnScroll";

const RrAbout = () => {
  return (
    <>
      <section className="pt-32 ">
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

      {/* Sport Driving Excellence In Sports */}
      <section className="py-8 pt-40 sports-excellence">
        <div className="max-w-7xl mx-auto px-3">
          <div className="mx-[-15px] flex flex-wrap-reverse items-center">
            <div className="lg:w-1/2 w-full px-[15px]">
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
                      src={Image2}
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
                      src={Image3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-[15px]">
              <div
                className="main-about-img 
              max-w-[400px] mx-auto h-full rounded-lg overflow-hidden"
              >
                <img className="w-full object-cover" src={Image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="max-w-7xl mx-auto px-3">
          <div className="mx-[-15px] flex flex-wrap"></div>
        </div>
      </section>
    </>
  );
};

export default RrAbout;
