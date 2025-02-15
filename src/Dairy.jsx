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

  // State for filters, search, and pagination
  const [filters, setFilters] = useState({
    Amul: false,
    Nestle: false,
    "Mother Dairy": false,
    Dinshaw: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Apply brand filter
  const applyFilter = (brand) =>
    setFilters((prev) => ({ ...prev, [brand]: !prev[brand] }));

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Filtering items based on brand and search
  const filteredItems = dairyItems
    .filter((item) => {
      const isFiltered = Object.keys(filters).some(
        (brand) => filters[brand] && item.company === brand
      );
      return isFiltered || Object.values(filters).every((val) => !val);
    })
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const checkbox = Object.keys(filters).map((brand) => (
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
  ))


  const dairyItemList = currentItems.map((item, index) => (
    <div className="col-lg-2-5 col-md-4 col-sm-6 mb-4" key={index}>
      <div className="card shadow-lg h-100">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top product-img p-4 rounded-pill"
          style={{ height: "280px",width: "280px", objectFit: "cover" }}
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
  ));

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary fw-bold mb-4">Fresh Dairy Products
        <span className="floating">🥛</span></h1>

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

      {/* Search Bar & Filters (Aligned in one line) */}
      <div className="card p-3 mb-4 shadow-lg">
        <h5 className="text-center text-secondary">Search & Filter by Brand</h5>

        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">

          {/* Search Bar */}
          <div className="input-group" style={{ maxWidth: "250px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for dairy products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="input-group-text">
              <i className="fa-solid fa-search"></i>
            </span>
          </div>

          {/* Checkbox Filters */}
          {checkbox}
        </div>
      </div>

      {/* Product Listing */}
      <div className="row">
        {currentItems.length > 0 ? (
          dairyItemList
        ) : (
          <h4 className="text-center text-danger">No items found!</h4>
        )}
      </div>

      {/* Pagination */}
      {filteredItems.length > itemsPerPage && (
        <div className="d-flex justify-content-center mt-4 mb-3">
          <button
            className="btn btn-outline-primary mx-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀ Previous
          </button>

          <div className="btn-group">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${index + 1 === currentPage ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => handlePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="btn btn-outline-primary mx-2"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default Dairy;
