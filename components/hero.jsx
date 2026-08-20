import { ArrowDown } from "lucide-react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.smallText}>
          WELCOME TO MY PORTFOLIO
        </span>

        <h2>Hello!</h2>

        <p>
          My name is{" "}
          <strong>Muhammad Iqbal</strong>, and I'm a
          Fullstack Developer passionate about creating
          modern, responsive, and user-friendly web
          applications.
        </p>

        <a href="#about" className={styles.learnMore}>
          <span>Learn more about me</span>
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}