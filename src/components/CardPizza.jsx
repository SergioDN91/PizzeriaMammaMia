import { formatTotal } from '../utils/formatUtils';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 mx-auto d-flex flex-column" style={{ width: "18rem" }}>
        
      <img 
        src={img} 
        className="card-img-top" 
        alt={`Pizza ${name}`} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      
      <div className="card-body text-center flex-grow-0">
        <h5 className="card-title fw-light fs-4 mb-0">Pizza {name}</h5>
      </div>
      
      <ul className="list-group list-group-flush text-center d-flex flex-column flex-grow-1">
        <li className="list-group-item d-flex flex-column justify-content-center flex-grow-1 py-3">
          <p className="mb-1 text-muted fs-6">Ingredientes:</p>
          <p className="mb-0 fs-6 text-secondary">🍕 {ingredients.join(", ")}</p>
        </li>
        
        <li className="list-group-item pb-3 mt-auto">
          <h4 className="fw-bold text-dark my-3">Precio: ${formatTotal(price)}</h4>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light border text-dark">Ver Más 👀</button>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardPizza;