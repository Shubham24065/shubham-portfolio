const principles = [
  {
    number: "01",
    icon: "⌘",
    title: "Think in systems",
    description:
      "Understand how the pieces connect before optimizing individual parts.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Build with purpose",
    description:
      "Technology should solve a real problem, not exist for its own sake.",
  },
  {
    number: "03",
    icon: "▢",
    title: "Keep learning",
    description:
      "Every project is an opportunity to understand something deeper.",
  },
  {
    number: "04",
    icon: "▥",
    title: "Care about details",
    description:
      "Small decisions in structure, usability, and reliability shape the final product.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* =====================================================
            SECTION LABEL
        ====================================================== */}
        <div className="about-section-label">
          <span className="about-label-line" />
          <span>ABOUT</span>
        </div>

        {/* =====================================================
            ROW 1 — INTRO
        ====================================================== */}
        <div className="about-intro-grid">

          {/* LEFT — MAIN STATEMENT */}
          <div className="about-intro-left">
            <p className="about-eyebrow">
              A DEVELOPER&apos;S MINDSET
            </p>

            <h2 className="about-title">
              Building software starts with
              <br />
              <span>
                understanding the problem.
              </span>
            </h2>

            <p className="about-summary">
              I&apos;m interested in the intersection of applications,
              data, and systems — turning real problems into practical,
              reliable solutions.
            </p>
          </div>

          {/* RIGHT — WHO I AM */}
          <div className="about-who">
            <div className="about-mini-heading">
              <span />
              WHO I AM
            </div>

            <p>
              I&apos;m a software developer interested in how applications,
              data and systems work together. I like understanding the problem
              behind a requirement, breaking it into smaller pieces, and
              building solutions that are practical, reliable and maintainable.
            </p>

            <p>
              For me, development isn&apos;t only about writing code. It&apos;s
              about understanding the system around it and making thoughtful
              technical decisions.
            </p>
          </div>

        </div>

        {/* =====================================================
            ROW 2 — SYSTEM VISUAL + PRINCIPLES
        ====================================================== */}
        <div className="about-thinking-grid">

          {/* LEFT — SYSTEM VISUAL */}
          <div className="about-system-area">
            <div className="about-system-visual">

              <div className="about-visual-grid" />

              <div className="about-stack">
                <div className="about-stack-layer stack-applications">
                  <span>APPLICATIONS</span>
                </div>

                <div className="about-stack-layer stack-data">
                  <span>DATA</span>
                </div>

                <div className="about-stack-layer stack-systems">
                  <span>SYSTEMS</span>
                </div>
              </div>

              <div className="visual-note visual-note-1">
                REAL
                <br />
                PROBLEMS
              </div>

              <div className="visual-note visual-note-2">
                PRACTICAL
                <br />
                SOLUTIONS
              </div>

              <div className="visual-note visual-note-3">
                IDEAS
                <br />
                INTO IMPACT
              </div>

              <div className="visual-note visual-note-4">
                CONTINUOUS
                <br />
                IMPROVEMENT
              </div>

              <span className="visual-connector connector-1" />
              <span className="visual-connector connector-2" />
              <span className="visual-connector connector-3" />
              <span className="visual-connector connector-4" />

            </div>
          </div>

          {/* RIGHT — PRINCIPLES */}
          <div className="about-principles">
            <div className="about-mini-heading">
              <span />
              MY PRINCIPLES
            </div>

            <div className="about-principles-grid">
              {principles.map((principle) => (
                <article
                  className="about-principle-card"
                  key={principle.number}
                >
                  <span className="about-principle-number">
                    {principle.number}
                  </span>

                  <span className="about-principle-icon">
                    {principle.icon}
                  </span>

                  <div className="about-principle-copy">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <div className="about-education">

          <div className="about-education-heading">
            <span className="about-mini-line" />
            <p>EDUCATION</p>
          </div>

          <div className="about-education-row">

            <div className="about-school">
              <strong>Seneca</strong>
              <span>POLYTECHNIC</span>
            </div>

            <div className="about-education-divider" />

            <div className="about-program">
              <h3>Computer Programming &amp; Analysis</h3>

              <p className="about-degree">
                Advanced Diploma
              </p>

              <p className="about-school-location">
                Seneca Polytechnic · Toronto, Canada
              </p>

              <p className="about-program-date">
                2024 — 2027
              </p>

              <div className="about-education-tags">
                <span>SOFTWARE DEVELOPMENT</span>
                <span>DATABASES</span>
                <span>SYSTEMS ANALYSIS</span>
                <span>APPLICATION DESIGN</span>
              </div>
            </div>

            <div className="about-education-divider" />

            <div className="about-education-description">
              <p>
                Coursework and applied projects have built a foundation
                across software development, databases, systems analysis
                and application design, with an increasing focus on data
                and database systems.
              </p>
            </div>

          </div>
        </div>

        <div className="about-footer">
          UNDERSTAND FIRST. BUILD WITH PURPOSE.
        </div>

      </div>
    </section>
  );
}