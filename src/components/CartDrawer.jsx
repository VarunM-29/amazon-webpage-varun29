import { Link } from "react-router-dom";

export default function CartDrawer({
  cartDetails,
  subtotal,
  shipping,
  total,
  open,
  onClose,
  changeQuantity,
  removeItem
}) {
  return (
    <>
      <aside className={`cartDrawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawerHeader">
          <h2>Your Cart</h2>
          <button className="iconButton" type="button" onClick={onClose}>×</button>
        </div>

        <div className="cartItems">
          {cartDetails.length === 0 ? (
            <div className="empty">
              <p>Your cart is empty.</p>
              <Link to="/" onClick={onClose}>Continue shopping</Link>
            </div>
          ) : (
            cartDetails.map(({ product, quantity }) => (
              <article className="cartLine" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <strong>₹{product.price.toLocaleString()}</strong>
                  <div className="quantityRow">
                    <button type="button" onClick={() => changeQuantity(product.id, -1)}>-</button>
                    <span>Qty {quantity}</span>
                    <button type="button" onClick={() => changeQuantity(product.id, 1)}>+</button>
                    <button className="removeButton" type="button" onClick={() => removeItem(product.id)}>Remove</button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="cartSummary">
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString()}</strong></div>
          <div><span>Shipping</span><strong>{shipping === 0 ? "FREE" : `₹${shipping.toLocaleString()}`}</strong></div>
          <div><span>Total</span><strong>₹{total.toLocaleString()}</strong></div>
          <Link to="/checkout" className="checkoutButton" onClick={onClose}>Proceed to checkout</Link>
        </div>
      </aside>
      {open && <button className="overlay" aria-label="Close cart" type="button" onClick={onClose} />}
    </>
  );
}
