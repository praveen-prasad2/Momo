import React from "react";
import Hero from "../components/Homepage/Hero";
import AboutMomoWagon from "../components/Homepage/AboutMomoWagon";
import SignatureFood from "../components/Homepage/SignatureFood";
import DiningExperience from "../components/Homepage/DiningExperience";
import VoicesOfSatisfaction from "../components/Homepage/VoicesOfSatisfaction";
import GetInTouchContainer from "../components/Homepage/GetInTouchContainer";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <AboutMomoWagon />
      <SignatureFood />
      <DiningExperience />
      <VoicesOfSatisfaction />
      <GetInTouchContainer />
    </div>
  );
};

export default HomePage;
