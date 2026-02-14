import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSync, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const LiveScores = () => {
  const [sports, setSports] = useState([]);
  const [matches, setMatches] = useState([]);
  const [activeSport, setActiveSport] = useState("all");
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH SPORTS ================= */
  const fetchSports = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/sports`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch sports");
      }

      const data = await response.json();

      // Only active sports
      const activeSports = Array.isArray(data)
        ? data.filter((s) => s?.active === true)
        : [];

      setSports(activeSports);
    } catch (error) {
      console.error("Sports fetch error:", error);
      setSports([]);
    }
  };

  /* ================= FETCH MATCHES ================= */
  const fetchMatches = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/public/matches`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch matches");
      }

      const result = await response.json();

      const matchList =
        result?.data && Array.isArray(result.data)
          ? result.data
          : [];

      setMatches(matchList);
    } catch (error) {
      console.error("Matches fetch error:", error);
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSports();
    fetchMatches();
  }, []);

  /* ================= REFRESH ================= */
  const refreshScores = async () => {
    setRefreshing(true);
    await fetchMatches();
    setRefreshing(false);
  };

  /* ================= FILTER ================= */
  const filteredMatches =
    activeSport === "all"
      ? matches
      : matches.filter(
          (match) =>
            match?.sport?.toLowerCase() ===
            activeSport?.toLowerCase()
        );

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="py-3 about-banner">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-overlay text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent mt-4">
              Live Scores
            </h1>

            <ul className="breadCrumb mt-4">
              <li>
                <Link className="text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>Live Scoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">

          {/* SPORTS FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveSport("all")}
              className={`px-6 py-3 rounded-xl border backdrop-blur-sm transition-all ${
                activeSport === "all"
                  ? "bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/30 text-white"
                  : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white"
              }`}
            >
              All Sports
            </button>

            {sports.map((sport) => (
              <button
                key={sport?.id}
                onClick={() => setActiveSport(sport?.code)}
                className={`px-6 py-3 rounded-xl border backdrop-blur-sm transition-all ${
                  activeSport === sport?.code
                    ? "bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/30 text-white"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white"
                }`}
              >
                {sport?.name || "N/A"}
              </button>
            ))}
          </div>

          {/* REFRESH BUTTON */}
          <div className="flex justify-end mb-6">
            <button
              onClick={refreshScores}
              disabled={refreshing}
              className="px-6 py-3 primary-btn"
            >
              <span className="flex items-center justify-center text-white">
                <FaSync
                  className={`text-lg mr-3 ${
                    refreshing ? "animate-spin" : ""
                  }`}
                />
                {refreshing ? "Refreshing..." : "Refresh Scores"}
              </span>
            </button>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="text-center text-gray-400 py-10">
              Loading matches...
            </div>
          )}

          {/* MATCH GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMatches.map((match) => {
              const isLive = match?.status === "LIVE";

              return (
                <div
                  key={match?.id}
                  className="bg-gray-800/50 rounded-2xl p-3 md:p-6 shadow-xl border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 transition-all"
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white text-sm">
                        {match?.league || "N/A"}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FaMapMarkerAlt />
                        <span>{match?.venue || "N/A"}</span>
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isLive
                          ? "bg-red-600/20 text-red-300 border border-red-500/30"
                          : "bg-green-600/20 text-green-300 border border-green-500/30"
                      }`}
                    >
                      {match?.status || "UNKNOWN"}
                    </div>
                  </div>

                  {/* TEAM A */}
                  <div className="flex justify-between mb-4">
                    <span className="font-medium text-white">
                      {match?.teamA?.name || "N/A"}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {match?.teamA?.score ?? "-"}
                    </span>
                  </div>

                  {/* TEAM B */}
                  <div className="flex justify-between">
                    <span className="font-medium text-white">
                      {match?.teamB?.name || "N/A"}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {match?.teamB?.score ?? "-"}
                    </span>
                  </div>

                  {/* FOOTER */}
                  <div className="flex justify-between mt-6 pt-4 border-t border-gray-700/50 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>{match?.time || "TBD"}</span>
                    </div>

                    <div>
                      Updated: {match?.updatedAt || "-"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NO MATCHES */}
          {!loading && filteredMatches.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">
                No matches found
              </div>
              <p className="text-gray-600 mt-2">
                Check back later for live matches
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LiveScores;
