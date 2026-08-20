import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import styles from "./projects.module.css";

const projects = [
  {
    number: "01",
    title: "Chill Streaming",
    description:
      "Aplikasi streaming film dengan fitur login, register, pencarian film, filter genre, detail film, dan sistem daftar tontonan.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    number: "02",
    title: "Portfolio Website",
    description:
      "Website portfolio pribadi yang menampilkan profile, skills, project, dan contact dengan desain modern dan responsive.",
    technologies: [
      "Next.js",
      "React",
      "CSS",
    ],
  },
  {
    number: "03",
    title: "To-Do List",
    description:
      "Aplikasi manajemen tugas dengan fitur menambahkan task, status selesai, deadline, waktu, dan penanda overdue.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.heading}>
        <span>02 — MY WORK</span>

        <h2>My Projects</h2>

        <p>
          Beberapa project yang pernah saya kerjakan
          selama belajar dan mengembangkan kemampuan
          sebagai web developer.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article
            key={project.number}
            className={styles.card}
          >
            <div className={styles.top}>
              <span className={styles.number}>
                {project.number}
              </span>

              <div className={styles.links}>
                <a href="#" aria-label="Github">
                  <FaGithub size={17} />
                </a>

                <a href="#" aria-label="Live demo">
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className={styles.technologies}>
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}