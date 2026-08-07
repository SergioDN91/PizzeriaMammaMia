import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { formatTotal } from '../utils/formatUtils';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();
  const { token } = useUser();

  return (
    <div className="container my-5 flex-grow-1">
      <h3 className="fw-bold mb-4">Detalles del pedido:</h3>
      
      {cart.length === 0 ? (
        <p>El carrito está vacío 🍕</p>
      ) : (
        <div className="p-3 bg-light rounded border">
          {cart.map((pizza) => (
            <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <div className="d-flex align-items-center gap-3">
                <img src={pizza.img} alt={pizza.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                <h6 className="text-capitalize fw-bold mb-0">{pizza.name}</h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="fw-bold text-success">${formatTotal(pizza.price * pizza.count)}</span>
                <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseCount(pizza.id)}>-</button>
                <span className="fw-bold">{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => increaseCount(pizza.id)}>+</button>
              </div>
            </div>
          ))}
          
          <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
            <h4 className="fw-bold mb-0">Total: ${formatTotal(total)}</h4>
            <button className="btn btn-dark btn-lg" disabled={!token}>
              Pagar 💳
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;