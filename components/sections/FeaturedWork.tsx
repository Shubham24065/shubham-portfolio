import Link from "next/link";

type ProjectStatus = "Completed" | "In Development" | "Planned";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  href?: string;
  preview: "northstar" | "campus" | "locked";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Northstar Retail",
    category: "Data / SQL",
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
    number: "02",
    title: "CampusConnect",
    category: "Full Stack",
    description:
      "Campus event management platform with authentication, event listings and an admin dashboard for students and clubs.",
    status: "Completed",
    technologies: ["React", "Node.js", "MySQL", "Authentication"],
    href: "/projects/campus-connect",
    preview: "campus",
  },
  {
    number: "03",
    title: "Sales Data Platform",
    category: "Data Engineering",
    description:
      "End-to-end data pipeline and analytics platform to process, store and visualize sales data at scale.",
    status: "In Development",
    technologies: ["Python", "SQL", "ETL", "Power BI"],
    preview: "locked",
  },
  {
    number: "04",
    title: "IT Support Toolkit",
    category: "Systems",
    description:
      "Tools and automation scripts for application support and system administration tasks.",
    status: "Planned",
    technologies: ["PowerShell", "Python", "APIs", "Automation"],
    preview: "locked",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const statusClass =
    status === "Completed"
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

function CampusPreview() {
  return (
    <div className="project-preview campus-preview">
      <div className="campus-sidebar">
        <strong>CampusConnect</strong>
        <span>⌂ Home</span>
        <span>□ Events</span>
        <span>☆ My Events</span>
        <span>◯ Clubs</span>
        <span>☰ Messages</span>
      </div>

      <div className="campus-content">
        <small>STUDENT PLATFORM</small>

        <strong>
          Discover Events
          <br />
          Build Connections
        </strong>

        <p>Find events, join clubs and be part of a bigger community.</p>

        <div className="fake-search">Search for events...</div>
      </div>
    </div>
  );
}

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

      {project.preview === "northstar" && <NorthstarPreview />}

      {project.preview === "campus" && <CampusPreview />}

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
          <div className="utility-card">
            <div className="utility-icon">◇</div>

            <div>
              <strong>More projects coming</strong>
              <p>
                Additional data, systems and development projects in progress.
              </p>
            </div>

            <span className="utility-arrow">→</span>
          </div>

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