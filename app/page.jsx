"use client";

import { useState } from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      
      <section className={styles.content}>
        

        <div className={styles.frame}>

          <Hero />

          <About />

          <Projects />

          <Skills />

          <Contact />

        </div>

      </section>

    </main>

  );
}