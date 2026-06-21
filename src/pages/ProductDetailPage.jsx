import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => products.find((item) => String(item.id) === id), [products, id]);

  if (!product) {
    return (
      <section className="pageSection notFound">
        <h2>Product not found</h2>
        <p>We couldn't find that item. Try browsing the home page.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <section className="pageSection productDetailPage">
      <div className="pageHeader">
        <button type="button" className="linkButton" onClick={() => navigate(-1)}>← Back</button>
        <div>
          <p className="textMuted">{product.brand}</p>
          <h1>{product.title}</h1>
        </div>
      </div>

      <div className="productDetail">
        <img src={product.image} alt={product.title} loading="lazy" />
        <div className="productSummary">
          <p className="rating">{"★".repeat(Math.round(product.rating))} {product.rating} ({product.reviews.toLocaleString()} reviews)</p>
          <p className="price">₹{product.price.toLocaleString()} <small>₹{product.oldPrice.toLocaleString()}</small></p>
          <p className={product.prime ? "prime" : "textMuted"}>{product.prime ? "Prime FREE one-day delivery available" : "Standard shipping options available"}</p>
          <ul>
            {product.description.map((line) => <li key={line}>{line}</li>)}
          </ul>
          <button type="button" onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="relatedSection">
          <h2>More from {product.category}</h2>
          <div className="relatedGrid">
            {related.map((item) => (
              <Link className="relatedCard" key={item.id} to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <p>{item.title}</p>
                  <strong>₹{item.price.toLocaleString()}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
