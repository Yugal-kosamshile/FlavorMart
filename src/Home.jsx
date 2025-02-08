import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container mt-5 text-center">
        <h1 className="display-5 fw-bold text-primary">Welcome to My React Shopping Cart!
        <span className="rolling-cart">🛒</span>

        </h1>
        <p className="lead">
          Discover a seamless shopping experience with our fully functional cart, built using 
          <strong> React and Redux</strong>. Easily add, remove, and update items in real-time.
        </p>
        <hr className="my-4" />
        <h2 className="fw-bold">
          <span className="moving-bag">🛍️</span>Start Shopping Now!</h2>
        <p>
          Explore our categories, add items to your cart, and enjoy a smooth shopping experience!
        </p>
      
    
{/* Veg Card */}
<div className="row mt-5 mb-5">
  <div className="col-md-4">
    <div className="card shadow-lg">
      <Link to="/veg">  
        <img
          src="/veg-items/vege.gif"
          className="card-img-top"
          alt="Vegetables"
          style={{ height: "250px", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Fresh Vegetables</h5>
        <p className="card-text">You can explore a variety of fresh and organic vegetables here.</p>
        <Link to="/veg" className="btn btn-success">
          Visit Veg Section
        </Link>
      </div>
    </div>
  </div>

  {/* Non-Veg Card */}
  <div className="col-md-4 mb-5">
    <div className="card shadow-lg">
      <Link to="/nonVeg">
        <img
          src="/non-veg-items/nonveg.gif"
          className="card-img-top"
          alt="Non-Veg"
          style={{ height: "250px", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Quality Meat & Poultry</h5>
        <p className="card-text">Get fresh and hygienic non-veg products delivered to your home.</p>
        <Link to="/nonVeg" className="btn btn-danger">
          Visit Non-Veg Section
        </Link>
      </div>
    </div>
  </div>

  {/* Dairy Card */}
  <div className="col-md-4 mb-5">
    <div className="card shadow-lg">
      <Link to="/dairy">
        <img
          src="/dairy-items/dairy.gif"
          className="card-img-top"
          alt="Dairy"
          style={{ height: "250px", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Dairy Products</h5>
        <p className="card-text">Shop fresh dairy products like milk, cheese, and butter.</p>
        <Link to="/dairy" className="btn btn-primary">
          Visit Dairy Section
        </Link>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
}

export default Home;
