"use client";

import { Lightbulb, Zap, Shield } from "lucide-react";

export default function SolutionSection({ project }) {
  return (
    <section className="relative py-32">
      {/* Background Glow */}
      <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-emerald-400 uppercase tracking-[0.3em] text-xs">
            The Solution
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            How We Fixed It
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Our approach combines cutting-edge technology with user-centric
            design to create a seamless experience that solves the core problem.
          </p>
        </div>

        {/* Main Solution Card */}
        <div className="mt-16 rounded-[32px] border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <Lightbulb size={26} className="text-emerald-400" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">Our Approach</h3>

              <p className="mt-5 text-zinc-400 leading-relaxed text-lg max-w-4xl">
                {project.solution.description}
              </p>
            </div>
          </div>
        </div>

        {/* Solution Pillars */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <Zap className="text-emerald-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Real-time Coordination
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Instant communication and live tracking capabilities enable
              seamless coordination across all stakeholders.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <Lightbulb className="text-cyan-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              AI-Powered Intelligence
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Machine learning algorithms optimize decisions and provide
              intelligent recommendations tailored to each situation.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
              <Shield className="text-violet-400" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Reliability & Security
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Enterprise-grade infrastructure ensures 24/7 availability and data
              protection at the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
