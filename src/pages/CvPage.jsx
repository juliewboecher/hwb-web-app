function CvPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">CV</p>
      <h1>Mit CV</h1>
      <p className="lead">
        Her kan du finde mit CV, hvor jeg præsenterer mine erfaringer og
        kvalifikationer.
      </p>

      <section className="info-list" aria-label="CV detaljer">
        <div>
          <h2>Uddannelse</h2>
          <p>Master i Interaktiv Design, Designskolen Kolding</p>
        </div>
        <div>
          <h2>Erfaring</h2>
          <p>Frontend udvikler hos XYZ, 2020 - nu</p>
        </div>
      </section>
    </div>
  );
}

export default CvPage;
