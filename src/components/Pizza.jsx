import { useState, useEffect } from 'react';
import { formatTotal } from '../utils/formatUtils';
import imgNapolitana from '../assets/img/napolitana.jpg';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container text-center my-5 flex-grow-1">
        <h2>Cargando pizza...</h2>
      </div>
    );
  }

  return (
    <div className="container my-5 flex-grow-1 d-flex justify-content-center">
      <div className="card mb-3 shadow" style={{ maxWidth: '800px' }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img 
              src={pizza.img || imgNapolitana} 
              onError={(e) => { e.target.src = imgNapolitana; }} 
              className="img-fluid rounded-start h-100 object-fit-cover" 
              alt={pizza.name} 
              style={{ minHeight: '300px', maxHeight: '400px', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4">
              <h3 className="card-title text-capitalize fw-bold mb-3">Pizza {pizza.name}</h3>
              <p className="card-text text-secondary">{pizza.desc}</p>
              
              <div className="mb-3">
                <p className="fw-bold mb-1">Ingredientes:</p>
                <ul className="list-unstyled">
                  {pizza.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-capitalize">🍕 {ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <span className="fs-4 fw-bold text-dark">
                  Precio: ${formatTotal(pizza.price)}
                </span>
                <button className="btn btn-dark px-4">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;