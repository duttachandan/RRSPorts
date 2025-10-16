import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar";
// import Footer from "../../containers/Footer";
// import styles from "../../style";
import { Link } from "react-router-dom";
import { FaUser, FaUsers, FaIdBadge, FaCheckCircle } from "react-icons/fa";
import { getMembers } from "../../api/memberService";
import { img } from "framer-motion/client";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // const project = localStorage.getItem("selectedProject");
        const data = await getMembers();
        console.log(data);
        setMembers(data);
      } catch (err) {
        setError(err.message || "Failed to fetch members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 border border-gray-700/50"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 mb-6 flex items-center justify-center animate-pulse" />
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
      <section className="py-3 about-banner">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-overlay text-center" data-aos="fade-up">
            {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-3 rounded-2xl border border-purple-500/30 mb-4">
              <FaUsers className="text-pink-400 text-xl" />
              <span className="text-purple-300 font-medium text-lg">
                {projectName || "Our Team"}
              </span>
            </div> */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
              font-extrabold bg-gradient-to-r from-white 
              via-red-400 to-red-600 bg-clip-text 
              text-transparent mb-4"
            >
              TEAM MEMBERS
            </h1>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Meet the dedicated members who make our project successful
            </p>
            <ul className="breadCrumb">
              <li>
                <Link className="text-gray-300" to="/">
                  Home
                </Link>
              </li>
              <li>Members</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8 mt-8">
        {/* Members Grid */}
        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-semibold text-red-300 mb-2">
                Error Loading Data
              </h3>
              <p className="text-red-200">{error}</p>
            </div>
          </div>
        ) : members.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
              <FaUser className="text-gray-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                No Members Found
              </h3>
              <p className="text-gray-400">
                There are no members to display for this project.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap mx-[-15px]">
              {members.map((data, index) => (
                <div className="w-[33.33%] mng-card-layout px-[15px]">
                  <div className="mng-card mb-5 md:mb-0 rounded-lg relative">
                    <div className="card-img">
                      {data?.memberImage ? (
                        <img
                          src={`data:image/png;base64,${data.memberImage}`}
                          alt={data.memberName}
                          className="w-[100%] h-[350px] object-cover"
                        />
                      ) : (
                        <img
                          className="w-[100%] h-[350px] object-cover"
                          src="https://i.pravatar.cc/400?img=12"
                          alt=""
                        />
                      )}
                    </div>
                    <div
                      className="card-docs 
                        transition duration-100 
                        absolute rounded-full text-center"
                    >
                      <h4 className="title4 text-2xl">{data.memberName}</h4>
                      {/* <p>
                        {data.managmentDesignation
                          ? data.managmentDesignation
                          : "Data Analyst"}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Members;
