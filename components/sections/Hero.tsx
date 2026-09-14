import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        Software <span>•</span> Data <span>•</span> Systems
      </div>

      <h1>Shubham Kaushik</h1>

      <h2>
        I design and build practical software, database, and data-driven
        solutions.
      </h2>

      <p className="hero-description">
        Focused on building reliable systems, solving real business problems,
        and working across software development, databases, APIs, analytics,
        and technical operations.
      </p>

      <div className="hero-actions">
        <Link href="#work" className="primary-button">
          View Projects
        </Link>

        <Link
          href="https://github.com/Shubham24065"
          target="_blank"
          className="secondary-button"
        >
          GitHub
        </Link>
      </div>

      <div className="tech-strip">
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>SQL Server</span>
        <span>REST APIs</span>
        <span>Power BI</span>
        <span>Git</span>
      </div>
    </section>
  );
}