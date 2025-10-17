import React, { useEffect } from "react";
import "aos/dist/aos.css"; // very important
import { Hero, Navbar } from "./components";
import {
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  CTA,
} from "./containers";

const App = () => {
  
  return (
    <main>
      <section className="py-2">
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
