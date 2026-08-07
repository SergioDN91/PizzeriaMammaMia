import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatTotal } from '../utils/formatUtils';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error('Error al obtener la pizza:', error);
      }
    };
    getPizza();
  }, [id]);

  if (!pizza) return <p className="text-center my-5">Cargando pizza...</p>;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ maxWidth: '700px' }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ height: '300px', objectFit: 'cover' }} />
        <div className="card-body p-4">
          <h2 className="card-title text-capitalize fw-bold">{pizza.name}</h2>
          <p className="card-text text-secondary">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients?.map((item, index) => (
              <li key={index} className="text-capitalize">🍕 {item}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="fw-bold m-0">Precio: ${formatTotal(pizza.price)}</h3>
            <button className="btn btn-dark" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;