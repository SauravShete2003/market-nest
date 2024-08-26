import "./Products.css";
import {productData} from "../../data/ProductData";
import ProductCard from "../../components/ProductCard/ProductCard";
function Products() {
  return (
    <div>
      <h2 className="home-subheading">Welcome to Market Nest</h2>
      <div className="home-products">
        {productData.map((product, i) => {
          const { title, image, price, description } = product;
          return (
            <ProductCard
              key={i}
              title={title}
              image={image}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
