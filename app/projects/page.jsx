"use client";
import FuzzyText from "@/components/bloc/TextAnimations/FuzzyText/FuzzyText";
import Footer from "@/components/footer";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          ADDING SOON
        </FuzzyText>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
