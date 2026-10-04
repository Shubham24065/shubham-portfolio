import Link from "next/link";

export default function NorthstarRetailPage() {
  return (
    <main>
      <section style={{ padding: "120px 8%" }}>
        <Link href="/#work">← Back to projects</Link>

        <p style={{ marginTop: "60px" }}>02 / DATA · SQL</p>

        <h1>Northstar Retail</h1>

        <p>
          SQL business operations simulation built around a fictional
          e-commerce company, covering analytical reporting, customer
          insights, inventory analysis, and real-world business requests.
        </p>

        <p>Case study currently being developed.</p>
      </section>
    </main>
  );
}