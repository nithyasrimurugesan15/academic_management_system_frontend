import React from "react";
import Slider from "./slider/Slider";
import RandomQuote from "../../components/random-quote/RandomQuote";
import SummaryData from "./summary-data/SummaryData";
import WhatOffer from "./what-offer/WhatOffer";
import Footer from "../../components/Footer/Footer";
import "react-awesome-slider/dist/styles.css";

function Home() {
  return (
    <>
      <Slider />

      {/* Random Quote */}
      <RandomQuote />

      {/* Summary Data */}
      <SummaryData />

      {/* What Offer */}
      <WhatOffer />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;