import Link from "next/link";

type ProjectStatus = "Active" | "Completed" | "In Development" | "Planned";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  href?: string;
  preview: "northstar" | "portfolio" | "locked";
};

const projects: Project[] = [
  {
    number: "01",
    category: "FULL STACK / WEB",
    title: "Developer Portfolio",
    description:
      "Production portfolio engineered as a full-stack web application to present software, data, systems, and technical work through structured, interactive case studies.",
    status: "Active",
    technologies: ["Next.js", "React", "TypeScript", "Resend", "Vercel"],
    href: "/projects/developer-portfolio",
    preview: "portfolio",
  },
  {
    number: "02",
    title: "Northstar Retail",
    category: "DATA / SQL",
    description:
      "SQL business operations simulation for a fictional e-commerce company. Built analytical reporting, customer insights and inventory risk analysis.",
    status: "Completed",
    technologies: [
      "SQL Server",
      "T-SQL",
      "Data Analytics",
      "Business Operations",
    ],
    href: "/projects/northstar-retail",
    preview: "northstar",
  },
  {
    number: "03",
    title: "Sales Data Platform",
    category: "DATA ENGINEERING",
    description:
      "End-to-end data pipeline and analytics platform to process, store and visualize sales data at scale.",
    status: "In Development",
    technologies: ["Python", "SQL", "ETL", "Power BI"],
    preview: "locked",
  },
  {
    number: "04",
    title: "IT Support Toolkit",
    category: "SYSTEMS",
    description:
      "Tools and automation scripts for application support and system administration tasks.",
    status: "Planned",
    technologies: ["PowerShell", "Python", "APIs", "Automation"],
    preview: "locked",
  },
];

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }: { status: ProjectStatus }) {
  const statusClass =
    status === "Active"
      ? "status-active"
      : status === "Completed"
        ? "status-completed"
        : status === "In Development"
          ? "status-development"
          : "status-planned";

  return (
    <span className={`work-status ${statusClass}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}

/* =========================================================
   DEVELOPER PORTFOLIO PREVIEW
========================================================= */

function PortfolioPreview() {
  return (
    <div className="project-preview portfolio-preview">
      <div className="portfolio-preview-grid" />

      <div className="portfolio-preview-header">
        <div className="portfolio-preview-brand">
          <span className="portfolio-preview-brand-mark">SK</span>

          <div>
            <strong>SHUBHAM KAUSHIK</strong>
            <small>SOFTWARE · DATA · SYSTEMS</small>
          </div>
        </div>

        <div className="portfolio-preview-nav">
          <span>Work</span>
          <span>Experience</span>
          <span>About</span>
        </div>
      </div>

      <div className="portfolio-preview-body">
        <div className="portfolio-preview-copy">
          <small>DEVELOPER PORTFOLIO</small>

          <strong>
            Building software
            <br />
            around <em>real problems.</em>
          </strong>

          <p>
            Applications, data and systems brought together through practical
            engineering.
          </p>

          <div className="portfolio-preview-actions">
            <span>Selected work</span>
            <span>GitHub ↗</span>
          </div>
        </div>

        <div className="portfolio-preview-system">
          <div className="portfolio-system-card portfolio-system-card-one">
            <small>01</small>
            <strong>WEB</strong>
          </div>

          <div className="portfolio-system-card portfolio-system-card-two">
            <small>02</small>
            <strong>DATA</strong>
          </div>

          <div className="portfolio-system-card portfolio-system-card-three">
            <small>03</small>
            <strong>SYSTEMS</strong>
          </div>

          <span className="portfolio-system-line line-one" />
          <span className="portfolio-system-line line-two" />
        </div>
      </div>

      <div className="portfolio-preview-footer">
        <span>NEXT.JS</span>
        <span>REACT</span>
        <span>TYPESCRIPT</span>

        <strong>BUILD WITH PURPOSE.</strong>
      </div>
    </div>
  );
}

/* =========================================================
   NORTHSTAR PREVIEW
========================================================= */

function NorthstarPreview() {
  return (
    <div className="project-preview northstar-preview">
      <div className="preview-sidebar">
        <strong>Northstar Retail</strong>

        <span>▣ Dashboard</span>
        <span>▤ Sales</span>
        <span>◎ Customers</span>
        <span>□ Products</span>
        <span>▥ Inventory</span>
      </div>

      <div className="preview-dashboard">
        <div className="preview-metrics">
          <div>
            <small>Total Revenue</small>
            <strong>$1,245,680</strong>
            <em>+12.5%</em>
          </div>

          <div>
            <small>Total Orders</small>
            <strong>8,432</strong>
            <em>+8.1%</em>
          </div>
        </div>

        <div className="preview-chart">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LOCKED PROJECT PREVIEW
========================================================= */

function LockedPreview({ status }: { status: ProjectStatus }) {
  return (
    <div className="project-preview locked-preview">
      <div className="blurred-dashboard">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="lock-overlay">
        <div className="css-lock">
          <span />
        </div>

        <strong>{status}</strong>

        <p>
          {status === "Planned"
            ? "This project is planned for the near future. More details will be shared soon."
            : "This project is currently being built. Details will be available soon."}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="work-card-copy">
        <div className="work-card-meta">
          <p>
            <strong>{project.number}</strong>
            <span>{project.category}</span>
          </p>

          <StatusBadge status={project.status} />
        </div>

        <h3>{project.title}</h3>

        <p className="work-card-description">{project.description}</p>
      </div>

      {project.preview === "portfolio" && <PortfolioPreview />}

      {project.preview === "northstar" && <NorthstarPreview />}

      {project.preview === "locked" && (
        <LockedPreview status={project.status} />
      )}

      <div className="work-card-bottom">
        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.href && (
          <div className="case-study-link">
            View case study <span>→</span>
          </div>
        )}
      </div>
    </>
  );
}

/* =========================================================
   FEATURED WORK SECTION
========================================================= */

export default function FeaturedWork() {
  return (
    <section id="work" className="featured-work-v2">
      <div className="work-container">

        {/* SECTION HEADING */}

        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected Work</p>

            <h2>
              Projects that <span>solve real problems.</span>
            </h2>
          </div>

          <p className="work-intro">
            A collection of software, data and systems projects built around
            practical, real-world use cases. Each project represents a
            different problem, domain and technology stack.
          </p>

          <Link href="/projects" className="view-all-projects">
            View all projects <span>→</span>
          </Link>
        </div>

        {/* PROJECT GRID */}

        <div className="work-project-grid">
          {projects.map((project) => {
            const cardClasses = [
              "work-project-card",
              project.number === "01" ? "primary-project" : "",
              project.href
                ? "project-card-clickable"
                : "project-card-disabled",
            ]
              .filter(Boolean)
              .join(" ");

            if (project.href) {
              return (
                <Link
                  key={project.number}
                  href={project.href}
                  className={cardClasses}
                  aria-label={`View ${project.title} case study`}
                >
                  <ProjectCardContent project={project} />
                </Link>
              );
            }

            return (
              <article
                key={project.number}
                className={cardClasses}
                aria-disabled="true"
              >
                <ProjectCardContent project={project} />
              </article>
            );
          })}
        </div>

        {/* UTILITY CARDS */}

        <div className="work-utility-grid">

          <a
            href="https://github.com/Shubham24065"
            target="_blank"
            rel="noreferrer"
            className="utility-card"
          >
            <div className="utility-icon">GH</div>

            <div>
              <strong>Visit my GitHub</strong>

              <p>Explore code, experiments and ongoing work.</p>
            </div>

            <span className="utility-arrow">→</span>
          </a>

          <div className="utility-card">
            <div className="utility-icon">▤</div>

            <div>
              <strong>Project documentation</strong>

              <p>Detailed documentation and setup guides.</p>
            </div>

            <span className="utility-arrow">→</span>
          </div>

          <div className="utility-card">
            <div className="utility-icon">◉</div>

            <div>
              <strong>Have an idea?</strong>

              <p>
                I&apos;m always open to interesting problems and collaborations.
              </p>
            </div>

            <span className="utility-arrow">→</span>
          </div>
        </div>

        {/* SECTION FOOTER */}

        <div className="work-footer-line">
          <p>
            <span />
            DIFFERENT PROBLEMS. SAME APPROACH.
          </p>

          <p>
            <span />
            TURNING IDEAS
            <br />
            INTO REAL SOLUTIONS.
          </p>
        </div>
      </div>
    </section>
  );
}