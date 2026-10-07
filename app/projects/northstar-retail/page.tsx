import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function NorthstarRetailPage() {
  return (
    <ProjectCaseStudy
      number="02"
      category="DATA / SQL"
      status="In Progress"
      title="Northstar Retail"
      headline="Turning business requests into practical SQL solutions."
      description="The SQL Server database is structured around ten relational tables covering customers, employees, orders, order items, products, payments, shipments, categories, suppliers, and inventory. Primary and foreign keys connect customer activity, sales transactions, fulfillment, product catalog data, and inventory operations."
      role="SQL Analyst / Database Support"
      year="2026"
      technologies={[
        "SQL Server",
        "T-SQL",
        "SSMS",
        "Git",
        "GitHub",
      ]}
      github="https://github.com/Shubham24065/Northstar-SQL-Business-Simulation"
      sections={[
        {
          number: "01",
          title: "Business Context",
          content:
            "Northstar Retail is a fictional Canadian e-commerce company selling electronics, accessories, home-office equipment, and consumer products. The project simulates working with an existing operational database and responding to requests from Sales, Finance, Operations, Customer Support, and Management.",
        },
        {
          number: "02",
          title: "Database Architecture",
          content:
            "The SQL Server database contains ten related operational tables covering customers, products, orders, payments, fulfillment, suppliers, employees, and inventory. Primary and foreign key relationships connect the transactional and reference data used throughout the business analyses.",
          visual: "northstar-database",
        },
        {
          number: "03",
          title: "Operational Dataset",
          content:
            "The simulation uses interconnected operational data across customers, orders, products, payments, shipments, and inventory, providing enough scale to investigate realistic business questions across multiple functional areas.",
          visual: "northstar-metrics",
        },
        {
          number: "04",
          title: "Business SQL Tickets",
          content:
            "Work is organized as job-style SQL tickets rather than isolated practice exercises. Each ticket begins with a requesting department, business request, required output, and business rules before the SQL solution is developed.",
          visual: "northstar-tickets",
        },
        {
          number: "05",
          title: "Analysis Workflow",
          content:
            "Each request is approached by first understanding the business requirement and rules, identifying the required tables and relationships, building the SQL solution, and validating that the result reflects the requested business logic.",
          visual: "northstar-workflow",
        },
        {
          number: "06",
          title: "SQL Techniques",
          content:
            "The completed business tickets combine relational querying, analytical SQL, and data-quality logic to produce business-ready outputs from operational data.",
          visual: "northstar-techniques",
        },
        {
          number: "07",
          title: "Current Development",
          content:
            "Northstar Retail remains in progress. The current repository contains the operational database, seed and verification scripts, and six implemented business SQL tickets. Additional database and business scenarios will be added as the project develops.",
        },
      ]}
    />
  );
}