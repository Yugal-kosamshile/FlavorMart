import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function NonVeg() {
  const images = [
    "/non-veg-items/non-veg1.jpg",
    "/non-veg-items/non-veg2.jpg",
    "/non-veg-items/non-veg3.jpg",
    "/non-veg-items/non-veg4.jpg",
    "/non-veg-items/non-veg5.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const nonVegItems = useSelector((state) => state.products.nonVegItems);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ low: false, mid: false, high: false });

  const applyFilter = (range) => {
    setFilters({ ...filters, [range]: !filters[range] });
  };

  const filteredItems = nonVegItems.filter((item) => {
    if (filters.low && item.price <= 400) return true;
    if (filters.mid && item.price > 400 && item.price <= 800) return true;
    if (filters.high && item.price > 800 && item.price <= 1200) return true;
    return !filters.low && !filters.mid && !filters.high;
  });

  return (
    <div className="container mt-4"> 
      <h1 className="text-center text-danger fw-bold mb-4">Delicious Non-Veg Items 🍗</h1>
 
      <div className="carousel-container mb-4">
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index} className="d-flex justify-content-center">
        <img
          src={image}
          alt={`Non-Veg ${index + 1}`}
          className="carousel-img"
        />
      </div>
    ))}
  </Slider>
</div> 

{/* <img src="/non-veg/fish.jpg" alt="" /> */}
<div className="card p-3 mb-4 shadow-lg">
  <h5 className="text-center text-secondary">Filter by Price Range</h5>
  <div className="d-flex flex-wrap justify-content-center gap-3">
    <div className="form-check">
      <input
        type="checkbox"
        onChange={() => applyFilter("low")}
        className="form-check-input custom-checkbox"
        id="low"
      />
      <label className="form-check-label fw-bold text-dark" htmlFor="low">
        ₹0 - ₹400
      </label>
    </div>

    <div className="form-check">
      <input
        type="checkbox"
        onChange={() => applyFilter("mid")}
        className="form-check-input custom-checkbox"
        id="mid"
      />
      <label className="form-check-label fw-bold text-dark" htmlFor="mid">
        ₹400 - ₹800
      </label>
    </div>

    <div className="form-check">
      <input
        type="checkbox"
        onChange={() => applyFilter("high")}
        className="form-check-input custom-checkbox"
        id="high"
      />
      <label className="form-check-label fw-bold text-dark" htmlFor="high">
        ₹800 - ₹1200
      </label>
    </div>
  </div>
</div>

 
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card shadow-lg h-100">
                <img src={item.image} alt={item.name} className="card-img-top product-img" />
                <div className="card-body text-center">
                  <h6 className="card-title">{item.name}</h6>
                  <p className="card-text text-danger fw-bold">₹{item.price.toFixed(2)}</p>
                  <button className="btn btn-danger w-100" onClick={() => dispatch(addToCart(item))}>
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center text-danger">No items found in this price range!</h4>
        )}
      </div>
    </div>
  );
}

export default NonVeg;
