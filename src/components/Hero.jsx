// import styles from "../style";
// import { discount, aboutImg } from "../assets";
import GetStarted from "./GetStarted";
// import { arrowUp } from "../assets";
import Button from "../components/Button";
// import Image1 from "../assets/NewAssets/banner-img.png";
import Image2 from "../assets/NewAssets/banner-img2.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse mx-[-15px] items-center">
        <div className={`w-[100%] lg:w-[50%] px-[15px] relative`}>
          <div className="flex items-center w-full">
            <div
              data-aos="fade-up"
              className="flex-1  
          ss:text-[50px] title1 self-end
          text-[32px] bg-gradient-to-r 
          from-red-500 via-red-300 to-gray-300 
          bg-clip-text text-transparent"
            >
              Welcome to
              {/* <span className="text-[#d1d5db] ml-3">Red Riders</span>{" "} */}
            </div>
            {/* <div data-aos="flip-right" className="lg:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div> */}
          </div>
          <h1
            data-aos="fade-up"
            className="font-bold ss:text-[50px] title1
          text-[32px] bg-gradient-to-r from-red-500 via-red-300 
          to-gray-300 bg-clip-text text-transparent w-full"
          >
            Red Riders Sports Club
          </h1>
          <p className={`text-[#d1d5db] lg:max-w-[470px] w-100 mt-5`}>
            We Are One Big Family Here, every member counts. We cheer for each
            other’s victories, support one another through challenges, and
            celebrate the spirit of togetherness that defines our community.
            Because in our world, every win — big or small — belongs to the
            whole family. Are You a Member of the Family Yet? Don’t just watch
            from the sidelines — be part of something bigger! Join us today and
            experience the energy, teamwork, and excitement that make our club
            truly special.
          </p>
          {/* <div className="block lg:hidden mt-6">
            <Button />
          </div> */}
        </div>

        {/* Image Section */}
        <div className={`w-[100%] lg:w-[50%] px-[15px] relative`}>
          <img
            src={Image2}
            alt="billing"
            className="w-[100%] h-[100%] object-contain 
            relative z-[5]"
          />
          {/* gradient start */}
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" /> */}
          {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </div>
    </>
  );
};

export default Hero;
