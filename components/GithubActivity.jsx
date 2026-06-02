"use client";

import React from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const GithubActivity = () => {
  return (
    <section className="relative min-h-screen bg-black py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5227FF]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm mb-4">
            GitHub Activity
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Code Never
            <br />
            Sleeps.
          </h2>
        </div>

        {/* Snake */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/ved-2/portfolio/output/github-snake.svg"
            alt="GitHub Snake"
            className="w-full"
          />
        </div>

        {/* Github Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl border border-white/10 bg-black p-8 font-mono">
            <p className="text-violet-400">ved@portfolio:~$</p>

            <p className="text-white mt-3">whoami</p>

            <p className="text-violet-200 mt-2">AI Engineer in progress.</p>

            <p className="text-white mt-5">current_focus</p>

            <p className="text-neutral-400 mt-2">
              AI • Full Stack • Product Building
            </p>

            <p className="text-white mt-5">mission</p>

            <p className="text-neutral-400 mt-2">
              Build products that people actually use.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ved-2&theme=tokyonight&hide_border=true&background=000000"
              alt="GitHub Streak"
              className="w-full"
            />
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Contribution Graph
          </h3>

          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="ved-2"
              colorScheme="dark"
              fontSize={15}
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
