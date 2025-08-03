"use client";
import React from "react";
import Link from "next/link";
import LightRays from "@/components/background/LightRays/LightRays";
import TextType from "@/components/bloc/TextAnimations/TextType/TextType";
import { HiAcademicCap } from "react-icons/hi2";

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top"
          raysSpeed={1.2}
          lightSpread={0.5}
          rayLength={1.2}
          fadeDistance={10}
          saturation={0}
          mouseInfluence={0.1}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Hello, I'm Ved. <br /> I am{" "}
          <TextType
            text={[
              "a Full Stack Web Developer",
              "an Aspiring AI Engineer",
              "a Problem Solver",
              "a UI/UX Design Enthusiast",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        <div className="flex gap-4">
          {/* Button with Link */}
          <Link href="/projects">
            <button className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition">
              View My Work
            </button>
          </Link>

          {/* Resume Button */}
          <button className="bg-gray-900 text-white border border-gray-600 rounded-full px-6 py-3 font-semibold hover:bg-gray-800 transition flex items-center gap-2">
            <HiAcademicCap className="text-lg" />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
