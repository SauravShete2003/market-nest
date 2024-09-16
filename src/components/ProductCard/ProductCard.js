import "./ProductCard.css";
import plusImg from "./plus-icon.png";
import minusImg from "./minus-icon.png";
import { useEffect, useState } from "react";

function ProductCard({ description, title, image, price }) {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const checkQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  useEffect(() => {
    if (quantity < 3) {
      setTotalPrice(quantity * price);
    } else if (quantity >= 3 && quantity <= 6) {
      const total = quantity * price;
      setTotalPrice(total - 20);
    } else if (quantity < 10) {
      const total = quantity * price;
      setTotalPrice(total - 50);
    }
  }, [quantity, price]);

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-heading">{title}</h2>
      <p className="product-description">
        {description.length <= 70
          ? description
          : description.substring(0, 70) + "..."}
      </p>
      <div className="product-price-container">
        <p className="product-price">Price: {price}</p>
        <p className="product-price">Total Price : {totalPrice}</p>
      </div>

      <p style={{ color: "red", fontSize: "14px", margin: "0" }}>
        {quantity > 10 ? "For bulk orders , delivery time may vary" : ""}
      </p>
      <div className="card-quantity-container">
        <img
          src={minusImg}
          alt="minus"
          className="card-icon"
          onClick={() => {
            checkQuantity("minus");
          }}
        />

        <span className="card-quantity">{quantity}</span>

        <img
          src={plusImg}
          alt="plus"
          className="card-icon"
          onClick={() => {
            checkQuantity("plus");
          }}
        />
      </div>
      <button type="button" className="product-btn">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
