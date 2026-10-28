import NorthstarERD from "./NorthstarERD";
import HotelShowcaseVisual from "./HotelShowcaseVisual";
import NorthstarTicketsVisual from "./NorthstarTicketsVisual";
import Link from "next/link";
import Image from "next/image";
import CaseStudyGallery from "./CaseStudyGallery";



export type ProjectSection = {

  number: string;

  title: string;

  content: string;
  images?: { src: string; alt: string; caption: string }[];

  visual?:

    | "portfolio-architecture"
    | "portfolio-contact-flow"
    | "architecture"

    | "deployment"

    | "northstar-database"

    | "northstar-tickets"

    | "northstar-workflow"

    | "northstar-metrics"

    | "northstar-techniques"

    | "hotel-architecture"
    | "hotel-showcase"
    | "hotel-technical-summary"
    | "hotel-database";

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
  return <NorthstarERD />;
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

function HotelDatabaseVisual() {
  const entities = [
    {
      name: "Guest",
      detail: "Guest profiles and information",
    },
    {
      name: "Reservation",
      detail: "Booking dates and status",
    },
    {
      name: "Room",
      detail: "Room details and availability",
    },
    {
      name: "Payment",
      detail: "Billing and payment records",
    },
  ];

  return (
    <div className="hotel-database-visual">
      <div className="hotel-database-heading">
        <span>DATABASE RELATIONSHIPS</span>
        <small>CONCEPTUAL DATA MODEL</small>
      </div>

      <div className="hotel-database-grid">
        {entities.map((entity, index) => (
          <div className="hotel-database-entity" key={entity.name}>
            <span>0{index + 1} / ENTITY</span>
            <strong>{entity.name}</strong>
            <small>{entity.detail}</small>
          </div>
        ))}
      </div>

      <div className="hotel-database-footer">
        <span>RELATIONAL DATA</span>
        <span>JPA ENTITY MAPPING</span>
        <span>MYSQL PERSISTENCE</span>
      </div>
    </div>
  );
}


function PortfolioArchitectureVisual() {
  return (
    <div className="diagram" aria-label="Portfolio application architecture">
      <div className="diagramHeading">
        APPLICATION ARCHITECTURE
        <span>RENDERING &amp; SERVER WORKFLOWS</span>
      </div>

      <div className="architectureFlow">
        <div className="centerNode">
          <small>01 / CLIENT</small>
          <strong>Browser / Visitor</strong>
          <span>Navigation, page views and contact form</span>
        </div>

        <div className="flowConnector" aria-hidden="true" />

        <div className="centerNode">
          <small>02 / APPLICATION</small>
          <strong>Next.js · React · TypeScript</strong>
          <span>App Router, components and server routes</span>
        </div>

        <div className="splitConnector" aria-hidden="true">
          <div className="splitStem" />
          <div className="splitHorizontal" />
          <div className="splitEnds">
            <div className="splitEnd" />
            <div className="splitEnd" />
          </div>
        </div>

        <div className="branches">
          <div className="branch">
            <div className="node">
              <small>PAGE DELIVERY</small>
              <strong>Homepage &amp; Case Studies</strong>
              <span>
                Project routes, visualizations and navigation
              </span>
            </div>
          </div>

          <div className="branch">
            <div className="node">
              <small>SERVER WORKFLOW</small>
              <strong>POST /api/contact</strong>
              <span>
                Input validation and email construction
              </span>
            </div>

            <div className="flowConnector" aria-hidden="true" />

            <div className="node">
              <small>EMAIL DELIVERY</small>
              <strong>Resend API</strong>
              <span>
                Server-side integration using a private API key
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="architectureFooter">
        <div className="footerItem">
          <span className="footerDot" />
          <span>Hosted on Vercel</span>
        </div>
        <div className="footerDivider" />
        <div className="footerItem">
          <span className="footerDot" />
          <span>Web Analytics · Page activity</span>
        </div>
      </div>
    </div>
  );
}

function PortfolioContactFlowVisual() {
  const steps = [
    ["01", "Visitor submits", "React contact form"],
    ["02", "Server validates", "Required fields, limits, spam check"],
    ["03", "Resend delivers", "Server-side email service"],
    ["04", "UI responds", "Success or error feedback"],
  ];
  return (
    <div className={"diagram"} aria-label="Contact form submission workflow">
      <div className={"diagramHeading"}>CONTACT SUBMISSION <span>REQUEST → VALIDATION → DELIVERY → FEEDBACK</span></div>
      <div className={"steps"}>
        {steps.map(([number, title, detail]) => (
          <div className={"node"} key={number}>
            <small>{number}</small><strong>{title}</strong><span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionVisual({

  visual,

}: {

  visual?: ProjectSection["visual"];

}) {

  if (visual === "portfolio-architecture") return <PortfolioArchitectureVisual />;
  if (visual === "portfolio-contact-flow") return <PortfolioContactFlowVisual />;

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

  if (visual === "hotel-database") {
    return <HotelDatabaseVisual />;
  }

  if (visual === "hotel-showcase") {
    return <HotelShowcaseVisual />;
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



                {section.images && section.images.length > 0 && (
                  <CaseStudyGallery images={section.images} />
                )}
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