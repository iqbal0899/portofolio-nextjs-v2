import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Brand */}
        <div className={styles.footerBrand}>
          <h2>Muhammad Iqbal<span>.</span></h2>

          <p>
            Web Developer yang berfokus pada pembuatan website
            modern, responsive, dan memiliki pengalaman pengguna
            yang menarik.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.footerColumn}>
          <h3>Navigation</h3>

          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Social */}
        <div className={styles.footerColumn}>
          <h3>Social</h3>

          <a
            href="https://github.com/iqbal0899"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-iqbal-a6278a223?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/@iqballm_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <p>© 2026 Iqbal. All rights reserved.</p>

        <p>
          Designed & Built with <span>♥</span>
        </p>
      </div>
    </footer>
  );
}