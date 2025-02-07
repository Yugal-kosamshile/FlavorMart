import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dairy() {
  const images = [
    "/dairy-items/dairy1.jpg",
    "/dairy-items/dairy2.jpg",
    "/dairy-items/dairy3.jpg",
    "/dairy-items/dairy4.jpg",
    "/dairy-items/dairy5.jpg",
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

  const dairyItems = useSelector((state) => state.products.dairyItems);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    Amul: false,
    Nestle: false,
    "Mother Dairy": false,
    Dinshaw: false,
  });

  const applyFilter = (companyName) =>
    setFilters((prev) => ({ ...prev, [companyName]: !prev[companyName] }));

  const filteredItems = dairyItems.filter((item) => {
    const isFiltered = Object.keys(filters).some(
      (company) => filters[company] && item.company === company
    );
    return isFiltered || Object.values(filters).every((val) => !val);
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary fw-bold mb-4">Fresh Dairy Products 🥛</h1>

      {/* Carousel Section */}
      <div className="carousel-container mb-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="d-flex justify-content-center">
              <img src={image} alt={`Dairy ${index + 1}`} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Filter Section */}
      <div className="card p-3 mb-4 shadow-lg">
        <h5 className="text-center text-secondary">Filter by Brand</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {Object.keys(filters).map((brand) => (
            <div key={brand} className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input custom-checkbox"
                onChange={() => applyFilter(brand)}
                checked={filters[brand]}
                id={brand}
              />
              <label className="form-check-label fw-bold text-dark" htmlFor={brand}>
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Product Listing Section */}
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card shadow-lg h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top product-img p-4"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{item.name}</h6>
                  <p className="card-text text-primary fw-bold">₹{item.price.toFixed(2)}</p>
                  <button className="btn btn-primary w-100" onClick={() => dispatch(addToCart(item))}>
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div> 
    </div>
  );
}

export default Dairy;
