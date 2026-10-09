
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
  preview: "northstar" | "portfolio" | "rideflow" | "hotel";
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
    category: "SOFTWARE / DATABASE",
    title: "Hotel Reservation System",
    description:
      "Desktop hotel management system featuring reservations, billing, loyalty programs, administrative workflows, and reporting, built on a three-tier architecture.",
    status: "Completed",
    technologies: ["Java", "JavaFX", "Hibernate/JPA", "MySQL"],
    href: "/projects/hotel-reservation-system",
    preview: "hotel",
  },
  {
    number: "03",
    title: "Northstar Retail",
    category: "DATA / SQL",
    description:
      "SQL business operations simulation for a fictional e-commerce company, covering analytical reporting, customer insights, revenue reconciliation, and inventory risk analysis.",
    status: "In Development",
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
    number: "04",
    title: "RideFlow",
    category: "DATABASE ENGINEERING",
    description:
      "Ride-sharing database system designed around operational workflows, relational modelling, data integrity, transactions, and database architecture.",
    status: "In Development",
    technologies: [
      "SQL Server",
      "T-SQL",
      "Relational Database Design",
      "Transactions",
      "Indexing",
    ],
    href: "/projects/rideflow",
    preview: "rideflow",
  },
];

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
   HOTEL RESERVATION SYSTEM PREVIEW
========================================================= */


function HotelPreview() {
  const features = [
    "Guest Reservations",
    "Billing & Payments",
    "Loyalty & Reporting",
  ];

  return (
    <div className="project-preview hotel-preview hotel-dashboard-preview">
      <div className="hotel-preview-header">
        <div>
          <small>HOTEL MANAGEMENT SYSTEM</small>
          <strong>Operations Overview</strong>
        </div>

        <span className="hotel-preview-indicator">JAVA</span>
      </div>

      <div className="hotel-dashboard-metrics">
        <div>
          
          <span>KIOSK BOOKING</span>
        </div>

        <div>
          
          <span>ADMIN PORTAL</span>
        </div>

        <div>
          
          <span>REPORTING</span>
        </div>
      </div>

      <div className="hotel-dashboard-features">
        {features.map((feature) => (
          <div key={feature}>
            <span>{feature}</span>
            <span className="hotel-feature-check">✓</span>
          </div>
        ))}
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
   RIDEFLOW PREVIEW
========================================================= */

function RideFlowPreview() {
  return (
    <div className="project-preview rideflow-preview">
      <div className="rideflow-preview-header">
        <div>
          <strong>RideFlow</strong>
          <span>DATABASE ARCHITECTURE</span>
        </div>

        <span className="rideflow-db-label">SQL</span>
      </div>

      <div className="rideflow-schema">
        <div className="rideflow-entity rideflow-rider">
          <small>01</small>
          <strong>RIDER</strong>
        </div>

        <div className="rideflow-entity rideflow-ride">
          <small>02</small>
          <strong>RIDE</strong>
        </div>

        <div className="rideflow-entity rideflow-driver">
          <small>03</small>
          <strong>DRIVER</strong>
        </div>

        <div className="rideflow-entity rideflow-vehicle">
          <small>04</small>
          <strong>VEHICLE</strong>
        </div>

        <div className="rideflow-entity rideflow-payment">
          <small>05</small>
          <strong>PAYMENT</strong>
        </div>

        <span className="rideflow-line line-rider-ride" />
        <span className="rideflow-line line-ride-driver" />
        <span className="rideflow-line line-driver-vehicle" />
        <span className="rideflow-line line-ride-payment" />
      </div>

      <div className="rideflow-preview-footer">
        <span>RELATIONAL MODEL</span>
        <span>DATA INTEGRITY</span>
        <span>TRANSACTIONS</span>
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
      {project.preview === "hotel" && <HotelPreview />}
      {project.preview === "northstar" && <NorthstarPreview />}
      {project.preview === "rideflow" && <RideFlowPreview />}

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
