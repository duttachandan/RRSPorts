import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AosProvider from "./utils/AosProvider";

// Sports Club
import App from "./App";
import Layout from "./components/RRSports/Layout/Layout";
import About from "./components/RRSports/About";
import Committee from "./components/RRSports/Committee";
import LiveScores from "./components/RRSports/LiveScores";
import LiveStream from "./components/RRSports/LiveStream";
import Events from "./components/RRSports/Events";

// RR Management Section
import ManagmentLayout from "./components/RrManagment/ManagmentLayout";
import RrManagment from "./components/RrManagment/RrManagment";

// RR Complex Section

import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/LoginForm";
import "./index.css";
import SetMeal from "./components/SetMeal";
// import About from "./components/About";
import FAQ from "./components/FAQ";
import Affiliate from "./components/Affiliate";
import PrivecyPolicy from "./components/PrivecyPolicy";
import TermsOfService from "./components/TermsOfService";
import WhatIsCryptocurrency from "./components/WhatIsCryptocurrency";
import Management from "./components/Management";
import Members from "./components/RRSports/Members";
import Contacts from "./components/Contacts";
import OurClients from "./components/OurClients";
import Gallery from "./components/Gallery";
import { Contact } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AosProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          {/* Sports Club Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="committee" element={<Committee />} />
            <Route path="members" element={<Members />} />
            <Route path="live-scoring" element={<LiveScores />} />
            <Route path="live-stream" element={<LiveStream />} />
            <Route path="events" element={<Events />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>

          {/* RR Managment Routes */}
          <Route path="/management" element={<ManagmentLayout />}>
            <Route index element={<RrManagment />} />
          </Route>

          {/* RR Sports Complex Routes */}
          {/* <Route path="/sports-complex" element={}></Route> */}
        </Routes>
      </AosProvider>
    </BrowserRouter>
  </React.StrictMode>
);

{
  /* <Routes>
  <Route path="/" element={<App />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/setmeal" element={<SetMeal />} />
  <Route path="/about" element={<About />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/affiliate" element={<Affiliate />} />
  <Route path="/privacy-policy" element={<PrivecyPolicy />} />
  <Route path="/terms-of-service" element={<TermsOfService />} />
  <Route path="/what-is-cryptocurrency" element={<WhatIsCryptocurrency />} />
  <Route path="/management" element={<Management />} />
  <Route path="/members" element={<Members />} />
  <Route path="/event" element={<Events />} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/live-stream" element={<LiveStream />} />
  <Route path="/live-scoring" element={<LiveScores />} />
  <Route path="/our-clients" element={<OurClients />} />
  <Route path="/gallery" element={<Gallery />} />
</Routes> */
}
