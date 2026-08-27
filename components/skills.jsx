import {
  Code2,
  Server,
  Database,
  Palette,
  Network,
  WrenchOff,
} from "lucide-react";

import styles from "./skills.module.css";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Membangun interface yang responsive dan interaktif.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Membangun REST API dan server-side application.",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Middleware",
    ],
  },
  {
    icon: Database,
    title: "Database",
    description:
      "Mengelola data dan membuat struktur database.",
    items: [
      "MySQL",
      "PostgreSQL",
      "Neon",
    ],
  },
  {
    icon: WrenchOff,
    title: "Trouble Shoot",
    description:
      "Memecahkan masalah yang sering terjadi pada user.",
    items: [
      "Windows",
      "Microsoft Office",
      "Remote",
    ],
  },
   {
    icon: Network,
    title: "Networking",
    description:
      "Menggambar Topologi serta konfigurasi jaringan hingga ready to use",
    items: [
      "Wi-Fi",
      "Static",
      "Meraki Cisco",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
    >
      <div className={styles.heading}>
        <span>03 — MY EXPERTISE</span>

        <h2>Skills</h2>

        <p>
          Teknologi yang saya gunakan
          dalam bekerja.
        </p>
      </div>

      <div className={styles.grid}>
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article
              key={skill.title}
              className={styles.card}
            >
              <div className={styles.icon}>
                <Icon size={23} />
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className={styles.list}>
                {skill.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}