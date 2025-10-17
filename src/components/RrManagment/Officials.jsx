import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { getManagements } from "../../api/managementService";

const Officials = () => {
  const [managements, setManagements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project name from localStorage and management data from API
  useEffect(() => {
    const fetchProjectAndManagements = async () => {
      try {
        const data = await getManagements();
        setManagements(data);
        console.log(data);
      } catch (err) {
        setError(err.message || "Failed to fetch managements");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectAndManagements();
  }, []);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 border border-gray-700/50"
          >
            {/* Image Skeleton */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 mb-6 flex items-center justify-center animate-pulse">
              <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
            </div>

            {/* Text Skeleton */}
            <div className="w-3/4 h-6 bg-gray-700 rounded-lg mb-3 animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-700 rounded-lg mb-2 animate-pulse"></div>
            <div className="w-2/3 h-4 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Project Header */}
      <section className="pt-32">
        <div className="about-banner gallery-banner">
          <div className="max-w-7xl mx-auto px-3">
            <div data-aos="fade-up" className="text-center text-overlay">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent  mb-4"
              >
                Red Riders Committe Team
              </h1>
              <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
                Meet the visionary leaders driving innovation and excellence in
                our organization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-7xl mx-auto px-3">
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="bg-red-900/20 border 
              border-red-500/30 rounded-2xl p-8"
              >
                <div className="text-red-400 text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-semibold text-red-300 mb-2">
                  Error Loading Data
                </h3>
                <p className="text-red-200">{error}</p>
              </div>
            </div>
          ) : managements.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="bg-gray-800/50 border 
              border-gray-700/50 rounded-2xl p-12"
              >
                <FaUser className="text-gray-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  No Management Found
                </h3>
                <p className="text-gray-400">
                  There are no management members to display for this project.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap mx-[-15px]">
              {managements.map((data, img) => {
                return (
                  <div className="w-[33.33%] mng-card-layout px-[15px]">
                    <div className="mng-card rounded-lg relative">
                      <div className="card-img">
                        <img
                          src={`data:image/png;base64,${data.managementImage}`}
                          alt={data.managementName}
                          className="w-[100%] h-[400px] object-cover"
                        />
                      </div>
                      <div
                        className="card-docs 
                        transition duration-100 
                        absolute rounded-full text-center"
                      >
                        <h4 className="title4 text-2xl">
                          {data.managementName}
                        </h4>
                        <p>
                          {data.designation
                            ? data.designation
                            : "Mentor"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Officials;
