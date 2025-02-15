import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FoodMenu.css";

function FoodMenu() {
  return (
    <div className="container mt-5 text-center food-menu-container">
  
  <div className="d-flex flex-column align-items-center justify-content-between p-1 mx-5">
    <h1 className="display-5 fw-bold">
      <span className="text-primary"> Welcome to </span>
      <span className="text-success">FlavorMart</span>
      <span className="text-primary"> - Your One-Stop Grocery Destination!</span>
      <span className="rolling-cart">🛒</span>
    </h1>
    <p className="lead mx-5">
      Discover a seamless shopping experience with our fully functional cart, built using
      <strong> React and Redux</strong>. Easily add, remove, and update items in real-time.
    </p>
  </div>

  {/* Wrap all food cards inside a dedicated div */}
  <div className="food-card-wrapper">
    {/* Fresh Vegetables */}
    <div className="food-card d-flex align-items-center justify-content-between p-3 m-5">
      <div className="text-start">
        <h1 className="fw-bold">Fresh Vegetables</h1>
        <p>Explore a variety of fresh and organic vegetables sourced directly from local farms. Enjoy nutritious, pesticide-free produce for a healthier lifestyle.</p>
        <Link to="/veg" className="btn btn-success mt-2">Explore</Link>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/veg">
          <img src="/veg-items/veg1.png" alt="Vegetables" className="food-image-lg food-image" />
        </Link>
      </div>
    </div>

    {/* Quality Meat & Poultry */}
    <div className="food-card d-flex align-items-center justify-content-between p-3 m-5">
      <div className="text-start">
        <h1 className="fw-bold">Quality Meat & Poultry</h1>
        <p>Get fresh, hygienic, and high-quality meat products delivered to your home. Our selection includes premium cuts of chicken, beef, lamb, and seafood.</p>
        <Link to="/nonVeg" className="btn btn-danger mt-2">Explore</Link>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/nonVeg">
          <img src="/non-veg-items/nonveg1.png" alt="Non-Veg" className="food-image-lg food-image" />
        </Link>
      </div>
    </div>

    {/* Dairy Products */}
    <div className="food-card d-flex align-items-center justify-content-between p-3 m-5">
      <div className="text-start">
        <h1 className="fw-bold">Dairy Products</h1>
        <p>Enjoy farm-fresh dairy products, including milk, cheese, yogurt, and butter. Sourced from trusted dairy farms to ensure quality and taste.</p>
        <Link to="/dairy" className="btn btn-primary mt-2">Explore</Link>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/dairy">
          <img src="/dairy-items/farm.png" alt="Dairy" className="food-image-lg food-image" />
        </Link>
      </div>
    </div>

    {/* Delicious Cakes */}
    <div className="food-card d-flex align-items-center justify-content-between p-3 m-5">
      <div className="text-start text-menu">
        <h1 className="fw-bold">Delicious Cakes</h1>
        <p>Indulge in a variety of freshly baked cakes, from rich chocolate to fruity flavors. Perfect for birthdays, celebrations, or just a sweet treat!</p>
        <Link to="/cakes" className="btn btn-warning mt-2">Explore</Link>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/cakes">
          <img src="/cake-items/cake.png" alt="Cakes" className="food-image-lg food-image" />
        </Link>
      </div>
    </div>
  </div>
</div>

  );
}

export default FoodMenu;
