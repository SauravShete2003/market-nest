import "./Home.css";
import Products from "../Products/Products";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="home-conatiner">
      <h1 className="home-heading">Market Nest</h1>
      <img
        src="https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28165.jpg"
        className="home-image"
      />
      <div>
      </div>
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;
