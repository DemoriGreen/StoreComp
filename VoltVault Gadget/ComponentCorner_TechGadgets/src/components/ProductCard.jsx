import "./ProductCard.css";

function ProductCard({ name, price, image, description, badge = "STAFF PICK" }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {badge && <span className="product-badge">{badge}</span>}
        <img className="product-image" src={image} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-heading">
          <h3>{name}</h3>
          <span className="product-price">{price}</span>
        </div>
        <p>{description}</p>
        <a href="#contact" className="product-link">View product <span>↗</span></a>
      </div>
    </article>
  );
}

export default ProductCard;
