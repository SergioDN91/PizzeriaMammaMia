import { formatTotal } from '../utils/formatUtils';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <button className="btn btn-outline-light">🍕 Home</button>
            </li>
            
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Register</button>
                </li>
              </>
            )}
          </ul>
          
          <button className="btn btn-outline-info">
            🛒 Total: ${formatTotal(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;