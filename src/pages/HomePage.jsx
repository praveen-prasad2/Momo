import React from "react";
import Hero from "../components/Homepage/Hero";
import AboutMomoWagon from "../components/Homepage/AboutMomoWagon";
import SignatureFood from "../components/Homepage/SignatureFood";
import DiningExperience from "../components/Homepage/DiningExperience";
import VoicesOfSatisfaction from "../components/Homepage/VoicesOfSatisfaction";
import GetInTouch from "../components/Homepage/GetInTouch";

const HomePage = () => {
  return (
    <div className="text-blue h-[500vh]">
      <Hero />
      <AboutMomoWagon />
      <SignatureFood />
      <DiningExperience />
      <VoicesOfSatisfaction />
      <GetInTouch />
    </div>
  );
};

export default HomePage;
