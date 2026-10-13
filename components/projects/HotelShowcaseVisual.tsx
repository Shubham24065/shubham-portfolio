"use client";

import { useEffect, useState } from "react";

const screenshots = [
  { file: "room-selection.png", title: "Room selection", detail: "Availability and occupancy" },
  { file: "booking-addons.png", title: "Optional services", detail: "Booking add-ons" },
  { file: "reservation-summary.png", title: "Reservation summary", detail: "Itemized pricing and taxes" },
  { file: "admin-dashboard.png", title: "Admin dashboard", detail: "Reservation operations" },
  { file: "payment-validation.png", title: "Payment validation", detail: "Outstanding balance checks" },
  { file: "checkout-confirmation.png", title: "Guest checkout", detail: "Completed checkout workflow" },
];

export default function HotelShowcaseVisual() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : (current + 1) % screenshots.length);
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="hotel-showcase">
        <div className="hotel-showcase-heading">
          <span>APPLICATION SCREENSHOTS</span>
          <small>GRAND STAY HOTEL · JAVA DESKTOP APPLICATION</small>
        </div>
        <div className="hotel-showcase-grid">
          {screenshots.map((shot, index) => (
            <button type="button" className="hotel-showcase-card" key={shot.file} onClick={() => setSelected(index)} aria-label={`Enlarge ${shot.title} screenshot`}>
              <span className="hotel-showcase-image">
                <img src={`/projects/hotel-reservation/${shot.file}`} alt={`${shot.title} screen from Grand Stay Hotel`} loading="lazy" />
                <span className="hotel-showcase-zoom">View larger ↗</span>
              </span>
              <span className="hotel-showcase-caption">
                <span className="hotel-showcase-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="hotel-showcase-caption-text"><strong>{shot.title}</strong><small>{shot.detail}</small></span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {selected !== null && (
        <div className="hotel-lightbox" role="dialog" aria-modal="true" aria-label={`${screenshots[selected].title} screenshot`} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <div className="hotel-lightbox-toolbar">
            <span>{String(selected + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")} · {screenshots[selected].title}</span>
            <button type="button" onClick={() => setSelected(null)} aria-label="Close screenshot">✕ Close</button>
          </div>
          <div className="hotel-lightbox-main">
            <button type="button" className="hotel-lightbox-arrow" onClick={() => setSelected((selected - 1 + screenshots.length) % screenshots.length)} aria-label="Previous screenshot">←</button>
            <img src={`/projects/hotel-reservation/${screenshots[selected].file}`} alt={`${screenshots[selected].title} screen from Grand Stay Hotel`} />
            <button type="button" className="hotel-lightbox-arrow" onClick={() => setSelected((selected + 1) % screenshots.length)} aria-label="Next screenshot">→</button>
          </div>
          <p className="hotel-lightbox-description">{screenshots[selected].detail} · Use ← → to navigate · Esc to close</p>
        </div>
      )}
    </>
  );
}
