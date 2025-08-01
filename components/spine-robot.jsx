"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const RobotSpline = () => {
  return (
    <div className=" flex w-full items-center px-19 ">
      <Spline
        scene="https://prod.spline.design/cDEqh8pWEkyNZJiC/scene.splinecode"
        width={1500}
        height={453}
      />
    </div>
  );
};

export default RobotSpline;
