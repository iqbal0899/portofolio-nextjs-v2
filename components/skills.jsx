import {
  Code2,
  Server,
  Database,
  Palette,
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
    icon: Palette,
    title: "Tools",
    description:
      "Tools yang digunakan untuk development.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
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
          Teknologi dan tools yang saya gunakan
          dalam membangun aplikasi web.
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