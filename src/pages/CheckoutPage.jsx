import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutPage({ cartDetails, subtotal, shipping, total, onCheckout }) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    onCheckout({ name: String(form.get("name")), address: String(form.get("address")), payment: String(form.get("payment")) });
    setMessage(`Thanks, ${String(form.get("name"))}. Your order has been placed.`);
    setTimeout(() => navigate("/"), 2600);
  };

  const items = useMemo(() => cartDetails.length, [cartDetails]);

  return (
    <section className="pageSection checkoutPage">
      <div className="pageHeader">
        <Link to="/" className="linkButton">← Continue shopping</Link>
        <h1>Checkout</h1>
      </div>

      {cartDetails.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty. Add items before checking out.</p>
          <Link to="/">Browse products</Link>
        </div>
      ) : (
        <div className="checkoutGrid">
          <form className="checkoutForm" onSubmit={handleSubmit}>
            <label>
              Full name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Delivery address
              <textarea name="address" required placeholder="House number, street, city" />
            </label>
            <label>
              Payment method
              <select name="payment">
                <option>Credit / Debit Card</option>
                <option>UPI</option>
                <option>Cash on Delivery</option>
              </select>
            </label>
            <button type="submit">Place order</button>
            {message && <p className="message">{message}</p>}
          </form>

          <aside className="checkoutSummary">
            <h2>Order summary</h2>
            <p>{items} items</p>
            <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString()}</strong></div>
            <div><span>Shipping</span><strong>{shipping === 0 ? "FREE" : `₹${shipping.toLocaleString()}`}</strong></div>
            <div className="checkoutTotal"><span>Total</span><strong>₹{total.toLocaleString()}</strong></div>
          </aside>
        </div>
      )}
    </section>
  );
}
