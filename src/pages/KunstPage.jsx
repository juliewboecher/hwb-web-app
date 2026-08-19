import kunst from "../data/kunst";

function KunstPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kunst</p>
      <h1>Mine Kunstværker</h1>
      <p className="lead">
        Her kan du finde en samling af mine kunstværker, hvor jeg udforsker
        forskellige medier og teknikker.
      </p>

      <ul className="artwork-list">
        {kunst.map((kunstværk) => (
          <li key={kunstværk.id}>
            <h2>{kunstværk.title}</h2>
            <p>{kunstværk.content}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default KunstPage;
