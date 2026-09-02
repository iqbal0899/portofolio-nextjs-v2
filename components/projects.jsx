import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import styles from "./projects.module.css";

const projects = [
  {
    number: "01",
    title: "Chill Streaming",

    description:
      "Aplikasi streaming film dengan fitur login, register, pencarian film, filter genre, detail film, dan sistem daftar tontonan.",

    github:
      "https://github.com/iqbal0899/Fullstack-PostgreSQL.git",

    live:
      "/project-not-found",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "Knex.js",
      "JWT",
      "Middleware",
      "Node Mailer",
      "MySQL",
    ],
  },

  {
    number: "02",
    title: "To-Do List",

    description:
      "Aplikasi manajemen tugas dengan fitur menambahkan task, status selesai, deadline, waktu, dan penanda overdue.",

    github:
      "https://github.com/iqbal0899/To-Do-List.git",

    live:
      "https://to-do-list-blond-kappa-90.vercel.app/",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    number: "03",
    title: "App-Kasir",

    description:
      "Aplikasi manajemen penjualan toko kopi dengan fitur role user, filtering by category, produk, transaksi, dan laporan.",

    github:
      "https://github.com/iqbal0899/kasir-nextjs.git",

    live:
      "https://kasir-nextjs-odzzoitmg-iqbal0899s-projects.vercel.app/auth/login",

    technologies: [
      "Next.js",
      "JWT",
      "Middleware",
      "React",
      "Prisma",
      "Neon PostgreSQL",
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
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Github ${project.title}`}
                  title="View Github"
                >
                  <FaGithub size={17} />
                </a>

                {/* Live Project */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo ${project.title}`}
                  title="Live Demo"
                >
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