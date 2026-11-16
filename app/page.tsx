
import Link from "next/link";

const projects = [
  {
    title: "AETHRA",
    category: "NASA Space Apps 2026",
    description:
      "An astronaut health monitoring and decision support system designed for space missions.",
    tags: ["Next.js", "TypeScript", "Health Monitoring"],
    link: "https://github.com/sayma-sultana-isra/AETHRA--Astronauts-Health-Monitor",
  },
  {
    title: "AnaeCare",
    category: "Deep Learning Research",
    description:
      "A multimodal deep learning framework for non-invasive anemia pre-screening.",
    tags: ["Python", "Deep Learning", "Computer Vision"],
    link: "#",
  },
  {
    title: "Deepfake Detection",
    category: "Machine Learning",
    description:
      "A deepfake detection project using transfer learning and pretrained CNN models.",
    tags: ["Python", "CNN", "Transfer Learning"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#172033]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-xl font-bold tracking-tight">
          SS<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden gap-8 text-sm text-gray-600 md:flex">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm hover:bg-[#172033] hover:text-white"
        >
          Let's Talk
        </a>
      </nav>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Hello, welcome to my portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          I'm Sayma Sultana.
          <br />
          <span className="text-gray-400">
            Researcher & Developer.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          I am interested in Artificial Intelligence, Machine Learning,
          research, and building meaningful software solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#172033] px-7 py-3 text-sm text-white transition hover:bg-blue-700"
          >
            Explore My Work ↗
          </a>
          <a
            href="https://github.com/sayma-sultana-isra"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-7 py-3 text-sm transition hover:border-[#172033]"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            01 / About
          </p>
          <h2 className="mt-5 text-4xl font-semibold">A little about me.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
            I am a Computer Science and Engineering student at United
            International University, Bangladesh. My interests include
            AI/ML research, software development, and solving real-world
            problems through technology.
          </p>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          02 / Research
        </p>
        <h2 className="mt-5 text-4xl font-semibold">
          Research & Publications
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm text-blue-600">STPA · ICCIT 2026</p>
            <h3 className="mt-4 text-xl font-semibold">
              Semantic Task-Conditioned Perceptual Adaptation
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Research on semantic task-conditioned perceptual adaptation.
              Update the publication status and author details accurately.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-sm text-blue-600">Green Computing · RAG</p>
            <h3 className="mt-4 text-xl font-semibold">EcoRetry</h3>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Research exploring energy-aware approaches to retrieval
              augmented generation.
            </p>
          </article>
        </div>
      </section>

      <section id="projects" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            03 / Selected Work
          </p>
          <h2 className="mt-5 text-4xl font-semibold">Featured Projects.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-block text-sm font-semibold hover:text-blue-600"
                >
                  View Project ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          04 / Skills
        </p>
        <h2 className="mt-5 text-4xl font-semibold">Tools I work with.</h2>
        <div className="mt-9 flex flex-wrap gap-3">
          {[
            "Python",
            "Java",
            "C++",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "MySQL",
            "Machine Learning",
            "Deep Learning",
            "Git & GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-300 px-5 py-3 text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#172033] text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-blue-300">
            05 / Contact
          </p>
          <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
            Let's connect.
          </h2>
          <p className="mt-5 text-gray-300">
            Interested in research, collaboration, or opportunities?
            Feel free to reach out.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#172033]"
          >
            Email Me ↗
          </a>
          <div className="mt-20 border-t border-gray-700 pt-7 text-sm text-gray-400">
            © 2026 Sayma Sultana. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
