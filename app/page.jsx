"use client";
import Aboutme from "@/components/Aboutme";
import ClickSpark from "@/components/bloc/Animations/ClickSpark/ClickSpark";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills-tech";


export default function Home() {
  return (
    <div  className="relative min-h-screen overflow-hidden bg-black text-white">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Footer/>
      </ClickSpark>
    </div>
  );
}
