import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatTotal } from '../utils/formatUtils';

const Navbar = () => {
  const { total } = useCart(); // <-- Consumimos el total global

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">Pizzería Mamma Mia!</Link>
      
      <div className="d-flex justify-content-between w-100 align-items-center ms-3">
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
          <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
          <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
        </div>

        <Link to="/cart" className="btn btn-outline-info btn-sm">
          🛒 Total: ${formatTotal(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;