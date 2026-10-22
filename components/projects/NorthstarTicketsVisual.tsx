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
  { id: "SQL-01", title: "Top Customers by Revenue", department: "SALES", status: "COMPLETED", request: "Identify the top customers by revenue from completed orders over the most recent 12 months of available data.", focus: "Completed orders, discounts, order value, customer revenue ranking" },
  { id: "SQL-02", title: "Inventory Risk Analysis", department: "OPERATIONS", status: "COMPLETED", request: "Identify active products at risk of stockouts across warehouses and prioritize replenishment.", focus: "Reorder thresholds, warehouse-level inventory, risk classification" },
  { id: "SQL-03", title: "Revenue Reconciliation Investigation", department: "FINANCE", status: "COMPLETED", request: "Investigate discrepancies between completed-order revenue and successfully completed payments for the same reporting period.", focus: "Discount-adjusted revenue, completed payments, affected orders" },
  { id: "SQL-04", title: "Monthly Revenue Trend Analysis", department: "MANAGEMENT", status: "COMPLETED", request: "Compare completed-order revenue month by month and identify growth or decline.", focus: "CTEs, monthly aggregation, LAG(), month-over-month growth" },
  { id: "SQL-05", title: "Shipping Delay & Fulfillment Analysis", department: "CUSTOMER SUPPORT / OPERATIONS", status: "COMPLETED", request: "Investigate completed orders delivered more than seven days after ordering and compare carrier performance.", focus: "Delivery durations, delayed-order rankings, carrier summary" },
  { id: "SQL-06", title: "Product Sales Performance Analysis", department: "SALES / MANAGEMENT", status: "COMPLETED", request: "Measure product-level revenue, units sold, company revenue contribution, and rankings within categories.", focus: "JOINs, CTEs, window functions, category rankings" },
  { id: "SQL-07", title: "Order Fulfillment & Shipping Delay Investigation", department: "OPERATIONS", status: "COMPLETED", request: "Assess order-to-shipment and shipment-to-delivery delays, including orders not yet delivered.", focus: "DATEDIFF(), CASE, conditional aggregation, NULL handling" },
  { id: "SQL-08", title: "Repeat Customer & Purchase Interval Analysis", department: "MANAGEMENT", status: "COMPLETED", request: "Determine whether customers return after their first purchase and how long they wait between orders.", focus: "ROW_NUMBER(), LAG(), PARTITION BY, purchase intervals" },
  { id: "SQL-09", title: "Regional Sales Performance Analysis", department: "MANAGEMENT", status: "COMPLETED", request: "Compare completed-order sales and customer activity across provinces.", focus: "COUNT(DISTINCT), GROUP BY, revenue share, provincial ranking" },
  { id: "SQL-10", title: "Product Ranking Within Categories", department: "MERCHANDISING", status: "COMPLETED", request: "Rank products by revenue within each category and identify the top three performers.", focus: "ROW_NUMBER(), RANK(), DENSE_RANK(), PARTITION BY" },
  { id: "SQL-11", title: "Inventory Restocking Stored Procedure", department: "OPERATIONS", status: "COMPLETED", request: "Build a reusable, parameterized stored procedure for identifying inventory at or below reorder levels.", focus: "CREATE PROCEDURE, parameters, validation, inventory shortage" },
  { id: "SQL-12", title: "Safe Order Processing Transaction", department: "DATABASE OPERATIONS", status: "COMPLETED", request: "Process orders, inventory changes, and payment records atomically, rolling back all changes if a step fails.", focus: "BEGIN TRANSACTION, COMMIT, ROLLBACK, TRY/CATCH, ACID" },
  { id: "SQL-13", title: "Inventory Audit & Change Tracking", department: "OPERATIONS", status: "COMPLETED", request: "Record old and new inventory quantities automatically, including updates affecting multiple rows.", focus: "CREATE TRIGGER, inserted/deleted, set-based audit logging" },
  { id: "SQL-14", title: "Management Order Summary View", department: "MANAGEMENT", status: "COMPLETED", request: "Create a reusable view combining order, customer, payment, and shipment information for reporting.", focus: "CREATE VIEW, joins, aggregation, avoiding duplicate orders" },
  { id: "SQL-15", title: "Query Performance & Index Optimization", department: "DATABASE SUPPORT", status: "COMPLETED", request: "Investigate a representative reporting query and document performance before and after an appropriate optimization.", focus: "Execution plans, indexes, SARGable predicates, performance comparison" },
];

// Add the exact GitHub URL for each implemented .sql file here.
// Example format: https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/<folder>/<file>.sql
// Do not use guessed paths: only verified file URLs should be added.
const solutionUrls: Partial<Record<Ticket["id"], string>> = {
  "SQL-01":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-001-top-customers-revenue.sql",

  "SQL-02":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-002-inventory-risk-analysis.sql",

    "SQL-03":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-003-revenue-reconciliation-investigation.sql",

    "SQL-04":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-004-monthly-revenue-trend-analysis.sql",

    "SQL-05":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-005-shipping-delay-fulfillment-analysis.sql",

    "SQL-06":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-006-product-sales-performance-analysis.sql",

    "SQL-07":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-007-order-fulfillment-shipping-delay-investigation.sql",

    "SQL-08":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-008-repeat-customer-purchase-interval-analysis.sql",

    "SQL-09":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-009-regional-sales-performance-analysis.sql",

    "SQL-10":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tickets/SQL-010-product-ranking-within-categories.sql",

    "SQL-11":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/stored-procedures/SQL-011-inventory-restocking-report.sql",

    "SQL-12":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/transactions/SQL-012-safe-order-processing-transaction.sql",

    "SQL-13":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/triggers/SQL-013-inventory-audit-change-tracking.sql",

    "SQL-14":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/views/SQL-014-management-order-summary-view.sql",

    "SQL-15":
    "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/performance/SQL-015-query-performance-index-optimization.sql",
};

// Add test-case GitHub URLs here only after those files are committed.
const testUrls: Partial<Record<Ticket["id"], string>> = {
  "SQL-11":
  "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tests/SQL-011-restocking-procedure-tests.sql",

  "SQL-12":
  "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tests/SQL-012-order-transaction-tests.sql",

  "SQL-13":
  "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tests/SQL-013-inventory-audit-tests.sql",

  "SQL-14":
  "https://github.com/Shubham24065/Northstar-SQL-Business-Simulation/blob/main/tests/SQL-014-management-view-tests.sql"

};

const validationOutcomes: Partial<Record<Ticket["id"], string>> = {
  "SQL-11": "Executed the restocking procedure and confirmed that the report identifies out-of-stock and below-reorder-level inventory across warehouses.",
  "SQL-12": "Successfully processed order #153 within a test transaction. The order changed to Completed, and ROLLBACK restored its original Processing status.",
  "SQL-13": "Verified that an inventory decrease from 33 to 23 automatically generated an audit record recording the previous quantity, new quantity, and change of -10.",
  "SQL-14": "Validated that the view returns 5,000 rows for 5,000 distinct orders and reused it to summarize completed-order revenue by province.",
  "SQL-15": "The nonclustered index reduced logical reads on Orders from 28 to 8 (71.4%) and changed the plan from a clustered index scan with a sort to a nonclustered index seek. In this single run, elapsed time was 184 ms before and 191 ms after; no elapsed-time improvement is claimed.",
};

const resultScreenshots: Record<string, string> = {
  "SQL-01": "/projects/northstar/sql-001-results.png",
  "SQL-02": "/projects/northstar/sql-002-results.png",
  "SQL-03": "/projects/northstar/sql-003-results.png",
  "SQL-04": "/projects/northstar/sql-004-results.png",
  "SQL-10": "/projects/northstar/sql-10-results.png",
  "SQL-11": "/projects/northstar/sql-11-test-results.png",
  "SQL-12": "/projects/northstar/sql-12-test-results.png",
  "SQL-13": "/projects/northstar/sql-13-test-results.png",
  "SQL-14": "/projects/northstar/sql-14-test-results.png",
};

const performanceScreenshots = [
  { label: "Before index · Messages", src: "/projects/northstar/SQL-015-before-index-messages.png", detail: "28 logical reads · 184 ms elapsed" },
  { label: "After index · Messages", src: "/projects/northstar/SQL-015-after-index-messages.png", detail: "8 logical reads · 191 ms elapsed" },
  { label: "Before index · Execution plan", src: "/projects/northstar/SQL-015-before-index-plan.png", detail: "Clustered Index Scan + Sort" },
  { label: "After index · Execution plan", src: "/projects/northstar/SQL-015-after-index-plan.png", detail: "Nonclustered Index Seek" },
];

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

            {selected.id === "SQL-15" && selected.status === "COMPLETED" && (
              <div className="northstar-execution-evidence">
                <h3>EXECUTION EVIDENCE · BEFORE VS. AFTER</h3>
                <p style={{ marginBottom: "16px" }}>
                  Compare SQL Server I/O statistics and actual execution plans before and after adding the index.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
                  {performanceScreenshots.map((shot) => (
                    <div key={shot.src} style={{ minWidth: 0 }}>
                      <h4 style={{ margin: "0 0 10px", fontSize: "0.95rem", color: "#d8edf9" }}>{shot.label}</h4>
                      <button
                        type="button"
                        className="northstar-result-preview"
                        onClick={() => setEnlargedScreenshot(shot.src)}
                        aria-label={`Enlarge ${shot.label}`}
                        style={{ width: "100%", display: "block", textAlign: "left" }}
                      >
                        <img src={shot.src} alt={`SQL-015 ${shot.label}`} style={{ width: "100%", height: "130px", objectFit: "contain", objectPosition: "left center" }} />
                        <span>Click to enlarge ↗</span>
                      </button>
                      <p style={{ fontSize: "0.85rem", margin: "8px 0 0" }}>{shot.detail}</p>
                    </div>
                  ))}
                </div>
                <div style={{ overflowX: "auto", marginTop: "22px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", color: "inherit", fontSize: "0.9rem" }}>
                    <thead><tr><th style={{ textAlign: "left", padding: "10px" }}>Metric</th><th style={{ textAlign: "left", padding: "10px" }}>Before</th><th style={{ textAlign: "left", padding: "10px" }}>After</th></tr></thead>
                    <tbody>
                      <tr><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>Logical reads</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>28</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>8 (−71.4%)</td></tr>
                      <tr><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>CPU time</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>15 ms</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>0 ms reported</td></tr>
                      <tr><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>Elapsed time</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>184 ms</td><td style={{ padding: "10px", borderTop: "1px solid #29485b" }}>191 ms</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selected.status === "COMPLETED" && validationOutcomes[selected.id] && (
              <div className="northstar-execution-evidence">
                <h3>VALIDATION OUTCOME</h3>
                <p>{validationOutcomes[selected.id]}</p>
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
              {selected.status === "COMPLETED" && testUrls[selected.id] && (
                <a
                  className="northstar-solution-link"
                  href={testUrls[selected.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Test Cases <span aria-hidden="true">↗</span>
                </a>
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
