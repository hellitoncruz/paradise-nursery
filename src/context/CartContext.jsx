import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) removeItem(id);
    else setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeItem = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, totalItems, totalCost }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);