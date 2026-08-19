import { Link } from "react-router";

import artikler from "../data/artikler";

function HomePage() {
  const featuredArtikler = artikler.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Hans Wendelboe Hviid Skov Bøcher</p>
        <h1>"Storladen, dokumentarisk roman"</h1>
        <p className="hero-text">
          af Karsten Høegh Brønnum. Baseret på research af Hans Wendelboe Bøcher
        </p>
        <div className="actions">
          <Link className="button" to="/projects">
            Bestil bog
          </Link>
          <Link className="button secondary" to="/contact">
            Kontakt mig
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Highlights</p>
          <h2>Her kan der være fokus på udvalgte artikler.</h2>
        </div>
        <div className="article-grid">
          {featuredArtikler.map((artikel) => (
            <article className="article-card" key={artikel.slug}>
              <img src={artikel.image} alt={`Preview af ${artikel.title}`} />
              <div className="article-card-content">
                <p className="eyebrow">{artikel.date}</p>
                <h3>{artikel.title}</h3>
                <p>{artikel.summary}</p>
                <Link to={`/artikler/${artikel.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
