"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileCard from "@/components/bloc/Components/ProfileCard/ProfileCard";
import Aurora from "@/components/bloc/Backgrounds/Aurora/Aurora";
import Footer from "@/components/footer";

const Page = () => {
  const handleConnectClick = () => {
    window.open("https://www.linkedin.com/in/vedant-kolte/", "_blank");
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-16 mt-17 text-white">
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <ProfileCard
            name="Vedant"
            title="Web Developer & AI Enthusiast"
            handle="ved.codes"
            status="Available"
            contactText="Let's Connect"
            avatarUrl="/avatar.png"
            showUserInfo={true}
            enableTilt={false}
            enableMobileTilt={false}
            innerGradient={false}
            behindGradient={false}
            className="filter-none"
            onContactClick={handleConnectClick}
          />
        </div>

        <div className="text-left max-w-md w-full mt-2">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-300 leading-relaxed text-base mb-6">
            I'm always open to new opportunities, collaborations, or just a good
            tech chat. Feel free to reach out and start a conversation!
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ved-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-kolte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
