import { useCart } from '../context/CartContext';
import { formatTotal } from '../utils/formatUtils';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();

  return (
    <div className="container my-5 flex-grow-1">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="mb-4 fw-bold">Detalles del pedido:</h3>
        
        {cart.length === 0 ? (
          <p className="text-center my-4 fs-5">El carrito está vacío 🍕</p>
        ) : (
          <>
            {cart.map((pizza) => (
              <div key={pizza.id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                <div className="d-flex align-items-center gap-3">
                  <img src={pizza.img} alt={pizza.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                  <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold">${formatTotal(pizza.price * pizza.count)}</span>
                  <button className="btn btn-outline-danger btn-sm px-2" onClick={() => decreaseCount(pizza.id)}>-</button>
                  <span className="fw-bold">{pizza.count}</span>
                  <button className="btn btn-outline-primary btn-sm px-2" onClick={() => increaseCount(pizza.id)}>+</button>
                </div>
              </div>
            ))}
            
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4 className="fw-bold mb-0">Total: ${formatTotal(total)}</h4>
              <button className="btn btn-dark btn-lg">Pagar 💳</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;