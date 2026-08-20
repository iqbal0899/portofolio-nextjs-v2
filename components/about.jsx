import { UserRound, MapPin, Briefcase } from "lucide-react";
import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.heading}>
        <span>01 — ABOUT ME</span>
        <h2>About Me</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.intro}>
            Halo! Saya <strong>Muhammad Iqbal</strong>, seorang
            Fullstack Developer yang memiliki ketertarikan dalam
            membangun aplikasi web modern, responsif, dan mudah
            digunakan.
          </p>

          <p>
            Saya senang mengubah ide menjadi sebuah website yang
            memiliki tampilan menarik sekaligus memiliki fungsi
            yang baik. Saya juga terus belajar teknologi baru
            untuk meningkatkan kemampuan dalam pengembangan web.
          </p>

          <p>
            Dalam proses pengembangan, saya memperhatikan struktur
            kode, performa aplikasi, responsive design, serta
            pengalaman pengguna.
          </p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoCard}>
            <UserRound size={20} />
            <div>
              <span>Name</span>
              <strong>Muhammad Iqbal</strong>
            </div>
          </div>

          <div className={styles.infoCard}>
            <Briefcase size={20} />
            <div>
              <span>Role</span>
              <strong>Fullstack Developer</strong>
            </div>
          </div>

          <div className={styles.infoCard}>
            <MapPin size={20} />
            <div>
              <span>Location</span>
              <strong>Indonesia</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}