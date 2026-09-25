const capabilityGroups = [
  {
    number: "01",
    title: "Data & Databases",
    description:
      "Designing, querying and working with structured application data.",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "IBM Db2",
      "T-SQL",
      "Database Design",
      "Relational Modeling",
      "Joins, CTEs & Subqueries",
      "Views & Stored Procedures",
      "Indexes & Optimization",
      "Transactions & ACID"
      ],
  },
  {
    number: "02",
    title: "Analytics",
    description:
      "Turning structured data into useful insights and business information.",
    skills: [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel",
      "SQL Analysis",
      "Data Cleaning & Validation",
      "Business Reporting",
      "Data Visualization",
      "Dashboard Development",
      "Analytical Queries"
    ],
  },
  {
    number: "03",
    title: "Systems & Support",
    description:
      "Supporting applications, investigating issues and improving workflows.",
    skills: [
      "Application Support",
      "Technical Troubleshooting",
      "REST APIs",
      "JSON",
      "Postman",
      "SQL Troubleshooting",
      "Incident Investigation",
      "Process Improvement",
      "Git / GitHub",
      "IBM i Fundamentals"
    ],
  },
  {
    number: "04",
    title: "Development & Tools",
    description:
      "Building, testing and maintaining applications and technical projects.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Git / GitHub",
      "VS Code",
      "REST APIs",
      "Resend",
      "Vercel"
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-section">
      <div className="capabilities-container">

        {/* Section heading */}
        <div className="capabilities-heading">
          <div className="capabilities-heading-copy">
            <p className="capabilities-kicker">
              <span />
              CAPABILITIES
            </p>

            <h2>
              Technology is the toolkit.
              <span>Solving real problems is the focus.</span>
            </h2>

            <p className="capabilities-intro">
              A focused set of technical capabilities developed through application development, data and database work, operational systems and practical projects.
            </p>
          </div>

          <a
            href="https://github.com/Shubham24065"
            target="_blank"
            rel="noreferrer"
            className="capabilities-github"
          >
            View my GitHub
            <span>→</span>
          </a>
        </div>

        {/* Main content */}
        <div className="capabilities-content">

          {/* Capability cards */}
          <div className="capabilities-grid">
            {capabilityGroups.map((group) => (
              <article
                className="capability-card"
                key={group.number}
              >
                <div className="capability-card-top">
                    <span className="capability-icon">
                        {group.number === "01" && "▱"}
                        {group.number === "02" && "▥"}
                        {group.number === "03" && "◇"}
                        {group.number === "04" && "<>"}
                    </span>

                  <span className="capability-number">
                    {group.number}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p className="capability-description">
                  {group.description}
                </p>

                <div className="capability-divider" />

                <ul className="capability-skills">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="skill-marker" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Right visual */}
          <aside className="capabilities-visual">
            <div className="capability-code-window">
              <div className="code-window-label">
                DATA / QUERY
              </div>

              <pre>
{`SELECT
    c.customer_name,
    SUM(oi.quantity * oi.unit_price)
        AS total_revenue
FROM Customers AS c
JOIN Orders AS o
    ON c.customer_id = o.customer_id
JOIN OrderItems AS oi
    ON o.order_id = oi.order_id
WHERE o.order_status = 'Completed'
GROUP BY c.customer_name
ORDER BY total_revenue DESC;`}
              </pre>
            </div>

            <div className="capability-visual-copy">
              BUILD · QUERY · ANALYZE · IMPROVE
            </div>

            <div className="capability-quote">
              <span className="quote-mark">“</span>

              <p>
                Better data. Better systems.
                <br />
                Better decisions.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom strip */}
        <div className="capability-principles">
          <div>
            <span className="principle-icon">↯</span>
            <div>
              <strong>Practical Experience</strong>
              <p>Applied through projects and work experience.</p>
            </div>
          </div>

          <div>
            <span className="principle-icon">□</span>
            <div>
              <strong>Continuous Learning</strong>
              <p>Developing deeper technical capability over time.</p>
            </div>
          </div>

          <div>
            <span className="principle-icon">◎</span>
            <div>
              <strong>Real-world Focus</strong>
              <p>Technology applied to practical business problems.</p>
            </div>
          </div>

          <div>
            <span className="principle-icon">◇</span>
            <div>
              <strong>Applied Learning</strong>
              <p>Skills demonstrated through projects and experience.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="capabilities-footer">
          <p>
            <span />
            SKILLS POWER SOLUTIONS.
          </p>

          <p>
            <span />
            ALWAYS LEARNING.
            <br />
            ALWAYS BUILDING.
          </p>
        </div>

      </div>
    </section>
  );
}