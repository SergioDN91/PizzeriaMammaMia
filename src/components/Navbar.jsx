import { Link } from 'react-router-dom';
import { formatTotal } from '../utils/formatUtils';

const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand me-4" to="/">Pizzería Mamma Mia!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-2">
            <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
            
            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
                <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
                <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
              </>
            )}
          </div>

          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-info btn-sm fw-bold">
              🛒 Total: ${formatTotal(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;