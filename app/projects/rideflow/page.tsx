import Link from "next/link";

export default function RideFlowPage() {
  return (
    <main>
      <section style={{ padding: "120px 8%" }}>
        <Link href="/#work">← Back to projects</Link>

        <p style={{ marginTop: "60px" }}>
          03 / DATABASE ENGINEERING
        </p>

        <h1>RideFlow</h1>

        <p>
          Ride-sharing database system designed around real operational
          workflows, relational modelling, data integrity, transactions,
          and scalable database architecture.
        </p>

        <p>Case study currently in development.</p>
      </section>
    </main>
  );
}