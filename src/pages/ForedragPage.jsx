import foredrag from "../data/foredrag";

function ForedragPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Foredrag</p>
      <h1>Mine foredrag</h1>
      <p className="lead">
        Her kan du finde en liste over mine foredrag, hvor jeg deler viden og
        erfaringer inden for mit felt.
      </p>

      <ul className="lecture-list">
        {foredrag.map((foredrag) => (
          <li key={foredrag.id}>
            <h2>{foredrag.title}</h2>
            <p>{foredrag.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForedragPage;
