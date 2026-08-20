import Link from "next/link";
import Image from "next/image";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      {/* Profile */}
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <Image
            src="/1786653182699-934074250.jpeg"
            alt="Foto profil Iqbal"
            width={110}
            height={110}
            priority
          />
        </div>

        <h2>
          Muhammad Iqbal<span>.</span>
        </h2>

        <p>Web Developer</p>
      </div>

      {/* Navigation */}
      <nav className={styles.sidebarNav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Download CV */}
      <a
        href="/cv-muhammad-iqbal.pdf"
        download="cv-muhammad-iqbal.pdf"
        className={styles.cvButton}
      >
        Download CV
      </a>

    </aside>
  );
}
