import { createContext, useState, useContext } from 'react';
import { pizzaCart as initialPizzas } from '../data/pizzas';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(initialPizzas || []);

  
  const addToCart = (pizza) => {
    const existingIndex = cart.findIndex((item) => item.id === pizza.id);

    if (existingIndex >= 0) {
      
      const updatedCart = [...cart];
      updatedCart[existingIndex].count += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

 
  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  
  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCount,
        decreaseCount,
        total: calculateTotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};