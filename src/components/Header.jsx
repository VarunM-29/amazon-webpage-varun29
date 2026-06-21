import { Link } from "react-router-dom";

export default function Header({
  location,
  onLocationChange,
  query,
  setQuery,
  onSearchSubmit,
  category,
  setCategory,
  categories,
  cartCount,
  onOpenCart,
  suggestions
}) {
  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Amazon demo home">
          <span>amazon</span>
          <i />
        </Link>

        <button className="locationButton" type="button" onClick={() => {
          const next = window.prompt("Enter delivery location", location);
          if (next?.trim()) onLocationChange(next.trim());
        }}>
          <small>Deliver to</small>
          <strong>{location}</strong>
        </button>

        <form className="search" onSubmit={onSearchSubmit}>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="prime">Prime</option>
          </select>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            list="search-suggestions"
            placeholder="Search Amazon"
          />
          <datalist id="search-suggestions">
            {suggestions.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>

        <Link className="accountButton" to="/account">
          <small>Hello, sign in</small>
          <strong>Account & Lists</strong>
        </Link>

        <button className="cartButton" type="button" onClick={onOpenCart}>
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </button>
      </header>

      <nav className="subnav" aria-label="Category navigation">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item === "all" ? "All deals" : item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
    </>
  );
}
