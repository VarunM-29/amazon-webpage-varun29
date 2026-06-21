import { useEffect, useMemo, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import { products, categories } from "./data/products.js";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [primeOnly, setPrimeOnly] = useState(false);
  const [priceMax, setPriceMax] = useState(120000);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("amazonReactCart") || "[]"));
  const [cartOpen, setCartOpen] = useState(false);
  const [location, setLocation] = useState(() => localStorage.getItem("amazonReactLocation") || "New Delhi 110001");

  useEffect(() => {
    localStorage.setItem("amazonReactCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("amazonReactLocation", location);
  }, [location]);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === "all" || product.category === category || (category === "prime" && product.prime);
      const queryMatch = !normalizedQuery || product.title.toLowerCase().includes(normalizedQuery) || product.category.includes(normalizedQuery);
      const priceMatch = product.price <= priceMax;
      const primeMatch = !primeOnly || product.prime;
      return categoryMatch && queryMatch && priceMatch && primeMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [normalizedQuery, category, sort, primeOnly, priceMax]);

  const searchSuggestions = useMemo(() => {
    if (!normalizedQuery) return [];
    const unique = new Set();
    return products
      .filter((product) => product.title.toLowerCase().includes(normalizedQuery) || product.category.includes(normalizedQuery))
      .slice(0, 6)
      .map((product) => product.title)
      .filter((title) => {
        if (unique.has(title)) return false;
        unique.add(title);
        return true;
      });
  }, [normalizedQuery]);

  const cartDetails = cart
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal > 499 ? 0 : 49;
  const total = subtotal + shipping;

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

  function handleCheckout() {
    setCart([]);
    window.scrollTo(0, 0);
  }

  return (
    <HashRouter>
      <Header
        location={location}
        onLocationChange={setLocation}
        query={query}
        setQuery={setQuery}
        onSearchSubmit={(event) => event.preventDefault()}
        category={category}
        setCategory={setCategory}
        categories={categories}
        cartCount={itemCount}
        onOpenCart={() => setCartOpen(true)}
        suggestions={searchSuggestions}
      />

      <main className="appShell">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                visibleProducts={visibleProducts}
                addToCart={addToCart}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                query={query}
                setQuery={setQuery}
                category={category}
                primeOnly={primeOnly}
                setPrimeOnly={setPrimeOnly}
                priceRange={[0, priceMax]}
                setPriceRange={([min, max]) => setPriceMax(max)}
                totalProducts={products.length}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartDetails={cartDetails} subtotal={subtotal} shipping={shipping} total={total} onCheckout={handleCheckout} />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={
            <section className="pageSection notFound">
              <h2>Page not found</h2>
              <p>The route you asked for doesn't exist.</p>
              <Link to="/">Back to home</Link>
            </section>
          } />
        </Routes>
      </main>

      <CartDrawer
        cartDetails={cartDetails}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        changeQuantity={changeQuantity}
        removeItem={removeItem}
      />
    </HashRouter>
  );
}

export default App;
