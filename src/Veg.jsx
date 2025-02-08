import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "./store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Veg() {
  const images = [
    "/veg-items/vegetables1.jpg",
    "/veg-items/vegetables2.jpg",
    "/veg-items/vegetables3.jpg",
    "/veg-items/vegetables4.jpg",
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

  let vegItems = useSelector((state) => state.products.vegItems);
  let dispatch = useDispatch();

  // State for filters
  const [filters, setFilters] = useState({ low: false, mid: false, high: false });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Update filters on checkbox change
  const applyFilter = (range) => setFilters({ ...filters, [range]: !filters[range] });

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };


  // Filter items based on selected checkboxes
  const filteredItems = vegItems.filter((item) => {
    if (filters.low && item.price <= 100) return true;
    if (filters.mid && item.price > 100 && item.price <= 200) return true;
    if (filters.high && item.price > 200 && item.price <= 300) return true;
    return !filters.low && !filters.mid && !filters.high;
  })
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const pagination = filteredItems.length > itemsPerPage && (
    <div className="d-flex justify-content-center mt-4 mb-3">
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        ◀ Previous
      </button>

      <span className="align-self-center fw-bold text-success">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        className="btn btn-outline-success mx-2"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next ▶
      </button>
    </div>
  );

  const vegItemList = currentItems.map((item, index) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
      <div className="card shadow-lg h-100">
      <img
          src={item.image}
          alt={item.name}
          className="card-img-top product-img p-4"
          style={{ height: "280px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h6 className="card-title">{item.name}</h6>
          <p className="card-text text-success fw-bold">₹{item.price.toFixed(2)}</p>
          <button className="btn btn-success w-100" onClick={() => dispatch(addToCart(item))}>
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="container mt-4">
      <h1 className="text-center text-success fw-bold mb-4">Fresh Vegetables 
      <span className="floating">🥦</span>
      </h1>

      <div className="carousel-container mb-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="d-flex justify-content-center">
              <img
                src={image}
                alt={`Vegetable ${index + 1}`}
                className="carousel-img"
              />
            </div>
          ))}
        </Slider>
      </div>


      <div className="card p-3 mb-4 shadow-lg">
        <h5 className="text-center text-secondary">Filter by Price Range</h5>

        {/* Flex container to align search bar & checkboxes in one row */}
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">

          {/* Search Bar */}
          <div className="input-group" style={{ maxWidth: "250px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for vegetables..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-text">
              <i className="fa-solid fa-search"></i>
            </span>
          </div>

          {/* Checkbox Filters */}
          <div className="form-check">
            <input
              type="checkbox"
              onChange={() => applyFilter("low")}
              className="form-check-input custom-checkbox"
              id="low"
            />
            <label className="form-check-label fw-bold text-dark" htmlFor="low">
              ₹0 - ₹100
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
              ₹101 - ₹200
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
              ₹201 - ₹300
            </label>
          </div>

        </div>
      </div>


      {/* Product Listing */}
      <div className="row">
        {currentItems.length > 0 ? (
          vegItemList
        ) : (
          <h4 className="text-center text-danger">No items found!</h4>
        )}
      </div>

      {/* Pagination */}
      {pagination}

    </div>
  );
}

export default Veg;
