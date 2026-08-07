import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">¡Opps! Página no encontrada 🍕</h2>
      <p className="lead mb-4">Parece que la pizza que buscas no está en el menú.</p>
      <Link to="/" className="btn btn-dark btn-lg">Volver al Inicio 🏠</Link>
    </div>
  );
};

export default NotFound;