import "./Home.css";
import Products from "../Products/Products";
import {appTitle } from './../../data/ProductData'
import Footer from "../../components/Footer/Footer";
import ImageSlider from './../../components/Slider/Slider'
function Home() {
  return (
    <div className="home-conatiner">
      <h1 className="home-heading">{appTitle}</h1>
      
      <ImageSlider/>
      <div>
      </div>
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;
