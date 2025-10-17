import React from "react";
import {
  FaBuilding,
  FaGlobe,
  FaIndustry,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import testimonial1 from "../assets/Testimonial Sectio/cmpny1.png";
import testimonial2 from "../assets/Testimonial Sectio/cmpny2.png";
import testimonial3 from "../assets/Testimonial Sectio/cmpny3.png";
import testimonial4 from "../assets/Testimonial Sectio/cmpny4.png";
import testimonial6 from "../assets/Testimonial Sectio/cmpny6.png";
import testimonial7 from "../assets/Testimonial Sectio/cmpny7.png";
import testimonial8 from "../assets/Testimonial Sectio/cmpny8.png";
import testimonial9 from "../assets/Testimonial Sectio/cmpny9.png";
import testimonial10 from "../assets/Testimonial Sectio/cmpny10.png";
import testimonial11 from "../assets/Testimonial Sectio/cmpny11.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import CountUpOnScroll from "../utils/countUpOnScroll";

// import

const OurClients = () => {
  // Hardcoded clients data
  const clients = [
    {
      id: 1,
      name: "Young Indians",
      logo: testimonial1,
      description:
        "A vibrant youth organization promoting leadership, sports, and social development through various club activities.",
      testimonial:
        "Our partnership helped them streamline event registrations and manage large-scale tournaments efficiently.",
    },
    {
      id: 2,
      name: "Round Table India",
      logo: testimonial2,
      description:
        "An active community network organizing charity sports events, inter-club tournaments, and youth programs.",
      testimonial:
        "The digital event dashboard simplified participant tracking and boosted engagement during our annual sports meet.",
      rating: 5,
      projects: 8,
      since: "2019",
    },
    {
      id: 3,
      name: "The Padel Club",
      logo: testimonial3,
      description:
        "A premium sports club offering world-class padel and racquet facilities with community-driven leagues.",
      testimonial:
        "The event management tools helped us organize tournaments seamlessly and improved our member experience.",
    },
    {
      id: 4,
      name: "St. Savier's School",
      logo: testimonial4,
      description:
        "A reputed educational institution fostering young talent through sports programs and inter-school competitions.",
      testimonial:
        "Our system made it easy to manage student registrations, score tracking, and inter-house event scheduling.",
    },
    {
      id: 6,
      name: "The Bengal Rowing Club",
      logo: testimonial6,
      description:
        "A heritage club known for its water sports, social events, and fitness programs for members of all ages.",
      testimonial:
        "The club event module improved how we manage membership activities, booking systems, and tournament logistics.",
    },
    {
      id: 7,
      name: "Ace Sportz",
      logo: testimonial7,
      description:
        "A sports development organization specializing in coaching, events, and team management across multiple disciplines.",
      testimonial:
        "With the event dashboard, we could easily coordinate team matches and automate attendance tracking.",
    },
    {
      id: 8,
      name: "Enterprises Club",
      logo: testimonial8,
      description:
        "A corporate recreation club promoting sportsmanship and networking through regular sporting events.",
      testimonial:
        "The customized event scheduling system enhanced our coordination for corporate tournaments.",
    },
    {
      id: 9,
      name: "Hindusthan Club Limited",
      logo: testimonial9,
      description:
        "One of the city’s most prestigious clubs offering extensive facilities for cricket, tennis, and social gatherings.",
      testimonial:
        "Our integrated event tracker helped manage multi-sport tournaments and improved member participation.",
    },
    {
      id: 10,
      name: "MyEo",
      logo: testimonial10,
      description:
        "An exclusive entrepreneurs’ network that also promotes fitness and team-building sports events.",
      testimonial:
        "Their dynamic event portal allowed us to host inter-member competitions effortlessly and track results in real time.",
    },
    {
      id: 11,
      name: "The Saturday Club Limited",
      logo: testimonial11,
      description:
        "A legacy sports and social club with premium event spaces and facilities for members and guests.",
      testimonial:
        "With the new system, managing bookings, tournaments, and event analytics became faster and more organized.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <>
      <main>
        {/* Header */}
        <section className="pt-32">
          <div className="about-banner gallery-banner">
            <div className="max-w-7xl max-auto px-3">
              <div className="text-overlay">
                <div className="text-center mb-12">
                  <div
                    className="inline-flex items-center gap-3 
          bg-gradient-to-r from-blue-600/20 to-cyan-600/20 
          px-6 py-3 rounded-2xl border border-blue-500/30 mb-4"
                  >
                    <FaBuilding className="text-red-400 text-xl" />
                    <span className="text-red-300 font-medium text-lg">
                      Red Riders Management
                    </span>
                  </div>
                  <h1
                    className="text-4xl md:text-5xl font-bold 
          mt-4 primary-text"
                  >
                    Our Valued Clients
                  </h1>
                  <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                    We're proud to collaborate with industry leaders and
                    innovative companies worldwide, delivering exceptional
                    solutions and building lasting relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-8">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <CountUpOnScroll base={0} target={50} />+
                </div>
                <div className="text-gray-400 text-sm">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  <CountUpOnScroll base={0} target={150} />+
                </div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  <CountUpOnScroll base={0} target={100} />%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  <CountUpOnScroll base={0} target={8} />+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Clients Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Our Esteemed Clients
              </h3>
              <p className="text-gray-400 mt-2">
                Trusted by the best clubs and organizations
              </p>
            </div>

            {/* left/right fade masks */}
            <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none" />

            <div className="relative z-10">
              <Splide
                extensions={{ AutoScroll }}
                options={{
                  type: "loop",
                  perPage: 5,
                  gap: "1.5rem",
                  arrows: false,
                  pagination: false,
                  drag: false,
                  focus: "center",
                  autoplay: false, // autoScroll provides continuous motion, so normal autoplay off
                  speed: 4000,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                  autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1, // tweak speed (higher = faster)
                  },
                  breakpoints: {
                    1024: { perPage: 4 },
                    768: { perPage: 3 },
                    480: { perPage: 2 },
                  },
                }}
                aria-label="Client Logos Slider"
              >
                {[
                  testimonial1,
                  testimonial2,
                  testimonial3,
                  testimonial4,
                  testimonial6,
                  testimonial7,
                  testimonial8,
                  testimonial9,
                  testimonial10,
                  testimonial11,
                ].map((logo, idx) => (
                  <SplideSlide key={idx}>
                    <div className="flex justify-center items-center py-6">
                      <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-800 rounded-xl p-3 flex items-center justify-center shadow-lg">
                        <img
                          src={logo}
                          alt={`Client ${idx + 1}`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-3">
          <div className="max-w-7xl mx-auto px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client) => (
                <div
                  key={client.id}
                  data-aos={client.id % 2 === 0 ? "fade-right" : "fade-left"}
                  className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Client Logo & Basic Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-16 h-16 object-contain rounded-lg bg-white/5 p-2 border border-gray-600/50"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
                          {client.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {client.description}
                    </p>

                    {/* Testimonial */}
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <FaQuoteLeft className="text-blue-400/50 text-lg mb-2" />
                      <p className="text-gray-300 text-sm italic line-clamp-3">
                        "{client.testimonial}"
                      </p>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurClients;
