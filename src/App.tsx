import { useEffect, useState } from "react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type NavItem = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  demoUrl: string;
  image?: string;
  previewLabel?: string;
  previewNote?: string;
};

type SkillItem = {
  name: string;
  icon: string;
  iconClassName?: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects: Project[] = [
  {
    category: "Freelance",
    title: "Cequena Training and Consultancy",
    description:
      "A training and consultancy website for a PRC-accredited provider, built to present webinars, learning paths, company information, and contact pathways for educators and learners.",
    stack: ["React", "Vite", "Typescript", "Tailwind CSS", "Responsive UI"],
    demoUrl: "https://cequenatraining.com/",
    image: asset("img/ctc_training.png"),
  },
  {
    category: "Freelance",
    title: "Florida Home Team Realty",
    description:
      "A real estate website for a licensed broker offering residential buying and selling services across Florida, with a focus on the Orlando area.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "WordPress", "PHP"],
    demoUrl: "https://stacysellshomes.com",
    image: asset("img/stacy.png"),
  },
  {
    category: "Freelance",
    title: "Excel Realty & Mortgage",
    description:
      "A personal real estate website showcasing top-tier buyer, seller, and relocation services throughout the Tri-Valley and San Francisco Bay Area.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "WordPress", "PHP"],
    demoUrl: "https://soldbylouisa.com/",
    image: asset("img/louisa.png"),
  },
  {
    category: "Capstone",
    title: "MIHIS",
    description:
      "A health information system designed to manage malnutrition and immunization records, featuring e-vaccination cards, schedule tracking, and automated SMS and email notifications for parents and healthcare workers.",
    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "ExpressJS",
      "NodeJS",
      "Typescript",
      "Angular",
      "MongoDB",
      "Fetch API",
    ],
    demoUrl: "https://drive.google.com/file/d/1h0Rs35EeU75jgjwuIQp03ufup37aPrcC/view?t=10",
    image: asset("img/mihis.png"),
  },
  {
    category: "OJT",
    title: "CipherKey Ticketing System",
    description:
      "A secure ticket management platform for PhilHealth that streamlines request submissions, document handling, and status tracking, with built-in validation, file uploads, and email notifications.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP", "CodeIgniter", "MySQL"],
    demoUrl: "https://drive.google.com/file/d/1SZT_GJB6aqMV4X3AV-xlSRxek03Z5wVX/view?t=2",
    image: asset("img/cypher.png"),
  },
  {
    category: "Personal",
    title: "Music Chords",
    description:
      "A mobile-first chord-sheet web app for searching songs, reading chord sheets, transposing keys client-side, managing lineups, and handling editor publishing workflows without audio or playback features.",
    stack: [
      "React 19",
      "React Router 7",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "PostgreSQL",
    ],
    demoUrl: "https://music-chords.tech/",
    image: asset("img/music_chords.png"),
  },
];

const groupedProjects = Array.from(
  projects.reduce<Map<string, Project[]>>((map, project) => {
    const current = map.get(project.category) ?? [];
    current.push(project);
    map.set(project.category, current);
    return map;
  }, new Map()),
);

const skills: SkillItem[] = [
  { name: "HTML", icon: asset("img/html-logo.svg") },
  { name: "CSS", icon: asset("img/css-logo.svg") },
  { name: "Bootstrap", icon: asset("img/bootstrap-logo.svg") },
  { name: "Javascript", icon: asset("img/js-logo.svg") },
  { name: "jQuery", icon: asset("img/jquery-logo.svg") },
  { name: "Typescript", icon: asset("img/typescript-logo.svg") },
  { name: "ExpressJs", icon: asset("img/express-logo.svg") },
  { name: "NodeJs", icon: asset("img/node-logo.svg") },
  { name: "Angular", icon: asset("img/angular-icon.svg"), iconClassName: "w-14" },
  { name: "React", icon: asset("img/react-logo.svg") },
  { name: "PHP", icon: asset("img/php-logo.svg") },
  { name: "CodeIgniter", icon: asset("img/codeigniter.svg"), iconClassName: "w-10" },
  { name: "MySQL", icon: asset("img/mysql-logo.svg") },
  { name: "MongoDB", icon: asset("img/mongodb-logo.svg") },
  { name: "WordPress", icon: asset("img/wordpress-logo.svg") },
];

const tools: SkillItem[] = [
  { name: "Git", icon: asset("img/git-logo.svg") },
  { name: "Github", icon: asset("img/github-logo.svg") },
  { name: "Figma", icon: asset("img/figma-logo.svg") },
  { name: "Photoshop", icon: asset("img/photoshop-logo.svg") },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/efraim.gondraneos.3/",
    icon: <FacebookIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/mastereps",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/efraim-gondraneos-2b016137a/",
    icon: <LinkedInIcon />,
  },
];

const contactItems = [
  {
    label: "Email",
    href: "mailto:efraim.gondraneos@gmail.com",
    value: "efraim.gondraneos@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "Phone",
    href: "tel:+639683799097",
    value: "+63 968 379 9097",
    icon: <PhoneIcon />,
  },
  {
    label: "Location",
    href: "https://www.google.com/maps/place/Pine+Crest+by+Vista+Residences/@14.6158389,121.0362472,17z/",
    value: "Pine Crest by Vista Residences",
    icon: <PinIcon />,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand/10 bg-brand-soft/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold tracking-[0.18em] text-ink sm:text-2xl">
              master eps
            </span>
            <img src={asset("img/happy.png")} alt="" className="h-10 w-10 object-contain" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="nav-link text-lg font-semibold text-ink" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={asset("docs/Efraim_Gondraneos_CV.pdf")}
              download="Efraim_Gondraneos_CV.pdf"
              className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Download my CV
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 bg-white/70 text-brand lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/55 transition lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(86vw,24rem)] flex-col gap-8 bg-brand-soft px-6 pb-8 pt-24 shadow-2xl transition-transform lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="nav-link inline-block text-lg font-semibold text-ink"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={asset("docs/Efraim_Gondraneos_CV.pdf")}
          download="Efraim_Gondraneos_CV.pdf"
          className="inline-flex w-fit rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          onClick={() => setMenuOpen(false)}
        >
          Download my CV
        </a>
      </nav>

      <main>
        <section
          id="hero"
          className="flex min-h-screen items-center px-5 pb-16 pt-32 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h1 className="hero-outline max-w-5xl text-center font-sans text-4xl font-bold leading-[1.35] sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]">
              Hey there! I&apos;m <span className="fill-text">Epe</span>, a passionate web
              developer who loves turning web designs into interactive and responsive
              websites.
            </h1>
          </div>
        </section>

        <section id="projects" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle label="My" highlight="Projects" />

            <div className="space-y-14">
              {groupedProjects.map(([groupName, items]) => (
                <div key={groupName} className="space-y-8">
                  <h3 className="font-serif text-3xl font-medium text-brand sm:text-4xl">
                    {groupName}
                  </h3>

                  <div className="space-y-10">
                    {items.map((project, index) => {
                      const reverse = index % 2 === 1;

                      return (
                        <article
                          key={project.title}
                          className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:gap-8"
                        >
                          <div
                            className={`order-1 overflow-hidden rounded-[1.75rem] shadow-card ${
                              reverse ? "lg:order-2" : ""
                            }`}
                          >
                            {project.image ? (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="block h-full bg-brand-soft"
                              >
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="h-full min-h-[260px] w-full object-cover object-top"
                                />
                              </a>
                            ) : (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-full min-h-[260px] flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(242,211,255,0.96)_36%,_rgba(122,30,161,0.92))] p-8 text-ink"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <span className="rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand">
                                    Freelance Build
                                  </span>
                                  <span className="text-sm font-semibold text-white/90">
                                    Live website
                                  </span>
                                </div>
                                <div className="space-y-3">
                                  <p className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                                    {project.previewLabel}
                                  </p>
                                  <p className="max-w-md text-base leading-7 text-ink/80">
                                    {project.previewNote}
                                  </p>
                                </div>
                              </a>
                            )}
                          </div>

                          <div
                            className={`order-2 flex flex-col justify-center ${
                              reverse ? "lg:order-1" : ""
                            }`}
                          >
                            <h4 className="text-2xl font-medium text-brand sm:text-3xl">
                              {project.title}
                            </h4>
                            <div className="mt-5 flex flex-wrap gap-2.5">
                              {project.stack.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-xl bg-brand px-3.5 py-2 text-sm font-semibold text-white"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                            <p className="mt-5 text-base leading-8 text-ink/80 sm:text-lg">
                              {project.description}
                            </p>
                            <a
                              className="mt-8 inline-flex w-fit rounded-xl border border-brand px-5 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demo
                            </a>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle highlight="Skills" />
            <SkillGrid items={skills} />

            <div className="pt-20">
              <SectionTitle highlight="Tools" compact />
              <SkillGrid items={tools} />
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle label="About" highlight="Me" />

            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_1.15fr]">
              <div className="about-frame flex justify-center rounded-[2rem] bg-cover bg-center p-4 sm:p-6"
                style={{ backgroundImage: `url(${asset("img/about-bg-accent.png")})` }}>
                <img
                  src={asset("img/about-me.JPG")}
                  alt="Efraim Gondraneos"
                  className="h-[420px] w-full max-w-md rounded-[999px] border-[6px] border-black object-cover sm:h-[560px]"
                />
              </div>

              <div className="space-y-4 text-justify text-base leading-8 text-ink/80 sm:text-lg">
                <p>
                  <em className="font-semibold text-ink">
                    Hi! I&apos;m Epe from Binangonan, Rizal, Philippines. I&apos;m a fresh
                    graduate from Jose Rizal University with experience as a freelance
                    front-end developer.
                  </em>{" "}
                  For my thesis, I independently built a full-stack MEAN application,
                  handling both the front-end and back-end development on my own.
                </p>
                <p>
                  As a developer, I specialize in translating designs into functional,
                  responsive, and user-friendly websites. I make sure each project is
                  optimized for performance, thoughtfully executed, and aligned with the
                  client&apos;s goals.
                </p>
                <p>
                  I believe collaboration is key to building great products. I work
                  closely with stakeholders to understand their needs and turn them into
                  practical features that ship efficiently and with quality.
                </p>
                <p>
                  Outside of coding, I value work-life balance. Playing guitar and
                  enjoying video games help me reset, stay creative, and sharpen my
                  problem-solving mindset.
                </p>
                <p>
                  I&apos;m focused on growing in the tech industry, contributing to useful
                  products, and continuing to push my skills forward with every project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 border-t border-black/10 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              &copy; Efraim Gondraneos {year}
            </h2>
          </div>

          <ul className="flex flex-1 items-center justify-center gap-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/15 bg-brand-soft text-brand transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-1 flex-col gap-3">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm font-medium text-ink transition hover:text-brand sm:text-base"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                    {item.icon}
                  </span>
                  <span>{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

type SectionTitleProps = {
  label?: string;
  highlight: string;
  compact?: boolean;
};

function SectionTitle({ label, highlight, compact = false }: SectionTitleProps) {
  return (
    <h2
      className={`font-serif text-center font-medium text-4xl sm:text-5xl ${
        compact ? "mb-10" : "mb-14"
      }`}
    >
      {label ? `${label} ` : ""}
      <span className="relative inline-block text-brand after:absolute after:-right-7 after:bottom-1/2 after:h-[2px] after:w-6 after:bg-brand">
        {highlight}
      </span>
    </h2>
  );
}

function SkillGrid({ items }: { items: SkillItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex min-h-[180px] flex-col items-center justify-center gap-5 rounded-2xl bg-brand-soft px-4 py-6 text-center"
        >
          <img
            src={item.icon}
            alt={item.name}
            className={`h-auto w-16 object-contain ${item.iconClassName ?? ""}`}
          />
          <em className="text-lg font-semibold not-italic text-ink sm:text-xl">{item.name}</em>
        </div>
      ))}
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M13.5 21v-8.06h2.7l.4-3.14H13.5V7.8c0-.91.25-1.53 1.56-1.53H16.7V3.46A21.5 21.5 0 0 0 14.3 3c-2.37 0-4 1.45-4 4.12V9.8H7.6v3.14h2.7V21h3.2Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C4 14.09 3.48 13.22 3.32 12.77c-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M5.5 8.5A1.75 1.75 0 1 0 5.5 5a1.75 1.75 0 0 0 0 3.5ZM4 20h3V10H4v10Zm5 0h3v-5.4c0-3 4-3.2 4 0V20h3v-6.4c0-5-5.7-4.8-7-2.4V10H9v10Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" aria-hidden="true">
      <path
        d="M7.5 4.5h2.4l1.2 4.1-1.7 1.7a14.2 14.2 0 0 0 4.3 4.3l1.7-1.7 4.1 1.2v2.4c0 .8-.7 1.5-1.5 1.5A13.5 13.5 0 0 1 4.5 7.5C4.5 6.7 5.2 6 6 6Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.3" strokeWidth="1.8" />
    </svg>
  );
}

export default App;






