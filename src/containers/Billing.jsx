import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <div id="product" className='flex flex-wrap mx-[-15px] items-center'>
    <div
      data-aos="zoom-in"
      className='w-[100%] lg:w-[50%] px-[15px]'>
      <div className="max-w-[700px] mx-auto">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] object-contain relative z-[5]" />
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full red__gradient" />
      {/* gradient end */}
    </div>

    <div className='w-[100%] lg:w-[50%] px-[15px]'>
      <h2 className="font-semibold ss:text-[48px] text-[32px] ss:leading-[76.8px] leading-[50px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
        Benefits of becoming a <br className="sm:block hidden" /> Red Riders Club Member
      </h2>
      <p className={`text-white mt-5`}>
        Join the Red Riders Sports Club family and unlock exclusive benefits designed to elevate your sports journey.
        Access state-of-the-art facilities, professional coaching, and a vibrant community of like-minded sports enthusiasts.
        Whether you're a beginner or a professional athlete, our club provides the perfect environment to grow, compete, and excel.
      </p>
      <p className={`text-white mt-5`}>
        Enjoy priority booking for facilities, exclusive member events, tournament participation rights, and special discounts
        on coaching programs. Connect with fellow athletes, build lasting friendships, and be part of Kolkata's premier sports
        community that champions excellence and sportsmanship.
      </p>
    </div>
  </div>
);

export default Billing;