import Link from "next/link";

const projects = [
  {
    title: "Northstar Retail",
    category: "Database / Business Systems",
    description:
      "A realistic SQL business operations simulation built around real analytical and support requests.",
    status: "Available",
    href: "/projects/northstar-retail",
    featured: true,
  },
  {
    title: "Operations Intelligence Platform",
    category: "Software / Systems",
    description:
      "A planned full-stack operational platform combining application logic, APIs, workflows, and structured data.",
    status: "Planned",
    href: null,
    featured: false,
  },
  {
    title: "Business Analytics Suite",
    category: "Data / BI",
    description:
      "A planned analytics project focused on SQL transformation, reporting, dashboards, and business insight.",
    status: "Planned",
    href: null,
    featured: false,
  },
  {
    title: "Earlier Technical Work",
    category: "Development / Coursework",
    description:
      "Selected earlier programming and technical projects demonstrating broader software foundations.",
    status: "Archive",
    href: "/projects",
    featured: false,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="featured-work">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected Work</p>

          <h2>
            Software, data, and systems projects built around real problems.
          </h2>
        </div>

        <p className="work-intro">
          Current work, completed case studies, and projects already planned for
          the portfolio roadmap.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const cardClasses = [
            "project-card",
            project.featured ? "project-card-featured" : "",
            !project.href ? "project-card-locked" : "",
          ]
            .filter(Boolean)
            .join(" ");

          const content = (
            <>
              <div className="project-card-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`project-status ${
                    !project.href ? "planned-status" : ""
                  }`}
                >
                  {!project.href && <span className="lock-icon">⌁</span>}
                  {project.status}
                </span>
              </div>

              <div className="project-card-body">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-card-description">
                  {project.description}
                </p>
              </div>

              <div className="project-card-footer">
                {project.href ? (
                  <span className="project-open">Explore Project →</span>
                ) : (
                  <span className="project-coming">
                    In portfolio roadmap
                  </span>
                )}
              </div>
            </>
          );

          if (project.href) {
            return (
              <Link
                key={project.title}
                href={project.href}
                className={cardClasses}
              >
                {content}
              </Link>
            );
          }

          return (
            <article key={project.title} className={cardClasses}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}