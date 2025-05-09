import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import ComingSoonModal from "../components/ComingSoonModal"; // ajuste o caminho se necessário
import { useState } from "react";


export default function Cart() {
  const { cartItems, totalItems, totalCost, updateQuantity, removeItem } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="cart">
      <h2 className="cart-title">My Cart</h2>
      <p className="cart-total-items">Total Items: {totalItems}</p>
      <p className="cart-total-cost">Total Cost: ${totalCost}</p>
      {cartItems.map(item => (
        <CartItem className="cart-item"  key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
      ))}
      <Link to="/products"><button className="cart-btn">Continue Shopping</button></Link>
      <button className="cart-btn" onClick={() => setModalOpen(true)}>Checkout</button>
      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}