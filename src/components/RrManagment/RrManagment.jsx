import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Images
import Image1 from "../../assets/NewAssets/AboutBg2.jpg";
import Image2 from "../../assets/NewAssets/sports-center.jpg";
import Image3 from "../../assets/NewAssets/tenis-court.jpg";
import Image4 from "../../assets/NewAssets/tenis-grass.jpg";

const RrManagment = () => {
  return (
    <main>
      <section className="mng-banner-section">
        <Splide
          aria-label="Banner"
          options={{
            type: "fade",
            rewind: true, // ensures looping effect
            speed: 2000, // smooth fade duration (2 seconds)
            interval: 4000, // each slide stays visible for 5 seconds
            autoplay: true,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
          }}
        >
          {[Image1, Image2, Image3, Image4].map((img, index) => (
            <SplideSlide key={index}>
              <div
                className="banner-img"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="banner-overlay">
                  <div className="banner-content">
                    <h1 data-aos="fade-up">Sports Management</h1>
                    <p data-aos="fade-up">
                      Empowering your sports journey with world-class facilities
                      and organized recreation.
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
      <section className="">

      </section>
    </main>
  );
};

export default RrManagment;
