import React from "react";
import Hero from "../components/Homepage/Hero";
import AboutMomoWagon from "../components/Homepage/AboutMomoWagon";
import SignatureFood from "../components/Homepage/SignatureFood";
import DiningExperience from "../components/Homepage/DiningExperience";

const HomePage = () => {
  return (
    <div className="text-blue">
      <Hero />
      <AboutMomoWagon />
      <SignatureFood />
      <DiningExperience />
    </div>
  );
};

export default HomePage;
