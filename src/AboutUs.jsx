import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container-fluid bg-dark text-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Information */}
          <div className="col-md-6 text-center text-md-start px-5">
            <h2 className="fw-bold text-uppercase">About Us</h2>
            <h1 className="display-5 fw-bold fst-italic">FlavorMart</h1>
            <hr className="my-3 w-25 border-white" />
            <p className="lead">
              Your go-to destination for fresh vegetables, high-quality meat, dairy products, and delightful cakes.
            </p>
            <p className="text-light">
              Explore our diverse range of products, add them to your cart, and enjoy a seamless shopping experience.
            </p>
            <button className="btn btn-outline-light mt-3" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Read More"}
            </button>
            {showMore && (
              <div className="mt-3">
                <p>
                  At FlavorMart, we are committed to bringing you the freshest ingredients sourced directly from trusted farms. Our range includes organic vegetables, premium dairy products, and specially curated cakes that bring joy to every occasion. Whether you are looking for daily essentials or gourmet treats, we ensure quality and affordability in every purchase.
                </p>
                <p>
                  Our seamless online shopping experience allows you to browse, select, and check out with ease, making grocery shopping hassle-free. Join us in our mission to deliver freshness and quality straight to your doorstep.
                </p>
              </div>
            )}
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="/about.gif"
              alt="FlavorMart"
              className="img-fluid rounded-4 shadow-lg"
              style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
