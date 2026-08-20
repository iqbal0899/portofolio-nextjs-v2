import Link from "next/link";
import Image from "next/image";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>

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

      <nav className={styles.sidebarNav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </aside>
  );
}