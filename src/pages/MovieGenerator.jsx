import React, { useState } from "react";
import "../components/css/MovieGenerator.css"
import { TeamMembers } from "../components/ui/TeamMembers";
import { Footer } from "../components/ui/Footer";
import { FeatureSection } from "../components/ui/FeatureSection";
import { Navbar } from "../components/ui/Navbar";
import { MainMovieGenerator } from "../components/ui/MainMoviegenerator";
import { HeroSection } from "../components/ui/HeroSection";

const MovieGenerator = () => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="page-container">
      <Navbar showAbout={showAbout} setShowAbout={setShowAbout} />
      {!showAbout ? (
        <>
          <HeroSection />

         <MainMovieGenerator />

          <FeatureSection />
        </>
      ) : (
        <TeamMembers />
      )}

      <Footer />
    </div>
  );
};

export default MovieGenerator;
