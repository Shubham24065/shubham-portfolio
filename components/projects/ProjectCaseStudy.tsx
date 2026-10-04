import Link from "next/link";

export type ProjectSection = {
  number: string;
  title: string;
  content: string;
  visual?: "architecture" | "deployment";
};

type ProjectCaseStudyProps = {
  number: string;
  category: string;
  status: string;
  title: string;
  headline: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  sections: ProjectSection[];
  github?: string;
  live?: string;
};

function ArchitectureVisual() {
  return (
    <div className="architecture-flow">
      <div className="architecture-node">
        <span>01</span>
        <strong>Browser</strong>
        <small>Portfolio Interface</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>02</span>
        <strong>Next.js</strong>
        <small>Application Layer</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>03</span>
        <strong>API Routes</strong>
        <small>Server Logic</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>04</span>
        <strong>External Services</strong>
        <small>Resend</small>
      </div>
    </div>
  );
}

function DeploymentVisual() {
  return (
    <div className="architecture-flow">
      <div className="architecture-node">
        <span>01</span>
        <strong>Local Development</strong>
        <small>Next.js / TypeScript</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>02</span>
        <strong>GitHub</strong>
        <small>Version Control</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>03</span>
        <strong>Vercel</strong>
        <small>Build & Deployment</small>
      </div>

      <div className="architecture-connector">
        <span>→</span>
      </div>

      <div className="architecture-node">
        <span>04</span>
        <strong>Production</strong>
        <small>Live Portfolio</small>
      </div>
    </div>
  );
}

function SectionVisual({
  visual,
}: {
  visual?: ProjectSection["visual"];
}) {
  if (visual === "architecture") {
    return <ArchitectureVisual />;
  }

  if (visual === "deployment") {
    return <DeploymentVisual />;
  }

  return null;
}

export default function ProjectCaseStudy({
  number,
  category,
  status,
  title,
  headline,
  description,
  role,
  year,
  technologies,
  sections,
  github,
  live,
}: ProjectCaseStudyProps) {
  return (
    <main className="case-study">

      {/* HERO */}
      <section className="case-study-hero">
        <div className="case-study-container">

          <Link href="/#work" className="case-study-back">
            ← Back to projects
          </Link>

          <div className="case-study-meta">
            <span>{number}</span>
            <span>{category}</span>

            <span className="case-study-status">
              <i />
              {status}
            </span>
          </div>

          <h1>{title}</h1>

          <h2>{headline}</h2>

          <p className="case-study-description">
            {description}
          </p>

          <div className="case-study-actions">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                View GitHub ↗
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="case-study-primary-action"
              >
                View live project ↗
              </a>
            )}
          </div>

        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="case-study-overview">
        <div className="case-study-container">

          <p className="case-study-kicker">
            PROJECT OVERVIEW
          </p>

          <div className="case-study-overview-grid">

            <div>
              <span>ROLE</span>
              <strong>{role}</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>{year}</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>{status}</strong>
            </div>

          </div>

          <div className="case-study-stack">
            <span>TECHNOLOGY</span>

            <div>
              {technologies.map((technology) => (
                <strong key={technology}>
                  {technology}
                </strong>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <section className="case-study-content">
        <div className="case-study-container">

          {sections.map((section) => (
            <article
              className="case-study-section"
              key={section.number}
            >
              <div className="case-study-section-number">
                {section.number}
              </div>

              <div className="case-study-section-body">
                <h3>{section.title}</h3>

                <p>{section.content}</p>

                <SectionVisual visual={section.visual} />
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="case-study-footer">
        <div className="case-study-container">

          <p>EXPLORE MORE WORK</p>

          <Link href="/#work">
            ← Back to all projects
          </Link>

        </div>
      </section>

    </main>
  );
}