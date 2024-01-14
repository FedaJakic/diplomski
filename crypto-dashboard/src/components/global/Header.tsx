import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">Block Explorer</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="text-decoration-none" to={'/'}>
                <a className="nav-link">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-decoration-none" to={'/features'}>
                <a className="nav-link">Features</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-decoration-none" to={'/features'}>
                <a className="nav-link">Features</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-decoration-none" to={'/features'}>
                <a className="nav-link">Features</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex w-50">
            <input
              className="form-control me-sm-2 w-40"
              type="search"
              placeholder="Paste Address, transaction or block"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;