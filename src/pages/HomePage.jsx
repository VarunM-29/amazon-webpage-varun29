import ProductCard from "../components/ProductCard.jsx";

const promos = [
  {
    title: "Upgrade your workspace",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Refresh your home",
    category: "home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Styles under budget",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Books worth staying up for",
    category: "books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
  }
];

export default function HomePage({
  visibleProducts,
  addToCart,
  setCategory,
  sort,
  setSort,
  query,
  setQuery,
  category,
  primeOnly,
  setPrimeOnly,
  priceRange,
  setPriceRange,
  totalProducts
}) {
  return (
    <div className="pageWrapper">
      <section className="hero" id="top">
        <div className="heroContent">
          <p>New launch offer</p>
          <h1>Shop the latest tech, fashion, and home essentials.</h1>
          <button type="button" onClick={() => setCategory("electronics")}>Shop electronics</button>
        </div>

        <aside className="heroDealCards" aria-label="Today's deals">
          {[
            { icon: "⚡", label: "Electronics", off: "Up to 60% off", color: "#7b2ff7", delay: "0s" },
            { icon: "👗", label: "Fashion",     off: "Up to 45% off", color: "#f953c6", delay: "0.4s" },
            { icon: "🏠", label: "Home & Living", off: "Up to 50% off", color: "#ff6a00", delay: "0.8s" },
          ].map((deal) => (
            <div
              key={deal.label}
              className="dealCard"
              style={{ "--glow": deal.color, animationDelay: deal.delay }}
              onClick={() => setCategory(deal.label.toLowerCase().split(" ")[0])}
            >
              <span className="dealIcon">{deal.icon}</span>
              <div className="dealInfo">
                <strong>{deal.label}</strong>
                <span className="dealOff">{deal.off}</span>
              </div>
              <span className="dealArrow">→</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="promoGrid">
        {promos.map((promo) => (
          <article key={promo.category} onClick={() => setCategory(promo.category)}>
            <h2>{promo.title}</h2>
            <img src={promo.image} alt={promo.title} loading="lazy" />
            <button type="button">Shop {promo.category}</button>
          </article>
        ))}
      </section>

      <section className="toolbar pageSection">
        <div>
          <h2>Recommended for you</h2>
          <p>{visibleProducts.length} of {totalProducts} products match your filters.</p>
        </div>
        <div className="filterGroup">
          <label>
            Sort by
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </label>
          <label className="inlineCheckbox">
            <input type="checkbox" checked={primeOnly} onChange={(event) => setPrimeOnly(event.target.checked)} />
            Prime only
          </label>
          <label>
            Max price: ₹{priceRange[1].toLocaleString()}
            <input
              type="range"
              min="0"
              max="120000"
              step="500"
              value={priceRange[1]}
              onChange={(event) => setPriceRange([0, Number(event.target.value)])}
            />
          </label>
        </div>
      </section>

      <section className="pageSection filterChips">
        <button type="button" className={category === "all" ? "chip active" : "chip"} onClick={() => setCategory("all")}>All products</button>
        <button type="button" className={category === "electronics" ? "chip active" : "chip"} onClick={() => setCategory("electronics")}>Electronics</button>
        <button type="button" className={category === "home" ? "chip active" : "chip"} onClick={() => setCategory("home")}>Home</button>
        <button type="button" className={category === "fashion" ? "chip active" : "chip"} onClick={() => setCategory("fashion")}>Fashion</button>
        <button type="button" className={category === "books" ? "chip active" : "chip"} onClick={() => setCategory("books")}>Books</button>
        <button type="button" className={category === "prime" ? "chip active" : "chip"} onClick={() => setCategory("prime")}>Prime</button>
      </section>

      <section className="productGrid">
        {visibleProducts.length === 0 ? (
          <div className="empty">No products match your search. Try a different filter.</div>
        ) : (
          visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))
        )}
      </section>
    </div>
  );
}
