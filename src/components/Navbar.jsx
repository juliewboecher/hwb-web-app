import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <img src={`${import.meta.env.BASE_URL}logoicon.png`} alt="Logo" />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/foredrag" end>
          Foredrag
        </NavLink>
        <NavLink to="/artikler">Artikler</NavLink>
        <NavLink to="/kunst">Kunst</NavLink>
        <NavLink to="/min-glaede">Min Glæde</NavLink>
        <NavLink to="/cv">CV</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
