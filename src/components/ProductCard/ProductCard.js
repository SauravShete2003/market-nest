import './ProductCard.css'
function ProductCard({ description, title, image, price }) {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-heading">{title}</h2>
      <p className="product-description">{description.length <= 70 ? description : description.substring(0, 70) + '...'}
      </p>
      <p className="product-price">Price: {price}</p>
      <button type='button' className='product-btn'>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
