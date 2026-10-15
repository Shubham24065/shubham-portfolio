"use client";

import { useEffect, useState } from "react";

type Ticket = {
  id: string;
  title: string;
  department: string;
  status: "COMPLETED" | "OPEN";
  request: string;
  focus: string;
  solutionUrl?: string;
};

// Update ticket statuses here as you finish each issue.
const tickets: Ticket[] = [
  { id: "SQL-001", title: "Top Customers by Revenue", department: "SALES", status: "COMPLETED", request: "Identify the top customers by revenue from completed orders over the most recent 12 months of available data.", focus: "Completed orders, discounts, order value, customer revenue ranking" },
  { id: "SQL-002", title: "Inventory Risk Analysis", department: "OPERATIONS", status: "COMPLETED", request: "Identify active products at risk of stockouts across warehouses and prioritize replenishment.", focus: "Reorder thresholds, warehouse-level inventory, risk classification" },
  { id: "SQL-003", title: "Revenue Reconciliation Investigation", department: "FINANCE", status: "COMPLETED", request: "Investigate discrepancies between completed-order revenue and successfully completed payments for the same reporting period.", focus: "Discount-adjusted revenue, completed payments, affected orders" },
  { id: "SQL-004", title: "Monthly Revenue Trend Analysis", department: "MANAGEMENT", status: "COMPLETED", request: "Compare completed-order revenue month by month and identify growth or decline.", focus: "CTEs, monthly aggregation, LAG(), month-over-month growth" },
  { id: "SQL-005", title: "Shipping Delay & Fulfillment Analysis", department: "CUSTOMER SUPPORT / OPERATIONS", status: "COMPLETED", request: "Investigate completed orders delivered more than seven days after ordering and compare carrier performance.", focus: "Delivery durations, delayed-order rankings, carrier summary" },
  { id: "SQL-006", title: "Product Sales Performance Analysis", department: "SALES / MANAGEMENT", status: "COMPLETED", request: "Measure product-level revenue, units sold, company revenue contribution, and rankings within categories.", focus: "JOINs, CTEs, window functions, category rankings" },
  { id: "SQL-007", title: "Order Fulfillment & Shipping Delay Investigation", department: "OPERATIONS", status: "COMPLETED", request: "Assess order-to-shipment and shipment-to-delivery delays, including orders not yet delivered.", focus: "DATEDIFF(), CASE, conditional aggregation, NULL handling" },
  { id: "SQL-008", title: "Repeat Customer & Purchase Interval Analysis", department: "MANAGEMENT", status: "COMPLETED", request: "Determine whether customers return after their first purchase and how long they wait between orders.", focus: "ROW_NUMBER(), LAG(), PARTITION BY, purchase intervals" },
  { id: "SQL-009", title: "Regional Sales Performance Analysis", department: "MANAGEMENT", status: "OPEN", request: "Compare completed-order sales and customer activity across provinces.", focus: "COUNT(DISTINCT), GROUP BY, revenue share, provincial ranking" },
  { id: "SQL-010", title: "Product Ranking Within Categories", department: "MERCHANDISING", status: "OPEN", request: "Rank products by revenue within each category and identify the top three performers.", focus: "ROW_NUMBER(), RANK(), DENSE_RANK(), PARTITION BY" },
  { id: "SQL-011", title: "Inventory Restocking Stored Procedure", department: "OPERATIONS", status: "OPEN", request: "Build a reusable, parameterized stored procedure for identifying inventory at or below reorder levels.", focus: "CREATE PROCEDURE, parameters, validation, inventory shortage" },
  { id: "SQL-012", title: "Safe Order Processing Transaction", department: "DATABASE OPERATIONS", status: "OPEN", request: "Process orders, inventory changes, and payment records atomically, rolling back all changes if a step fails.", focus: "BEGIN TRANSACTION, COMMIT, ROLLBACK, TRY/CATCH, ACID" },
  { id: "SQL-013", title: "Inventory Audit & Change Tracking", department: "OPERATIONS", status: "OPEN", request: "Record old and new inventory quantities automatically, including updates affecting multiple rows.", focus: "CREATE TRIGGER, inserted/deleted, set-based audit logging" },
  { id: "SQL-014", title: "Management Order Summary View", department: "MANAGEMENT", status: "OPEN", request: "Create a reusable view combining order, customer, payment, and shipment information for reporting.", focus: "CREATE VIEW, joins, aggregation, avoiding duplicate orders" },
  { id: "SQL-015", title: "Query Performance & Index Optimization", department: "DATABASE SUPPORT", status: "OPEN", request: "Investigate a representative reporting query and document performance before and after an appropriate optimization.", focus: "Execution plans, indexes, SARGable predicates, performance comparison" },
];

// Add the exact GitHub URL for each implemented .sql file here.
// Example format: https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/<folder>/<file>.sql
// Do not use guessed paths: only verified file URLs should be added.
const solutionUrls: Partial<Record<Ticket["id"], string>> = {
  "SQL-001":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-001-top-customers-revenue.sql",

  "SQL-002":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-002-inventory-risk-analysis.sql",

    "SQL-003":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-003-revenue-reconciliation-investigation.sql",

    "SQL-004":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-004-monthly-revenue-trend-analysis.sql",

    "SQL-005":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-005-shipping-delay-fulfillment-analysis.sql",

    "SQL-006":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-006-product-sales-performance-analysis.sql",

    "SQL-007":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-007-order-fulfillment-shipping-delay-investigation.sql",

    "SQL-008":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-008-repeat-customer-purchase-interval-analysis.sql",
};

const resultScreenshots: Record<string, string> = {
  "SQL-001": "/projects/northstar/sql-001-results.png",
  "SQL-002": "/projects/northstar/sql-002-results.png",
  "SQL-003": "/projects/northstar/sql-003-results.png",
  "SQL-004": "/projects/northstar/sql-004-results.png",
};

export default function NorthstarTicketsVisual() {
  const [selected, setSelected] = useState<Ticket | null>(null);

  const [enlargedScreenshot, setEnlargedScreenshot] =
  useState<string | null>(null);


  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <>
      <div className="northstar-ticket-grid">
        {tickets.map((ticket) => (
          <button
            type="button"
            key={ticket.id}
            className="northstar-ticket northstar-ticket-button"
            onClick={() => setSelected(ticket)}
            aria-label={`View details for ${ticket.id}: ${ticket.title}`}
          >
            <div className="northstar-ticket-top">
              <span>{ticket.id}</span>
              <small>{ticket.status}</small>
            </div>
            <strong>{ticket.title}</strong>
            <p>{ticket.department}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="northstar-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="northstar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="northstar-modal-title"
          >
            <div className="northstar-modal-top">
              <span>{selected.id} / {selected.department}</span>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close ticket details">✕</button>
            </div>
            <h2 id="northstar-modal-title">{selected.title}</h2>
            <div className="northstar-modal-status">{selected.status}</div>
            <h3>BUSINESS REQUEST</h3>
            <p>{selected.request}</p>
            <h3>TECHNICAL FOCUS</h3>
            <p>{selected.focus}</p>

            {selected.status === "COMPLETED" &&
              resultScreenshots[selected.id] && (
                <div className="northstar-execution-evidence">
                  <h3>EXECUTION EVIDENCE</h3>

                  <button
                    type="button"
                    className="northstar-result-preview"
                    onClick={() =>
                      setEnlargedScreenshot(resultScreenshots[selected.id])
                    }
                    aria-label={`Enlarge ${selected.id} SQL results`}
                  >
                    <img
                      src={resultScreenshots[selected.id]}
                      alt={`${selected.id} SQL Server query results`}
                    />
                    <span>Click to enlarge ↗</span>
                  </button>
                </div>
            )}

            <div className="northstar-modal-actions">
              {selected.status === "COMPLETED" && (selected.solutionUrl || solutionUrls[selected.id]) ? (
                <a
                  className="northstar-solution-link"
                  href={selected.solutionUrl || solutionUrls[selected.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View SQL Solution <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="northstar-solution-pending">
                  {selected.status === "OPEN" ? "Solution pending" : "SQL file link coming soon"}
                </span>
              )}
            </div>
          </section>
        </div>
      )}
      {enlargedScreenshot && (
        <div
          className="northstar-image-backdrop"
          onClick={() => setEnlargedScreenshot(null)}
          role="presentation"
        >
          <div
            className="northstar-image-viewer"
            role="dialog"
            aria-modal="true"
            aria-label="SQL execution results"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setEnlargedScreenshot(null)}
              aria-label="Close screenshot"
            >
              ✕
            </button>

            <img src={enlargedScreenshot} alt="Enlarged SQL results" />
          </div>
        </div>
      )}
    </>
  );
}
