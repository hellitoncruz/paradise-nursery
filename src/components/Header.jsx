import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="header">
      <nav className="nav">
        <div className="logoAndName"><a href="/"><img className="logo-icon" src="/logo-icon.png" alt="" /></a></div>
          <Link className="products" to="/products">Plants</Link>
        <div>
          <Link to="/cart">
            <FaShoppingCart />
            <span>{totalItems}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}