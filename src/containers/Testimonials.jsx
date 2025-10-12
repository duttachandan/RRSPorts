import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from '../components/FeedbackCard';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Testimonials = () => (
  <div id="clients" className="relative">
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h2 className={`${styles.heading2} bg-gradient-to-r from-red-700 via-red-400 to-gray-300 bg-clip-text text-transparent`}>
          What Our Members <br className="sm:block hidden" /> Say About Us
        </h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <p className={`${styles.paragraph} text-center md:text-left max-w-[450px] mt-4 md:mt-0`}>
          Hear from our passionate community of athletes and sports enthusiasts who have
          experienced the Red Riders difference. Their success stories inspire us to keep
          delivering exceptional sports training and facilities.
        </p>
      </div>
    </div>

    {/* <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}

    <Splide
      aria-label="Testimonials"
      options={{
        type: "loop",
        // drag: 'free',
        focus: 'center',
        perPage: 3,
        perMove: 1,
        // autoScroll: {
        //   speed: 1,
        // },
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        arrows: false,
        pagination: false,
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}>
      {feedback.map((card) => {
        return (
          <SplideSlide key={card.id}>
            <FeedbackCard {...card} />
          </SplideSlide>
        )
      })}
    </Splide>
  </div>
);

export default Testimonials;