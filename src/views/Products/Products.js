import "./Products.css";
import { productData, headingText } from "../../data/ProductData";
import ProductCard from "../../components/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";

function Products() {
  const [filterData, setFilterData] = useState([...productData]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      setFilterData([...productData]);
      return;
    }
 
    const newData = productData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(newData);
  }, [search]);

  return (
    <div>
      <h2 className="home-subheading">{headingText}</h2>
      <input
        placeholder="Search..."
        className="input-box"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="home-products">
        {filterData.map((product, i) => {
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
