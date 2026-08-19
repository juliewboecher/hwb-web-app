import artikler from "../data/artikler";

function ArtiklerPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Artikler</p>
      <h1>Artikler</h1>
      <p className="lead">
        Her kan du finde en samling af artikler, der dækker forskellige emner.
      </p>

      <ul className="article-list">
        {artikler.map((artikel) => (
          <li key={artikel.id}>
            <h2>{artikel.title}</h2>
            <p>{artikel.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtiklerPage;
