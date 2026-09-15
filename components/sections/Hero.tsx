import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-inner">
        <div className="hero-content">
            <h1>
                I build software,
                <br />
                data, and systems
                <br />
                around <span>real problems.</span>
            </h1>

            <p className="hero-description">
                Building practical software and data-driven systems with a focus on
                databases, application development, and real-world problem solving.
            </p>

            <div className="hero-actions">
                <Link href="#work" className="primary-button">
                View my work <span>→</span>
                </Link>

                <a
                href="https://github.com/Shubham24065"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
                >
                GitHub <span>↗</span>
                </a>
            </div>
            </div>

        <div className="hero-system" aria-hidden="true">
            <div className="system-glow" />
            <div className="system-grid" />

            <div className="connection-line line-one" />
            <div className="connection-line line-two" />
            <div className="connection-line line-three" />

            <div className="sql-panel floating-panel">
                <div className="panel-label">QUERY / 01</div>

                <code>
                <span>SELECT</span>
                <br />
                &nbsp;&nbsp;customer_id,
                <br />
                &nbsp;&nbsp;SUM(total) AS revenue
                <br />
                <span>FROM</span> orders
                <br />
                <span>WHERE</span> order_status = &apos;completed&apos;
                <br />
                <span>GROUP BY</span> customer_id
                <br />
                <span>ORDER BY</span> revenue DESC;
                </code>
            </div>

            <div className="database-scene">
                <div className="database-shadow" />

                <div className="database-cylinder">
                <div className="db-top" />

                <div className="db-section section-one">
                    <div className="db-highlight" />
                </div>

                <div className="db-section section-two">
                    <div className="db-highlight" />
                </div>

                <div className="db-section section-three">
                    <div className="db-highlight" />
                </div>

                <div className="db-bottom" />
                </div>

                <div className="database-platform">
                <div className="platform-inner" />
                </div>
            </div>

            <div className="capability-panel floating-panel">
                <div className="panel-label">SYSTEM / CAPABILITIES</div>

                <div className="capability-item">
                <span className="capability-icon">◫</span>
                <span>Databases</span>
                </div>

                <div className="capability-item">
                <span className="capability-icon">▥</span>
                <span>Analytics</span>
                </div>

                <div className="capability-item">
                <span className="capability-icon">&lt;/&gt;</span>
                <span>Applications</span>
                </div>

                <div className="capability-item">
                <span className="capability-icon">◎</span>
                <span>Problem Solving</span>
                </div>
            </div>

            <div className="analytics-panel floating-panel">
                <div className="panel-label">INSIGHT / 02</div>

                <p>
                Turning data
                <br />
                into opportunity.
                </p>

                <div className="mini-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                </div>
            </div>

            <div className="system-caption">
                <span>BUILDING SYSTEMS</span>
                <strong>FROM DATA TO DECISIONS.</strong>
            </div>
        </div>
      </div>
    </section>
  );
}