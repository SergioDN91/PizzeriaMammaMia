import { Link } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';
import { formatTotal } from '../utils/formatUtils';
import imgNapolitana from '../assets/img/napolitana.jpg';
import imgEspanola from '../assets/img/española.jpg';
import imgPepperoni from '../assets/img/pepperoni.jpg';
import imgCuatroEstaciones from '../assets/img/cuatroestaciones.jpg';
import imgBacon from '../assets/img/bacon.jpg';
import imgPolloBbq from '../assets/img/pollobbq.jpg';

const localImages = {
  p001: imgNapolitana,
  p002: imgEspanola,
  p003: imgPepperoni,
  p004: imgCuatroEstaciones,
  p005: imgBacon,
  p006: imgPolloBbq,
  napolitana: imgNapolitana,
  española: imgEspanola,
  espanola: imgEspanola,
  salame: imgPepperoni,
  pepperoni: imgPepperoni,
  "cuatro estaciones": imgCuatroEstaciones,
  bacon: imgBacon,
  "pollo picante": imgPolloBbq,
  "pollo bbq": imgPolloBbq,
};

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  const { id, name, price, ingredients, img } = pizza;
  const pizzaImage = localImages[id] || localImages[name?.toLowerCase()] || img || imgNapolitana;
  const displayName = name?.toLowerCase() === 'pollo picante' ? 'pollo bbq' : name;

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={pizzaImage} 
        className="card-img-top" 
        alt={displayName}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-capitalize fw-bold mb-3 text-center">
            Pizza {displayName}
          </h5>
          <hr />
          <p className="card-text text-center text-secondary mb-2">Ingredientes:</p>
          <ul className="list-unstyled text-center mb-3">
            {ingredients?.map((ingredient, index) => (
              <li key={index} className="text-capitalize">🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <hr />
          <h4 className="card-text text-center fw-bold mb-3">
            Precio: ${formatTotal(price)}
          </h4>
          <div className="d-flex justify-content-around">
            <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">
              Ver Más 👀
            </Link>
            <button 
              className="btn btn-dark btn-sm"
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;