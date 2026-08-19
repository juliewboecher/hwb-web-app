function MinGlaedePage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Min Glæde</p>
      <h1>Det, der gør mig glad</h1>
      <p className="lead">
        Her kan du finde en samling af de ting, der bringer mig glæde og
        inspiration.
      </p>

      <section className="info-list" aria-label="Min glæde detaljer">
        <div>
          <h2>Hobbyer</h2>
          <p>Maling, musik og madlavning</p>
        </div>
        <div>
          <h2>Rejser</h2>
          <p>Besøg i naturen og kulturelle oplevelser</p>
        </div>
      </section>
    </div>
  );
}

export default MinGlaedePage;
