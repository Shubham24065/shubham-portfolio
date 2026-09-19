const experiences = [
  {
    period: "May 2026 – Present",
    role: "Operations Intern",
    company: "Pocketride Inc.",
    type: "Co-op II",
    mark: "P",
    featured: true,
    description:
      "Support application operations, QA and help desk workflows for a live ride-share platform, working with operational data, system records and internal tools to investigate issues, verify information and support reliable platform processes.",
    technologies: [
      "Application Support",
      "Operational Data",
      "QA",
      "HubSpot",
      "Jira",
    ],
  },
  {
    period: "Sep 2025 – Dec 2025",
    role: "Full Stack Software Developer Intern",
    company: "NeedList.org",
    type: "Co-op I",
    mark: "N",
    featured: false,
    description:
      "Contributed to application development using FlutterFlow and Firebase, working with Firestore-backed application data and backend-connected functionality to support reliable data storage, retrieval and application workflows.",
    technologies: [
      "Firestore",
      "Firebase",
      "Data Management",
      "FlutterFlow",
      "Application Development",
    ],
  },
  {
    period: "May 2025 – Aug 2025",
    role: "Frontend Developer Intern",
    company: "Vosyn",
    type: "Summer Internship",
    mark: "V",
    featured: false,
    description:
      "Contributed to frontend application development, building data-driven user interfaces and integrating application components with structured data and backend services within a collaborative development environment.",
    technologies: [
      "Frontend Development",
      "Data Integration",
      "Application Development",
      "APIs",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Heading */}
        <div className="experience-heading">
          <div>
            <p className="experience-kicker">
              <span />
              EXPERIENCE
            </p>

            <h2>
              Work beyond
              <br />
              <span>the classroom.</span>
            </h2>
          </div>

          <p className="experience-intro">
            Experience across software development, application data,
            operations and support — building a broader understanding of how
            technology works in real environments.
          </p>
        </div>

        {/* Main content */}
        <div className="experience-layout">
          {/* Timeline */}
          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <div
                className={`experience-row ${
                  experience.featured ? "experience-featured" : ""
                }`}
                key={experience.company}
              >
                <div className="timeline-meta">
                  <span
                    className={`timeline-dot ${
                      experience.featured ? "timeline-dot-active" : ""
                    }`}
                  />

                  <div>
                    <strong>{experience.period}</strong>
                    <span>{experience.type}</span>
                  </div>
                </div>

                <article className="experience-card">
                  <div className="experience-card-header">
                    <div className="experience-company">
                      <div className="experience-logo">
                        {experience.mark}
                      </div>

                      <div>
                        <h3>{experience.role}</h3>
                        <p>{experience.company}</p>
                      </div>
                    </div>

                    <span className="experience-type">
                      {experience.type}
                    </span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-tags">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Right-side supporting panel */}
          <aside className="experience-side">
            <div className="experience-system-card">
              <p className="experience-system-label">
                EXPERIENCE / PERSPECTIVE
              </p>

              <div className="experience-system-graphic">
                <div className="system-node">
                  <span>01</span>
                  <strong>Applications</strong>
                </div>

                <div className="system-line" />

                <div className="system-node">
                  <span>02</span>
                  <strong>Data</strong>
                </div>

                <div className="system-line" />

                <div className="system-node">
                  <span>03</span>
                  <strong>Systems</strong>
                </div>
              </div>

              <div className="experience-system-message">
                <span className="quote-mark">“</span>

                <p>
                  Different roles. One growing understanding of how applications, data and systems connect.
                </p>
              </div>
            </div>

            <div className="experience-strengths">
              <div>
                <span className="strength-icon">⌘</span>
                <strong>Systems</strong>
                <p>Understanding how technology supports real workflows.</p>
              </div>

              <div>
                <span className="strength-icon">◇</span>
                <strong>Problem Solving</strong>
                <p>Working through practical technical challenges.</p>
              </div>

              <div>
                <span className="strength-icon">↗</span>
                <strong>Growth</strong>
                <p>Building deeper technical capability across roles.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="experience-footer">
          <p>
            <span />
            DIFFERENT ROLES. A STRONGER FOUNDATION.
          </p>

          <p>
            SOFTWARE · DATA · SYSTEMS · OPERATIONS
          </p>
        </div>
      </div>
    </section>
  );
}