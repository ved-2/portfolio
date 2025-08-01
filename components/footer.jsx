import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 mt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/70">
          © {new Date().getFullYear()} Vedant Kolte • Built with ❤️ 
        </div>

        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/ved-2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-kolte/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
