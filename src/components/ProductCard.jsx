import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="productCard">
      <span className="badge">{product.badge}</span>
      <Link to={`/product/${product.id}`} className="imageLink">
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div>
        <h3>{product.title}</h3>
        <p className="rating">{"★".repeat(Math.round(product.rating))} {product.rating} <span>({product.reviews.toLocaleString()})</span></p>
        <p className="prime">{product.prime ? "Prime FREE delivery" : "Standard delivery"}</p>
      </div>
      <p className="price">₹{product.price.toLocaleString()} <small>₹{product.oldPrice.toLocaleString()}</small></p>
      <div className="productActions">
        <button type="button" onClick={() => onAdd(product.id)}>Add to Cart</button>
        <Link className="secondary" to={`/product/${product.id}`}>Preview</Link>
      </div>
    </article>
  );
}
