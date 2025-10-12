import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "../components/Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
    className={`flex items-center sm:p-6 rounded-[20px] 
    ${index !== features.length - 1 ? "mb-6 md:mb-0" : "mb-0"}
    feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
        {title}
      </h4>
      <p className=" font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <div id="features" className="flex flex-wrap mx-[-15px]">
      <div className="w-[100%] px-[15px]">
        <h2 className="font-semibold 
        ss:text-[48px] text-[32px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent">
          How to Join Our Club?
        </h2>
        <p className={`text-white mt-5`}>
          Become a champion with these simple steps:
        </p>
        <p className={`text-white mt-3`}>
          Choose your favorite sport, complete the registration process, and start your training journey with our expert coaches. Access world-class facilities and join our vibrant sports community today!
        </p>

        <Button styles="mt-10" />
      </div>
      <div className={`w-[100%] px-[15px] mt-[50px] flex 
      flex-col md:flex-row justify-center align-center`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Business;