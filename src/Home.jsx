import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FoodMenu.css";

function Home() {
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="container mt-5 text-center food-menu-container">
      <h1 className="display-5 fw-bold">
        <span style={{ color:"black" }}> Welcome to </span>
        <span style={{ color:"red" }}>FoodMart...</span>
        <span   style={{ color:"#FF8400" }}> <br />Your One-Stop Grocery Destination!</span>
        <span className="rolling-cart">🛒</span>
      </h1>
      
      {/* Sale Timer */}
      <div className="sale-timer my-4 p-3 bg-dark text-light rounded">
        <h2>🔥 Limited Time Sale! 🔥</h2>
        <h3>{timeLeft > 0 ? `Sale Ends In: ${formatTime(timeLeft)}` : "Sale is Over!"}</h3>
      </div>

      {/* categories Section */}
      <div className="row">
        
        {/* Fresh Vegetables */}
        <div className="col-md-3 mb-5">
          <div className="card h-100 shadow-sm">
            <img src="/veg-items/veg1.png" className="card-img-top img-fluid food-img" alt="Vegetables" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Fresh Vegetables</h5>
              <p className="card-text flex-grow-1">Explore a variety of fresh and organic vegetables sourced from local farms.</p>
              <Link to="/veg" className="btn btn-success mt-auto">Explore</Link>
            </div>
          </div>
        </div>

        {/* Quality Meat & Poultry */}
        <div className="col-md-3 mb-5">
          <div className="card h-100 shadow-sm">
            <img src="/non-veg-items/nonveg1.png" className="card-img-top img-fluid food-img" alt="Meat & Poultry" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Non-Veg Food</h5>
              <p className="card-text flex-grow-1">Get fresh, hygienic, and high-quality non-veg food delivered to your home.</p>
              <Link to="/nonVeg" className="btn btn-danger mt-auto">Explore</Link>
            </div>
          </div>
        </div>

        {/* Dairy Products */}
        <div className="col-md-3 mb-5">
          <div className="card h-100 shadow-sm">
            <img src="/dairy-items/farm.png" className="card-img-top img-fluid food-img mt-5" alt="Dairy" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dairy Products</h5>
              <p className="card-text flex-grow-1">Enjoy farm-fresh dairy products, including milk, cheese, and yogurt.</p>
              <Link to="/dairy" className="btn btn-primary mt-auto">Explore</Link>
            </div>
          </div>
        </div>

        {/* Delicious Cakes */}
        <div className="col-md-3 mb-5">
          <div className="card h-100 shadow-sm">
            <img src="/cake-items/cake.png" className="card-img-top img-fluid food-img" alt="Cakes" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Delicious Cakes</h5>
              <p className="card-text flex-grow-1">Indulge in freshly baked cakes, from rich chocolate to fruity flavors.</p>
              <Link to="/cakes" className="btn btn-warning mt-auto">Explore</Link>
            </div>
          </div>
        </div>

      </div>

      {/* Stores Section */}
      <h1 className="mt-5 mb-4">Top  Restaurant</h1>
      <div className="container store-section">
      <div className="row">
        
        {/* Store 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/dineout.webp" className="card-img-top store-img" alt="Store 1" />
            <div className="card-body">
              <h5 className="card-title">Dineout</h5>
              <p className="card-text">
              ⭐⭐⭐⭐ 4.8 (320 Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Store 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/restuarant.jpg" className="card-img-top store-img" alt="Store 2" />
            <div className="card-body">
              <h5 className="card-title">Cafe Delight</h5>
              <p className="card-text">
                ⭐⭐⭐⭐ 4.7 (280 Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Store 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/store3.jpg" className="card-img-top store-img" alt="Store 3" />
            <div className="card-body">
              <h5 className="card-title">Barcelona</h5>
              <p className="card-text">
              ⭐⭐⭐⭐ 4.6 (250 Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Store 4 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/store4.jpg" className="card-img-top store-img" alt="Store 1" />
            <div className="card-body">
              <h5 className="card-title">Scottish Cafe</h5>
              <p className="card-text">
              ⭐⭐⭐⭐ 4.5 (320 Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Store 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/nirvana.jpg" className="card-img-top store-img" alt="Store 2" />
            <div className="card-body">
              <h5 className="card-title">Nirvana</h5>
              <p className="card-text">
                ⭐⭐⭐⭐ 3.8 (280 Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Store 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/Stores/rajdhani.jpg" className="card-img-top store-img" alt="Store 3" />
            <div className="card-body">
              <h5 className="card-title">Rajdhani</h5>
              <p className="card-text">
              ⭐⭐⭐⭐ 3.7 (250 Reviews)
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>

      {/* Market Section */}
      <div className="container store-section">
  <h1 className="mt-5 mb-4">Markets</h1>
  <div className="row">
    
    {/* Florence Food Market */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/market/flour.jpg" className="card-img-top img-fluid market-img" alt="Florence Food Market" />
        <div className="card-body">
          <h5 className="card-title">Florence Food Market</h5>
          <p className="card-text"><strong>Address : </strong> 123 Main Street, Florence</p>
        </div>
      </div>
    </div>

    {/* The Wet Market Chicken Stall */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/market/wetmarket.JPG" className="card-img-top img-fluid market-img" alt="The Wet Market Chicken Stall" />
        <div className="card-body">
          <h5 className="card-title">The Wet Market Chicken Stall</h5>
          <p className="card-text"><strong>Address : </strong> 45 Poultry Lane, Downtown</p>
        </div>
      </div>
    </div>

    {/* Aqua The Fish Market */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="/market/fishmarket.jpg" className="card-img-top img-fluid market-img" alt="Aqua The Fish Market" />
        <div className="card-body">
          <h5 className="card-title">Aqua The Fish Market</h5>
          <p className="card-text"><strong>Address : </strong> 78 Ocean Drive, Seaside</p>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
}

export default Home;
