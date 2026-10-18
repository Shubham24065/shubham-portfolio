import Image from "next/image";
const achievements = [
  {
    category: "ACHIEVEMENT",
    date: "JUNE 2026",
    title: "2026 Energy Hackathon Finalist",
    issuer: "Seneca Polytechnic",
    description:
      "Selected as a finalist for developing a solution to an energy-sector challenge, demonstrating problem-solving, innovation, and technical communication.",
    credential:
      "https://factory.cancred.ca/obv3/credentials/411d11497132bf4ba2fcc0f7936b6bb77d9c6735",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="recognition-section"
      aria-labelledby="recognition-heading"
    >
      <div className="recognition-container">
        <div className="recognition-eyebrow">
          <span className="recognition-line" />
          <span>RECOGNITION</span>
        </div>

        <div className="recognition-intro">
          <h2 id="recognition-heading">
            Certifications &amp; <span>Achievements.</span>
          </h2>

          <p>
            Professional development and recognition for practical
            problem-solving, technical learning, and innovation.
          </p>
        </div>

        <div className="recognition-grid">
          {achievements.map((item) => (
            <article className="recognition-card" key={item.title}>
              <div className="recognition-card-top">
                
                <div className="recognition-badge">
                <Image
                    src="/images/energy-hackathon-finalist.png"
                    alt="Seneca Polytechnic 2026 Energy Hackathon Finalist badge"
                    width={110}
                    height={110}
                    className="recognition-badge-image"
                />
                </div>


                <div className="recognition-meta">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
              </div>

              <h3>{item.title}</h3>
              <p className="recognition-issuer">{item.issuer}</p>
              <p className="recognition-description">
                {item.description}
              </p>

              <a
                href={item.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="recognition-link"
                aria-label={`View verified credential for ${item.title}`}
              >
                View verified credential
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
