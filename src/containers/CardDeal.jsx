import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "../components/Button";

const CardDeal = () => (
  <div className="flex flex-wrap-reverse mx-[-15px] items-center">
    <div className='w-100 lg:w-[50%] px-[15px]'>
      <h2 className="font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
        World-class sports <br className="sm:block hidden" /> facilities & amenities
      </h2>
      <p className={`text-white mt-5`}>
        Experience premium sports infrastructure designed for champions.
        Red Riders Sports Club offers state-of-the-art facilities, professional-grade
        equipment, and meticulously maintained playing surfaces across all sports disciplines.
      </p>
      <p className={`text-white mt-5`}>
        From Olympic-sized swimming pools to professional cricket nets, football turfs,
        and indoor courts - we provide everything you need to excel in your chosen sport
        while ensuring safety and comfort.
      </p>
    </div>

    <div data-aos="zoom-in" className='w-[100%] lg:w-[50%] px-[15px]'>
      <div className="max-w-[700px] mx-auto">
        <img
          src={card}
          alt="sports facilities"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  </div>
);

export default CardDeal;