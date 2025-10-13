import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // very important
import styles from "./style";
import { Hero, Navbar } from "./components";
import {
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./containers";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once when scrolled into view
      offset: 100, // offset before triggering animation
    });
  }, []);
  return (
    <main>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <Hero />
        </div>
      </section>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <Stats />
        </div>
      </section>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <Business />
        </div>
      </section>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <Billing />
        </div>
      </section>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <CardDeal />
        </div>
      </section>
      <section className="py-9">
        <div className="max-w-7xl px-3 mx-auto">
          <Testimonials />
          <CTA />
        </div>
      </section>
    </main>
  );
};

export default App;
