import React from "react";
import RobotSpline from "./spine-robot";

const Aboutme = () => {
  return (
    <div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold pb-6">About Me</h1>

        <RobotSpline />
      </div>
    </div>
  );
};

export default Aboutme;
