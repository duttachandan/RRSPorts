import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

const API_URL = import.meta.env.VITE_API_URL;

const LiveStream = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const playerRef = useRef(null);

  /* ---------------- FETCH MATCHES ---------------- */

  const fetchMatches = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/api/public/matches`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const result = await response.json();

      const matchList =
        result?.data && Array.isArray(result.data) ? result.data : [];

      setMatches(matchList);
    } catch (err) {
      console.error("Matches fetch error:", err);
      setError("Unable to load matches. Please try again.");
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  /* ---------------- HELPERS ---------------- */

  const convertToEmbedUrl = (url) => {
    if (!url) return null;

    try {
      if (url.includes("watch?v=")) {
        const videoId = url.split("watch?v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
      }

      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
      }

      if (url.includes("embed")) return url;

      return null;
    } catch {
      return null;
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  /* ---------------- MATCH FILTERING ---------------- */

  const liveMatch = matches.find((m) => m.status === "LIVE");
  const pastMatches = matches.filter((m) => m.status !== "LIVE");

  const streamUrl = convertToEmbedUrl(liveMatch?.youtubeLink);

  /* ---------------- YOUTUBE API ---------------- */

  useEffect(() => {
    if (!streamUrl) return;

    const existingScript = document.getElementById("youtube-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onReady: () => {
            playerRef.current.playVideo();
          },
        },
      });
    };
  }, [streamUrl]);

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
    if (!iframe) return;

    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}

      <section className="py-3 about-banner">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-12 text-overlay">
            {liveMatch && (
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-800/20 px-6 py-3 rounded-2xl border border-red-500/30 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-300 font-medium text-lg">
                    LIVE NOW
                  </span>
                </div>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
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

      {/* ---------------- PLAYER SECTION ---------------- */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">

          {loading && (
            <div className="text-center text-gray-400 py-20">
              Loading live stream...
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 py-20">
              {error}
            </div>
          )}

          {!loading && !liveMatch && (
            <div className="text-center text-gray-400 py-20">
              No Live Match Available
            </div>
          )}

          {liveMatch && streamUrl && (
            <div className="relative bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
              
              <div className="p-3 sm:p-6 border-b border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl text-white">
                    {liveMatch.teamA?.name} vs {liveMatch.teamB?.name}
                  </h2>
                  <p className="text-gray-400">
                    {liveMatch.league} - {liveMatch.venue}
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-red-600/20 px-3 py-2 rounded-lg border border-red-500/30">
                  <FaWifi className="text-red-400" />
                  <span className="text-red-300 font-medium">LIVE</span>
                </div>
              </div>

              <div className="relative aspect-video bg-black">
                <iframe
                  id="yt-player"
                  src={streamUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Live Stream"
                ></iframe>

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

              {/* MATCH DETAILS */}
              <div className="p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white mb-3">Match Details</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-3">
                      <FaCalendar className="text-red-400" />
                      {liveMatch.time || "Today"}
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-red-400" />
                      {liveMatch.updatedAt}
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
                        {getInitials(liveMatch.teamA?.name)}
                      </div>
                      <p className="text-sm mt-1 text-white">
                        {liveMatch.teamA?.name}
                      </p>
                    </div>

                    <div className="text-gray-400 text-lg font-bold">VS</div>

                    <div className="text-center">
                      <div className="w-12 text-white h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center font-bold">
                        {getInitials(liveMatch.teamB?.name)}
                      </div>
                      <p className="text-sm mt-1 text-white">
                        {liveMatch.teamB?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- PAST MATCHES ---------------- */}

      {pastMatches.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent mb-8">
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
                arrows: false,
                breakpoints: {
                  1280: { perPage: 3 },
                  1024: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
            >
              {pastMatches.map((match) => {
                const embedUrl = convertToEmbedUrl(match.youtubeLink);
                if (!embedUrl) return null;

                return (
                  <SplideSlide key={match.id}>
                    <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/40 shadow-xl hover:shadow-red-700/30 transition-all duration-300">
                      <div className="aspect-video">
                        <iframe
                          src={embedUrl}
                          title={match.league}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="p-4 text-left">
                        <h3 className="text-lg font-semibold text-white">
                          {match.teamA?.name} vs {match.teamB?.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {match.league} - {match.venue}
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </section>
      )}
    </>
  );
};

export default LiveStream;
