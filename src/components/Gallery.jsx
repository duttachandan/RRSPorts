import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaImage,
} from "react-icons/fa";

import mng1 from "../assets/complexHouse/mng19.jpeg";
import mng2 from "../assets/complexHouse/mng20.jpeg";
import mng3 from "../assets/complexHouse/mng21.jpeg";
import mng4 from "../assets/complexHouse/mng22.jpeg";
import mng5 from "../assets/complexHouse/mng23.jpeg";
import mng6 from "../assets/complexHouse/mng24.jpeg";
import mng7 from "../assets/complexHouse/mng25.jpeg";
import mng8 from "../assets/complexHouse/mng26.jpeg";
import mng9 from "../assets/complexHouse/mng27.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // Hardcoded gallery data
  const galleryItems = [
    // ----------- EVENTS -----------
    {
      id: 1,
      image: mng1,
      title: "Auction Day Setup",
      category: "events",
      description:
        "The venue being prepared for the Red Riders auction event with banners, screens, and team booths.",
      date: "2024-01-10",
    },
    {
      id: 2,
      image: mng2,
      title: "Live Auction Stage",
      category: "events",
      description:
        "Main auction stage ready with LED display showing live bidding updates and player stats.",
      date: "2024-01-12",
    },
    {
      id: 3,
      image: mng3,
      title: "Bidding Session",
      category: "events",
      description:
        "Franchise owners and coaches actively bidding for top-performing players during the live session.",
      date: "2024-01-12",
    },
    {
      id: 4,
      image: mng4,
      title: "Player Announcement",
      category: "events",
      description:
        "Auctioneer announcing player sales as excitement builds across the hall.",
      date: "2024-01-13",
    },
    {
      id: 5,
      image: mng5,
      title: "Bid Tracking Screen",
      category: "events",
      description:
        "Real-time bidding dashboard displaying current bids and team allocations.",
      date: "2024-01-13",
    },
    {
      id: 6,
      image: mng6,
      title: "Post-Auction Celebration",
      category: "events",
      description:
        "Red Riders management celebrating the successful completion of the auction event.",
      date: "2024-01-14",
    },

    // ----------- TEAMS -----------
    {
      id: 7,
      image: mng7,
      title: "Team Formation",
      category: "teams",
      description:
        "Franchise representatives finalizing player selections and forming their teams.",
      date: "2024-01-14",
    },
    {
      id: 8,
      image: mng8,
      title: "Team Strategy Discussion",
      category: "team",
      description:
        "Coaches and owners planning match strategies after the auction results.",
      date: "2024-01-15",
    },
    {
      id: 9,
      image: mng9,
      title: "Team Announcement Board",
      category: "team",
      description:
        "Final player rosters displayed after the conclusion of the Red Riders auction.",
      date: "2024-01-15",
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", count: galleryItems.length },
    {
      id: "team",
      name: "Team",
      count: galleryItems.filter((item) => item.category === "team").length,
    },
    {
      id: "events",
      name: "Events",
      count: galleryItems.filter((item) => item.category === "events").length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openImage = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32">
        <div className="about-banner relative gallery-banner">
          <div className="max-w-7xl mx-auto px-3">
            <div className="text-center text-overlay mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-cyan-600/20 px-6 py-3 rounded-2xl border border-green-500/30 mb-4">
                <FaImage className="text-green-400 text-xl" />
                <span className="text-green-300 font-medium text-lg">
                  Visual Journey
                </span>
              </div>
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
              >
                Red Riders Gallery
              </h1>
              <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                Explore our journey through moments of innovation,
                collaboration, and success. Each image tells a story of our
                growth and achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Filter Tabs */}
      <div className="max-w-4xl my-8 mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? "bg-green-600/20 text-green-300 border-green-500/50 shadow-lg shadow-green-500/10"
                  : "bg-gray-800/50 text-gray-400 border-gray-600/50 hover:border-green-500/30 hover:text-green-200"
              }`}
            >
              <FaFilter className="text-xs" />
              {category.name}
              <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => openImage(item, index)}
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                    <FaExpand className="text-white text-sm" />
                  </div>
                </div>

                <div
                  className="absolute bottom-[-100%] left-0 right-0 
                  p-4 py-6 flex justify-end flex-col
                  transform translate-y-4 group-hover:bottom-0
                  transition-transform duration-300"
                >
                  <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {formatDate(item.date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="max-w-2xl mx-auto text-center mt-12">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
            <FaImage className="text-gray-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              No Images Found
            </h3>
            <p className="text-gray-400">
              No gallery items match the selected filter. Try choosing a
              different category.
            </p>
          </div>
        </div>
      )}
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:left-8"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:right-8"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm lg:top-8 lg:right-8"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Image and Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category.charAt(0).toUpperCase() +
                      selectedImage.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {formatDate(selectedImage.date)}
                  </p>
                </div>

                <p className="text-gray-300 text-lg mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    Image {currentIndex + 1} of {filteredItems.length}
                  </span>
                  <button
                    onClick={() => window.open(selectedImage.image, "_blank")}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <FaExpand className="text-sm" />
                    View Full Size
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
