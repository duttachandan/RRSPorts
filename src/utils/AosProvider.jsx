import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosProvider = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once when scrolled into view
      offset: 100, // offset before triggering animation
    });
  }, []);

  return children;
};

export default AosProvider;
