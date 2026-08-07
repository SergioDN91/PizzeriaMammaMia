import { useState } from 'react';
// IMPORTANTE: Asegúrate de importar la variable con el nombre que usas abajo
import { pizzaCart as initialCart } from '../data/pizzas'; // <-- Ajustado
import { formatTotal } from '../utils/formatUtils';           // <-- Ajustado

const Cart = () => {
  // ... resto del código ...
  
  const [cart, setCart] = useState(initialCart);

  
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
      .filter((item) => item.count > 0); 
    setCart(updatedCart);
  };

  
  const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="container my-5 flex-grow-1" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 fw-bold">Detalles del pedido:</h3>
      
      {cart.length === 0 ? (
        <p className="text-muted fs-5">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="d-flex flex-column gap-3 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom pb-2">
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} 
                  />
                  <span className="fs-5 text-capitalize fw-semibold">{item.name}</span>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-5 fw-bold text-dark">${formatTotal(item.price)}</span>
                  
                  
                  <button 
                    className="btn btn-outline-danger btn-sm px-2 py-0 fs-5"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  
                  <span className="fs-5 fw-bold">{item.count}</span>
                  
                  
                  <button 
                    className="btn btn-outline-primary btn-sm px-2 py-0 fs-5"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="fw-bold my-4">Total: ${formatTotal(totalAmount)}</h2>
          <button className="btn btn-dark btn-lg px-4">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;