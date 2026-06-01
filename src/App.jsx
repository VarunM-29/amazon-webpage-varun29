import { useEffect, useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    title: "Echo Dot smart speaker with Alexa",
    category: "electronics",
    price: 4499,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 12841,
    prime: true,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    description: ["Crisp room-filling sound", "Voice control for music and smart home devices", "Compact design for bedrooms, desks, and kitchens"]
  },
  {
    id: 2,
    title: "UltraBook Air 14-inch laptop, 16GB RAM",
    category: "electronics",
    price: 74990,
    oldPrice: 92990,
    rating: 4.6,
    reviews: 5342,
    prime: true,
    badge: "Limited time",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    description: ["Fast everyday performance", "Thin aluminum body with all-day battery life", "Backlit keyboard and vivid display"]
  },
  {
    id: 3,
    title: "Noise cancelling wireless headphones",
    category: "electronics",
    price: 10999,
    oldPrice: 15999,
    rating: 4.5,
    reviews: 9213,
    prime: true,
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: ["Active noise cancellation", "Up to 35 hours of playback", "Soft ear cushions for long listening sessions"]
  },
  {
    id: 4,
    title: "Modern ceramic dinnerware set, 16 pieces",
    category: "home",
    price: 3499,
    oldPrice: 4999,
    rating: 4.4,
    reviews: 2867,
    prime: false,
    badge: "Save 22%",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    description: ["Service for four", "Microwave and dishwasher safe", "Matte finish for everyday dining"]
  },
  {
    id: 5,
    title: "Ergonomic office chair with lumbar support",
    category: "home",
    price: 12999,
    oldPrice: 17999,
    rating: 4.3,
    reviews: 4188,
    prime: true,
    badge: "Deal",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
    description: ["Adjustable height and recline", "Breathable mesh back", "Designed for work-from-home comfort"]
  },
  {
    id: 6,
    title: "Classic denim jacket",
    category: "fashion",
    price: 2499,
    oldPrice: 3999,
    rating: 4.4,
    reviews: 1694,
    prime: false,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    description: ["Relaxed everyday fit", "Durable cotton denim", "Pairs easily with casual outfits"]
  },
  {
    id: 7,
    title: "Running shoes with responsive cushioning",
    category: "fashion",
    price: 4999,
    oldPrice: 7499,
    rating: 4.6,
    reviews: 7821,
    prime: true,
    badge: "Top rated",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: ["Lightweight breathable upper", "Cushioned sole for city runs", "Durable grip for daily training"]
  },
  {
    id: 8,
    title: "Crime and Punishment",
    category: "books",
    price: 299,
    oldPrice: 499,
    rating: 4.8,
    reviews: 8421,
    prime: true,
    badge: "Classic",
    image: "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg",
    description: ["Fyodor Dostoevsky's psychological masterpiece", "Paperback edition", "A powerful story of guilt, morality, and redemption"]
  },
  {
    id: 9,
    title: "1984",
    category: "books",
    price: 249,
    oldPrice: 399,
    rating: 4.9,
    reviews: 12786,
    prime: true,
    badge: "Best seller",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description: ["George Orwell's iconic dystopian novel", "Essential modern classic", "A gripping look at surveillance, power, and truth"]
  },
  {
    id: 10,
    title: "The Metamorphosis",
    category: "books",
    price: 199,
    oldPrice: 349,
    rating: 4.6,
    reviews: 5312,
    prime: true,
    badge: "Reader pick",
    image: "https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg",
    description: ["Franz Kafka's unforgettable novella", "Short classic for literary readers", "A surreal story about identity and isolation"]
  },
  {
    id: 11,
    title: "White Nights",
    category: "books",
    price: 179,
    oldPrice: 299,
    rating: 4.7,
    reviews: 4628,
    prime: false,
    badge: "Popular",
    image: "https://covers.openlibrary.org/b/isbn/9781514645769-L.jpg",
    description: ["Fyodor Dostoevsky's tender romantic novella", "Perfect for a quick classic read", "A dreamy story of loneliness and longing"]
  },
  {
    id: 12,
    title: "Animal Farm",
    category: "books",
    price: 229,
    oldPrice: 399,
    rating: 4.8,
    reviews: 11204,
    prime: true,
    badge: "Classic",
    image: "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg",
    description: ["George Orwell's sharp political allegory", "Compact paperback edition", "A timeless tale about power and rebellion"]
  },
  {
    id: 13,
    title: "The Brothers Karamazov",
    category: "books",
    price: 499,
    oldPrice: 799,
    rating: 4.9,
    reviews: 6897,
    prime: true,
    badge: "Premium pick",
    image: "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg",
    description: ["Fyodor Dostoevsky's final great novel", "Deep philosophical family drama", "A landmark classic about faith, doubt, and morality"]
  }
];

const categories = ["all", "electronics", "home", "fashion", "books", "prime"];
const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("amazonReactCart") || "[]"));
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAccount, setShowAccount] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [accountMessage, setAccountMessage] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [location, setLocation] = useState("New Delhi 110001");

  useEffect(() => {
    localStorage.setItem("amazonReactCart", JSON.stringify(cart));
  }, [cart]);

  const visibleProducts = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const categoryMatch = category === "all" || product.category === category || (category === "prime" && product.prime);
      const queryMatch = !cleanQuery || product.title.toLowerCase().includes(cleanQuery) || product.category.includes(cleanQuery);
      return categoryMatch && queryMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [query, category, sort]);

  const cartDetails = cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal > 499 ? 0 : 49;
  const total = subtotal + shipping;
  const overlayOpen = cartOpen || selectedProduct || showAccount || showCheckout;

  function addToCart(productId) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === productId);
      if (existing) {
        return currentCart.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...currentCart, { id: productId, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function changeQuantity(productId, amount) {
    setCart((currentCart) => currentCart
      .map((item) => item.id === productId ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0));
  }

  function removeItem(productId) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  }

  function closeAll() {
    setCartOpen(false);
    setSelectedProduct(null);
    setShowAccount(false);
    setShowCheckout(false);
  }

  function submitAccount(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password"));
    if (password.length < 6) {
      setAccountMessage("Password must be at least 6 characters.");
      return;
    }
    setAccountMessage(`Signed in as ${form.get("email")}.`);
  }

  function submitCheckout(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setCart([]);
    setCheckoutMessage(`Thanks, ${form.get("name")}. Your demo order has been placed.`);
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Amazon demo home">
          <span>amazon</span><i />
        </a>

        <button className="locationButton" type="button" onClick={() => {
          const next = window.prompt("Enter delivery location", location);
          if (next?.trim()) setLocation(next.trim());
        }}>
          <small>Deliver to</small>
          <strong>{location}</strong>
        </button>

        <form className="search" onSubmit={(event) => event.preventDefault()}>
          <select value={category === "prime" ? "all" : category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
          </select>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search Amazon" />
          <button type="submit">Search</button>
        </form>

        <button className="accountButton" type="button" onClick={() => setShowAccount(true)}>
          <small>Hello, sign in</small>
          <strong>Account & Lists</strong>
        </button>

        <button className="cartButton" type="button" onClick={() => setCartOpen(true)}>
          <span>Cart</span>
          <strong>{itemCount}</strong>
        </button>
      </header>

      <nav className="subnav">
        {categories.map((item) => (
          <button key={item} className={category === item ? "active" : ""} type="button" onClick={() => setCategory(item)}>
            {item === "all" ? "Today's Deals" : item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>

      <main>
        <section className="hero" id="top">
          <div>
            <p>New launch offer</p>
            <h1>New iPhone. Built for Apple Intelligence.</h1>
            <button type="button" onClick={() => setCategory("electronics")}>Shop iPhone deals</button>
          </div>
        </section>

        <section className="promoGrid">
          <PromoCard title="Upgrade your workspace" category="electronics" image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80" onPick={setCategory} />
          <PromoCard title="Refresh your home" category="home" image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" onPick={setCategory} />
          <PromoCard title="Styles under budget" category="fashion" image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" onPick={setCategory} />
          <PromoCard title="Books worth staying up for" category="books" image="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80" onPick={setCategory} />
        </section>

        <section className="toolbar">
          <div>
            <h2>Recommended for you</h2>
            <p>{visibleProducts.length ? `Showing ${visibleProducts.length} products` : "No products match your search"}</p>
          </div>
          <label>
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </label>
        </section>

        <section className="productGrid">
          {visibleProducts.length === 0 && <div className="empty">No products found. Try a different search.</div>}
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} onView={setSelectedProduct} />
          ))}
        </section>
      </main>

      <aside className={`cartDrawer ${cartOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <h2>Your Cart</h2>
          <button className="iconButton" type="button" onClick={() => setCartOpen(false)}>x</button>
        </div>
        <div className="cartItems">
          {cartDetails.length === 0 && <div className="empty">Your cart is empty.</div>}
          {cartDetails.map(({ product, quantity }) => (
            <article className="cartLine" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <strong>{money.format(product.price)}</strong>
                <div className="quantityRow">
                  <button type="button" onClick={() => changeQuantity(product.id, -1)}>-</button>
                  <span>Qty {quantity}</span>
                  <button type="button" onClick={() => changeQuantity(product.id, 1)}>+</button>
                  <button className="removeButton" type="button" onClick={() => removeItem(product.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="cartSummary">
          <div><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div>
          <div><span>Estimated shipping</span><strong>{shipping === 0 ? "FREE" : money.format(shipping)}</strong></div>
          <div><span>Total</span><strong>{money.format(total)}</strong></div>
          <button type="button" disabled={!cartDetails.length} onClick={() => setShowCheckout(true)}>Proceed to checkout</button>
        </div>
      </aside>

      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <div className="productDetail">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <div>
              <h2>{selectedProduct.title}</h2>
              <p className="rating">{"★".repeat(Math.round(selectedProduct.rating))} {selectedProduct.rating} ({selectedProduct.reviews.toLocaleString()} ratings)</p>
              <p className="price">{money.format(selectedProduct.price)} <small>{money.format(selectedProduct.oldPrice)}</small></p>
              <p className="prime">{selectedProduct.prime ? "Prime FREE one-day delivery available" : "Standard delivery available"}</p>
              <ul>{selectedProduct.description.map((line) => <li key={line}>{line}</li>)}</ul>
              <button type="button" onClick={() => addToCart(selectedProduct.id)}>Add to Cart</button>
            </div>
          </div>
        </Modal>
      )}

      {showAccount && (
        <Modal small onClose={() => setShowAccount(false)}>
          <h2>Sign in</h2>
          <form onSubmit={submitAccount}>
            <label>Email or mobile number <input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>Password <input name="password" type="password" required placeholder="At least 6 characters" /></label>
            <button type="submit">Continue</button>
          </form>
          {accountMessage && <p className="message">{accountMessage}</p>}
        </Modal>
      )}

      {showCheckout && (
        <Modal small onClose={() => setShowCheckout(false)}>
          <h2>Checkout</h2>
          <form onSubmit={submitCheckout}>
            <label>Full name <input name="name" required placeholder="Your name" /></label>
            <label>Delivery address <textarea name="address" required placeholder="House number, street, city" /></label>
            <label>Payment method
              <select name="payment">
                <option>Credit / Debit Card</option>
                <option>UPI</option>
                <option>Cash on Delivery</option>
              </select>
            </label>
            <button type="submit">Place order</button>
          </form>
          {checkoutMessage && <p className="message">{checkoutMessage}</p>}
        </Modal>
      )}

      {overlayOpen && <button className="overlay" aria-label="Close dialogs" type="button" onClick={closeAll} />}
    </>
  );
}

function PromoCard({ title, category, image, onPick }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <button type="button" onClick={() => onPick(category)}>Shop {category}</button>
    </article>
  );
}

function ProductCard({ product, onAdd, onView }) {
  return (
    <article className="productCard">
      <span className="badge">{product.badge}</span>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p className="rating">{"★".repeat(Math.round(product.rating))} {product.rating} <span>({product.reviews.toLocaleString()})</span></p>
        <p className="prime">{product.prime ? "Prime FREE delivery" : "Standard delivery"}</p>
      </div>
      <p className="price">{money.format(product.price)} <small>{money.format(product.oldPrice)}</small></p>
      <div className="productActions">
        <button type="button" onClick={() => onAdd(product.id)}>Add to Cart</button>
        <button className="secondary" type="button" onClick={() => onView(product)}>View Details</button>
      </div>
    </article>
  );
}

function Modal({ children, small = false, onClose }) {
  return (
    <section className="modal">
      <div className={`modalPanel ${small ? "smallPanel" : ""}`}>
        <button className="iconButton modalClose" type="button" onClick={onClose}>x</button>
        {children}
      </div>
    </section>
  );
}

export default App;
