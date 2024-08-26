import "./Home.css";
import Products from "../Products/Products";
import {appTitle , headingImage} from './../../data/ProductData'
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="home-conatiner">
      <h1 className="home-heading">{appTitle}</h1>
      <img
        src={headingImage}
        alt="heading-image"
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
