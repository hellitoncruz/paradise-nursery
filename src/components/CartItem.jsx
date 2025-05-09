export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-infos">
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className="addAndDel">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="removeItem" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}