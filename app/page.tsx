"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Notes from "@/components/Notes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Notes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
