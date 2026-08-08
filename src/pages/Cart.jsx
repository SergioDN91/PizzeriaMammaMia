import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { formatTotal } from '../utils/formatUtils';

// Importamos las imágenes locales
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

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();
  const { token } = useUser();
  const [successMsg, setSuccessMsg] = useState(false);

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setSuccessMsg(true);
      }
    } catch (error) {
      console.error('Error al realizar el checkout:', error);
    }
  };

  return (
    <div className="container my-5 flex-grow-1">
      <h3 className="fw-bold mb-4 text-center">Detalles del pedido:</h3>

      {successMsg && (
        <div className="alert alert-success text-center fw-bold" role="alert">
          🎉 ¡Compra realizada con éxito! Tu pedido está en camino.
        </div>
      )}

      {cart.length === 0 ? (
        <p className="text-center fs-5">El carrito está vacío 🍕</p>
      ) : (
        <div className="p-3 bg-light rounded border shadow-sm">
          {cart.map((pizza) => {
            // Obtenemos la imagen local según ID, nombre o fallback
            const pizzaImage =
              localImages[pizza.id] ||
              localImages[pizza.name?.toLowerCase()] ||
              pizza.img ||
              imgNapolitana;

            return (
              <div
                key={pizza.id}
                className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={pizzaImage}
                    alt={pizza.name}
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    className="rounded shadow-sm"
                  />
                  <h6 className="text-capitalize fw-bold mb-0">{pizza.name}</h6>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold text-success">
                    ${formatTotal(pizza.price * pizza.count)}
                  </span>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => decreaseCount(pizza.id)}
                  >
                    -
                  </button>
                  <span className="fw-bold">{pizza.count}</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => increaseCount(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}

          <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
            <h4 className="fw-bold mb-0">Total: ${formatTotal(total)}</h4>
            <button
              className="btn btn-dark btn-lg"
              disabled={!token}
              onClick={handleCheckout}
            >
              Pagar 💳
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;