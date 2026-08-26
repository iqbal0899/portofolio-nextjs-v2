import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>

        <h1>Page Not Found</h1>

        <p>
          Maaf, halaman yang kamu cari tidak ditemukan
          atau mungkin sudah dipindahkan.
        </p>

        <Link href="/" className={styles.button}>
          Kembali ke Home
        </Link>
      </div>
    </main>
  );
}