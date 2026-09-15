import Link from "next/link";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link href="/" className="brand">
          SHUBHAM KAUSHIK
        </Link>

        <div className="navbar-right">
          <div className="nav-links">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <a className="resume-button" href="/resume.pdf" download>
            <span>Résumé</span>
            <span className="resume-icon">↓</span>
          </a>
        </div>
      </nav>
    </header>
  );
}