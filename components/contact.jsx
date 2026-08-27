import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className={styles.heading}>
        <span>04 — GET IN TOUCH</span>

        <h2>Let's Talk</h2>

        <p>
          Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      <div className={styles.wrapper}>

        {/* CONTACT INFORMATION */}
        <div className={styles.info}>

          <div className={styles.infoItem}>
            <Mail size={20} />

            <div>
              <span>Email</span>

              <a href="mailto:iqbalshl08@email.com">
                iqbalshl08@email.com
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <MapPin size={20} />

            <div>
              <span>Location</span>

              <p>Indonesia</p>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className={styles.social}>

            <a
              href="https://github.com/iqbal0899"
              aria-label="Github"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-iqbal-a6278a223?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.row}>

            <input
              type="text"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              placeholder="Your email"
              required
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Your message..."
            rows="6"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>

      {/* <footer className={styles.footer}>
        <p>
          © 2026 Muhammad Iqbal. All rights reserved.
        </p>
      </footer> */}

    </section>
  );
}