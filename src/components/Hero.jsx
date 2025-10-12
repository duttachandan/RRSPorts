import styles from "../style";
import { discount, aboutImg } from "../assets";
import GetStarted from "./GetStarted";
import { arrowUp } from '../assets';
import Button from "../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse mx-[-15px] items-center">
        <div className={`w-[100%] lg:w-[50%] px-[15px] relative`}>
          <div className="flex items-center w-full">
            <h1 data-aos="fade-up" className="flex-1  font-semibold 
          ss:text-[72px] text-[45px] bg-gradient-to-r 
          from-red-500 via-red-300 to-gray-300 
          bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px]">
              Welcome to
              <span className="text-[#d1d5db] ml-3">Red Riders</span>{" "}
            </h1>
            <div data-aos="flip-right" className="lg:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <div data-aos="fade-up"
            className="font-bold ss:text-[72px] title1
          text-[45px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent ss:leading-[100.8px] leading-[75px] w-full">
            Sports Club
          </div>
          <p className={`text-[#d1d5db] lg:max-w-[470px] w-100 mt-5`}>
            Red Riders is Kolkata's premier sports club, bringing together passionate athletes
            and sports enthusiasts. With state-of-the-art facilities and expert coaching,
            we're building a community where champions are made and memories are forged!
          </p>
          <div className="block lg:hidden mt-6">
            <Button />
          </div>
        </div>

        {/* Image Section */}
        <div className={`w-[100%] lg:w-[50%] px-[15px] relative`}>
          <img
            src={aboutImg} alt="billing"
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