import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "../containers/Footer";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaWifi,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LiveStream = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef(null);
  const iframeContainerRef = useRef(null);

  const streamData = {
    title: "Red Riders vs Kolkata Knights - Live Match",
    description: "Premier League Cricket Match - Semi Finals",
    streamUrl: "https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1",
  };

  // Load YouTube API script
  useEffect(() => {
    const existingScript = document.getElementById("youtube-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // YouTube API Ready callback
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onReady: () => {
            playerRef.current.playVideo();
          },
        },
      });
    };
  }, []);

  const handlePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const iframe = document.getElementById("yt-player");
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  const pastVideos = [
    {
      id: 1,
      title: "Red Riders vs Thunder Kings",
      url: "https://www.youtube.com/embed/Sagg08DrO5U",
    },
    {
      id: 2,
      title: "Training Highlights – March",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: 3,
      title: "Friendly Match Recap",
      url: "https://www.youtube.com/embed/LXb3EKWsInQ",
    },
    {
      id: 4,
      title: "Fitness Camp 2024",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
      id: 5,
      title: "Coach’s Talk – Motivation",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <>
      <section className="py-3 about-banner">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-12 text-overlay">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-800/20 px-6 py-3 rounded-2xl border border-red-500/30 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-300 font-medium text-lg">
                  LIVE NOW
                </span>
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl
             font-bold mt-4 bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent "
            >
              Live Stream
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Watch live matches, training sessions, and exclusive club events
              in real-time
            </p>
            <ul className="breadCrumb">
              <li>
                <Link className="text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>Live Stream</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Player */}
            <div className="lg:col-span-3">
              <div className="relative bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <div className="p-6 border-b border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl text-white">{streamData.title}</h2>
                    <p className="text-gray-400">{streamData.description}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-red-600/20 px-3 py-2 rounded-lg border border-red-500/30">
                    <FaWifi className="text-red-400" />
                    <span className="text-red-300 font-medium">LIVE</span>
                  </div>
                </div>

                {/* Video */}
                <div
                  className="relative aspect-video bg-black"
                  ref={iframeContainerRef}
                >
                  <iframe
                    id="yt-player"
                    src={streamData.streamUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Red Riders Live Stream"
                  ></iframe>

                  {/* Controls */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePlayPause}
                        className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                      >
                        {isPlaying ? (
                          <FaPause className="text-white text-lg" />
                        ) : (
                          <FaPlay className="text-white text-lg" />
                        )}
                      </button>

                      <button
                        onClick={handleVolumeToggle}
                        className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                      >
                        {isMuted ? (
                          <FaVolumeMute className="text-white text-lg" />
                        ) : (
                          <FaVolumeUp className="text-white text-lg" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={handleFullscreen}
                      className="p-3 bg-gray-800/70 hover:bg-red-700/70 rounded-full transition-all backdrop-blur-md"
                    >
                      <FaExpand className="text-white text-lg" />
                    </button>
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg text-white mb-3">Match Details</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-3">
                        <FaCalendar className="text-red-400" /> March 15, 2024
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-red-400" /> 2:30 PM – 6:30 PM
                        IST
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-white font-semibold mb-3">
                      Teams
                    </h3>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="w-12 text-white h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center font-bold">
                          RR
                        </div>
                        <p className="text-sm mt-1 text-white">Red Riders</p>
                      </div>
                      <div className="text-gray-400 text-lg font-bold">VS</div>
                      <div className="text-center">
                        <div className="w-12 text-white h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center font-bold">
                          KK
                        </div>
                        <p className="text-sm mt-1 text-white">
                          Kolkata Knights
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="  rounded-2xl p-6 shadow-xl border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-xl mb-4 text-white">Upcoming Streams</h3>
                {[
                  {
                    title: "Training Session",
                    date: "Tomorrow, 6 AM",
                    type: "Training",
                  },
                  {
                    title: "Junior League Finals",
                    date: "Mar 18, 3 PM",
                    type: "Tournament",
                  },
                  {
                    title: "Coaching Workshop",
                    date: "Mar 20, 10 AM",
                    type: "Workshop",
                  },
                ].map((stream, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-red-500/30 transition-all cursor-pointer mb-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-600/20 rounded-lg border border-red-500/30">
                        <FaCalendar className="text-red-400 text-sm" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm">{stream.title}</h4>
                        <p className="text-gray-400 text-xs">{stream.date}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-gray-600/50 rounded text-xs text-gray-300">
                          {stream.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- New Section: Already Happened Live Videos ---- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white 
            via-red-400 to-red-600 bg-clip-text text-transparent mb-8"
          >
            Already Happened Live Videos
          </h2>

          <Splide
            options={{
              type: "loop",
              perPage: 4,
              gap: "1.5rem",
              autoplay: true,
              pauseOnHover: false,
              pagination: false,
              arrows: true,
              breakpoints: {
                1280: { perPage: 3 },
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
          >
            {pastVideos.map((video) => (
              <SplideSlide key={video.id}>
                <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/40 shadow-xl hover:shadow-red-700/30 transition-all duration-300">
                  <div className="aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="text-lg font-semibold text-white">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Watch the full replay of this exciting match.
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
};

export default LiveStream;
