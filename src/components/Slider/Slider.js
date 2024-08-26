import "./Slider.css";
import Slider from "react-slick";
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    {
      src: "https://img.freepik.com/free-photo/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products_342744-1133.jpg",
      alt: "grocery market",
    },
    {
      src: "https://img.freepik.com/premium-photo/grocery-basket-is-filled-with-vegetables-fruits-concept-food-availability-people_946657-24092.jpg",
      alt: "grocery market",
    },
    {
      src: "https://img.freepik.com/premium-photo/colorful-fresh-produce-grocery-store-display_337384-180799.jpg",
      alt: "grocery market",
    },
    {
      src: "https://img.freepik.com/premium-photo/fresh-produce-shopping-cart-supermarket_1281119-703.jpg",
      alt: "grocery market",
    },
    {
      src: "https://img.freepik.com/premium-photo/various-groceries-shopping-cart_107420-66191.jpg",
      alt : 'grocery market'
    },
    {
      src: "https://img.freepik.com/free-photo/female-person-with-shopping-cart-taking-frozen-food-from-fridge-grocery-store_342744-1138.jpg",
      alt: "grocery market",
    }
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
