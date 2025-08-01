import React from "react";
import FuzzyText from "./bloc/TextAnimations/FuzzyText/FuzzyText";

const Projects = () => {
  return (
    <div className="min-h-screen pt-30">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <div className="flex flex-1 items-center justify-center pt-40">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          ADDING SOON
        </FuzzyText>
      </div>
    </div>
  );
};

export default Projects;
