import Link from "next/link";

export type ProjectSection = {
  number: string;
  title: string;
  content: string;
  visual?:
    | "architecture"
    | "deployment"
    | "northstar-database"
    | "northstar-tickets"
    | "northstar-workflow"
    | "northstar-metrics"
    | "northstar-techniques"
    | "hotel-architecture";
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

function NorthstarDatabaseVisual() {
  return (
    <div className="northstar-schema">
      <div className="northstar-schema-header">
        <span>DATABASE STRUCTURE</span>
        <small>Core entities and relationships · simplified project view · 10 TABLES · SQL SERVER</small>
      </div>

      <div className="northstar-schema-model">
        {/* INPUT ENTITIES */}
        <div className="schema-inputs">
          <div className="schema-table">
            <span>CUSTOMER</span>
            <strong>Customers</strong>
            <small>customer_id · PK</small>
          </div>

          
          <div className="schema-table">
            <span>WORKFORCE</span>
            <strong>Employees</strong>
            <small>employee_id · PK</small>
          </div>
        </div>

        {/* MAIN TRANSACTION CHAIN */}
        <div className="schema-main-chain">
          <div className="schema-table schema-table-core">
            <span>CORE TRANSACTION</span>
            <strong>Orders</strong>
            <small>
              customer_id · FK
              <br />
              sales_employee_id · FK
            </small>
          </div>

          
          <div className="schema-table schema-table-core">
            <span>LINE ITEMS</span>
            <strong>OrderItems</strong>
            <small>
              order_id · FK
              <br />
              product_id · FK
            </small>
          </div>

          
          <div className="schema-table schema-table-core">
            <span>CATALOG</span>
            <strong>Products</strong>
            <small>
              category_id · FK
              <br />
              supplier_id · FK
            </small>
          </div>
        </div>

        {/* ORDER BRANCHES */}
        <div className="schema-order-branches">
          <div className="schema-side-branch">
            
            <div className="schema-table">
              <span>FINANCE</span>
              <strong>Payments</strong>
              <small>order_id · FK</small>
            </div>
          </div>

          <div className="schema-side-branch">
            
            <div className="schema-table">
              <span>FULFILLMENT</span>
              <strong>Shipments</strong>
              <small>order_id · FK</small>
            </div>
          </div>
        </div>

        {/* PRODUCT RELATIONSHIPS */}
        <div className="schema-product-branches">
          
          <div className="schema-table">
            <span>CLASSIFICATION</span>
            <strong>Categories</strong>
            <small>category_id · PK</small>
          </div>

          <div className="schema-table">
            <span>SUPPLY</span>
            <strong>Suppliers</strong>
            <small>supplier_id · PK</small>
          </div>

          <div className="schema-table">
            <span>STOCK</span>
            <strong>Inventory</strong>
            <small>product_id · FK</small>
          </div>
        </div>
      </div>

      <div className="northstar-schema-footer">
        <div className="schema-legend">
          <span>PK</span>
          <small>PRIMARY KEY</small>

          <span>FK</span>
          <small>FOREIGN KEY</small>
        </div>

        <p>
          Transactional model connecting customer activity, sales,
          fulfillment, product catalog and inventory operations.
        </p>
      </div>
    </div>
  );
}

const northstarTickets = [
  {
    id: "SQL-001",
    department: "SALES",
    title: "Top Customers by Revenue",
    status: "COMPLETED",
  },
  {
    id: "SQL-002",
    department: "OPERATIONS",
    title: "Inventory Risk Analysis",
    status: "COMPLETED",
  },
  {
    id: "SQL-003",
    department: "FINANCE",
    title: "Revenue Reconciliation",
    status: "COMPLETED",
  },
  {
    id: "SQL-004",
    department: "MANAGEMENT",
    title: "Monthly Revenue Trends",
    status: "COMPLETED",
  },
  {
    id: "SQL-005",
    department: "SUPPORT / OPS",
    title: "Shipping Delay Analysis",
    status: "COMPLETED",
  },
  {
    id: "SQL-006",
    department: "SALES / MANAGEMENT",
    title: "Product Sales Performance",
    status: "COMPLETED",
  },
];

function NorthstarTicketsVisual() {
  return (
    <div className="northstar-ticket-grid">
      {northstarTickets.map((ticket) => (
        <div className="northstar-ticket" key={ticket.id}>
          <div className="northstar-ticket-top">
            <span>{ticket.id}</span>
            <small>{ticket.status}</small>
          </div>

          <strong>{ticket.title}</strong>

          <p>{ticket.department}</p>
        </div>
      ))}
    </div>
  );
}

function NorthstarWorkflowVisual() {
  const steps = [
    ["01", "Business Request"],
    ["02", "Define Rules"],
    ["03", "Identify Data"],
    ["04", "Build SQL"],
    ["05", "Validate"],
    ["06", "Report"],
  ];

  return (
    <div className="northstar-workflow">
      {steps.map(([number, title], index) => (
        <div className="northstar-workflow-item" key={number}>
          <div className="northstar-workflow-step">
            <span>{number}</span>
            <strong>{title}</strong>
          </div>

          
        </div>
      ))}
    </div>
  );
}

function NorthstarMetricsVisual() {
  const metrics = [
    { value: "1,000", label: "Customers" },
    { value: "5,000", label: "Orders" },
    { value: "13,000", label: "Order Items" },
    { value: "200", label: "Products" },
    { value: "5,000", label: "Payments" },
    { value: "5,000", label: "Shipments" },
    { value: "400", label: "Inventory Records" },
  ];

  return (
    <div className="northstar-metrics">
      {metrics.map((metric) => (
        <div className="northstar-metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

function NorthstarTechniquesVisual() {
  const groups = [
    {
      number: "01",
      title: "Query Structure",
      items: [
        "Multi-table Joins",
        "Common Table Expressions",
        "CASE Expressions",
        "Temporary Tables",
      ],
    },
    {
      number: "02",
      title: "Analysis",
      items: [
        "Aggregate Functions",
        "RANK",
        "LAG",
        "Date Calculations",
      ],
    },
    {
      number: "03",
      title: "Data Handling",
      items: [
        "NULL Handling",
        "COALESCE / NULLIF",
        "Revenue Reconciliation",
        "Discount Calculations",
      ],
    },
  ];

  return (
    <div className="northstar-techniques">
      {groups.map((group) => (
        <div className="northstar-technique-group" key={group.title}>
          <div className="northstar-technique-header">
            <span>{group.number}</span>
            <strong>{group.title}</strong>
          </div>

          <div className="northstar-technique-list">
            {group.items.map((item) => (
              <div key={item}>
                <span>+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HotelArchitectureVisual() {
  const layers = [
    {
      number: "01",
      label: "PRESENTATION LAYER",
      title: "JavaFX / FXML",
      detail: "Kiosk Booking · Admin Dashboard · Controllers",
    },
    {
      number: "02",
      label: "BUSINESS LAYER",
      title: "Service Layer",
      detail: "Reservations · Pricing · Billing · Loyalty",
    },
    {
      number: "03",
      label: "PERSISTENCE LAYER",
      title: "Hibernate / JPA",
      detail: "Repositories · Entities · Transactions",
    },
    {
      number: "04",
      label: "DATABASE STORAGE",
      title: "MySQL",
      detail: "Reservations · Guests · Rooms · Payments",
    },
  ];

  return (
    <div className="hotel-architecture">
      <div className="hotel-architecture-heading">
        <span>SYSTEM ARCHITECTURE</span>
        <small>APPLICATION DATA FLOW</small>
      </div>

      <div className="hotel-architecture-layers">
        {layers.map((layer, index) => (
          <div key={layer.number}>
            <div className="hotel-architecture-layer">
              <span>{layer.number} / {layer.label}</span>
              <strong>{layer.title}</strong>
              <small>{layer.detail}</small>
            </div>

            {index < layers.length - 1 && (
              <div className="hotel-architecture-arrow">↓</div>
            )}
          </div>
        ))}
      </div>

      <div className="hotel-architecture-footer">
        <span>SEPARATION OF CONCERNS</span>
        <span>ORM PERSISTENCE</span>
        <span>TRANSACTION MANAGEMENT</span>
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

  if (visual === "northstar-database") {
    return <NorthstarDatabaseVisual />;
  }

  if (visual === "northstar-tickets") {
    return <NorthstarTicketsVisual />;
  }

  if (visual === "northstar-workflow") {
    return <NorthstarWorkflowVisual />;
  }

  if (visual === "northstar-metrics") {
    return <NorthstarMetricsVisual />;
  }

  if (visual === "northstar-techniques") {
    return <NorthstarTechniquesVisual />;
  }

  if (visual === "hotel-architecture") {
    return <HotelArchitectureVisual />;
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