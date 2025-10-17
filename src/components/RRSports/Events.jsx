import React, { useEffect, useState } from "react";
// import { FaCalendar, FaClock, FaMapMarkerAlt, FaExpand } from "react-icons/fa";
import { getEventsByProject } from "../../api/eventsService";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Image

import mng1 from "../../assets/complexHouse/mng1.jpeg";
import mng2 from "../../assets/complexHouse/mng2.jpeg";
import mng3 from "../../assets/complexHouse/mng3.jpeg";
import mng4 from "../../assets/complexHouse/mng4.jpeg";
import mng5 from "../../assets/complexHouse/mng5.jpeg";
import mng6 from "../../assets/complexHouse/mng6.jpeg";
import mng7 from "../../assets/complexHouse/mng7.jpeg";
import mng8 from "../../assets/complexHouse/mng8.jpeg";
import mng9 from "../../assets/complexHouse/mng9.jpeg";
import mng10 from "../../assets/complexHouse/mng10.jpeg";
import mng11 from "../../assets/complexHouse/mng11.jpeg";
import mng12 from "../../assets/complexHouse/mng12.jpeg";
import mng13 from "../../assets/complexHouse/mng13.jpeg";
import mng14 from "../../assets/complexHouse/mng14.jpeg";
import mng15 from "../../assets/complexHouse/mng15.jpeg";
import mng16 from "../../assets/complexHouse/mng16.jpeg";
import mng17 from "../../assets/complexHouse/mng17.jpeg";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project name & events
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const project = localStorage.getItem("selectedProject");
        // if (!project) {
        //   setError("No project selected");
        //   setLoading(false);
        //   return;
        // }

        // const projectData = JSON.parse(project);
        // setProjectName(
        //   projectData.name || projectData.projectName || "Our Project"
        // );

        // const projectId = projectData.id;
        // const eventsData = await getEventsByProject(projectId);

        // Convert byte[] image data (Base64) to proper image src

        // const formattedEvents = eventsData.map((ev) => ({
        //   ...ev,
        //   image: ev.image
        //     ? `data:image/jpeg;base64,${ev.image}`
        //     : "https://via.placeholder.com/400x250?text=No+Image",
        //   time:
        //     ev.startTime && ev.endTime
        //       ? `${ev.startTime} - ${ev.endTime}`
        //       : ev.startTime || ev.endTime || "—",
        // }));

        const mockEvents = [
          {
            id: 1,
            name: "Red riders ipl 10.0 auction",
            description:
              "An exciting auction about Red Riders IPL.",
            location: "Kolkata",
            status: "Upcoming",
            images: [
              mng1,
              mng2,
              mng3,
              mng4,
              mng5,
              mng6,
              mng7,
              mng8,
              mng9,
              mng10,
              mng11,
              mng12,
              mng13,
              mng14,
              mng15,
              mng16,
              mng17,
            ],
          },
        ];

        setEvents(mockEvents);

        // setEvents(formattedEvents);
      } catch (err) {
        setError(err.message || "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderEventCard = (event) => (
    <div key={event.id} className="bg-gray-900 relative 
    shadow-lg mb-16">
      <div className="rounded-lg overflow-hidden">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 3000,
            pagination: false,
            arrows: false,
          }}
        >
          {event.images.map((img, index) => (
            <SplideSlide key={index}>
              <img
                src={img}
                alt={`Event ${event.name} Slide ${index + 1}`}
                className="w-full h-[20rem] object-cover"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div
        className="p-5 absolute 
      top-[100%] w-[95%] z-20 left-[50%] border border-gray-600
      translate-x-[-50%] translate-y-[-50%] bg-all rounded-xl"
      >
        <h4 className="text-xl font-semibold text-white mb-2">{event.name}</h4>
        <p className="text-gray-400 text-sm mb-2">{event.description}</p>
        {/* <p className="text-gray-500 text-sm italic">{event.location}</p> */}
      </div>
    </div>
  );

  // const upcomingEvents = events.filter((e) => e.status === "Upcoming");
  // const doneEvents = events.filter((e) => e.status === "Done");

  // Skeleton Loader
  const EventSkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-700/50">
            <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-700 rounded-lg mb-3 animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded-lg mb-2 animate-pulse w-1/2"></div>
              <div className="flex gap-4 mt-4">
                <div className="h-4 bg-gray-700 rounded-lg animate-pulse w-1/3"></div>
                <div className="h-4 bg-gray-700 rounded-lg animate-pulse w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <section className="py-3 about-banner">
        <div className="max-w-7xl mx-auto px-3 text-center">
          <div className="text-overlay" data-aos="fade-up">
            {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-2xl border border-purple-500/30 mb-4">
              <FaCalendar className="text-purple-400 text-xl" />
              <span className="text-purple-300 font-medium text-lg">
                {projectName || "Our Events"}
              </span>
            </div> */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
            >
              Events
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Discover our latest events, conferences, and gatherings. Join us
              in shaping the future together.
            </p>
            <ul className="breadCrumb">
              <li>
                <Link className="text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>Events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.length > 0 ? (
              events.map(renderEventCard)
            ) : (
              <p className="text-gray-400">No past events.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
