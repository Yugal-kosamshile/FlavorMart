import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "./store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cakes() {
    const images = [
        "/cake-items/cake1.webp",
        "/cake-items/cake2.webp",
        "/cake-items/cake3.webp",
        "/cake-items/cake4.webp",
        "/cake-items/cake5.webp",
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

    let cakeItems = useSelector((state) => state.products.cakeItems);
    let dispatch = useDispatch();

    const [filters, setFilters] = useState({ low: false, mid: false, high: false });
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const applyFilter = (range) => setFilters({ ...filters, [range]: !filters[range] });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredItems = cakeItems.filter((item) => {
        if (filters.low && item.price >= 4000 && item.price <= 7000) return true;
        if (filters.mid && item.price > 7000 && item.price <= 9000) return true;
        if (filters.high && item.price > 9000) return true;
        return !filters.low && !filters.mid && !filters.high;
    }).filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);


    const handlePage = (page) => {
        setCurrentPage(page);
    };

    const pagination = filteredItems.length > itemsPerPage && (
        <div className="d-flex justify-content-center mt-4 mb-3">
            <button
                className="btn btn-outline-pink mx-2"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                ◀ Previous
            </button>
            <div className="btn-group">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`btn ${index + 1 === currentPage ? "btn-pink" : "btn-outline-pink"}`}
                        onClick={() => handlePage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                className="btn btn-outline-pink mx-2"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next ▶
            </button>
        </div>
    );

    const cakeItemList = currentItems.map((item, index) => (
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
                    <p className="card-text text-pink fw-bold">₹{item.price.toFixed(2)}</p>
                    <button className="btn btn-pink w-100" onClick={() => dispatch(addToCart(item))}>
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container mt-4 position-relative">
            {/* Search Bar - Positioned at the Top Right */}
            <div className="position-absolute top-0 end-0 mt-2 me-3" style={{ maxWidth: "250px" }}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for cakes..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <span className="input-group-text text-pink">
                        <i className="fa-solid fa-search"></i>
                    </span>
                </div>
            </div>
    
            {/* Centered Heading */}
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-pink fw-bold mb-4">
                    Delicious Cakes <span className="floating">🍰</span>
                </h1>
            </div>
    
            {/* Carousel Section */}
            <div className="carousel-container mb-4">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="d-flex justify-content-center">
                            <img
                                src={image}
                                alt={`Cake ${index + 1}`}
                                className="carousel-img"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
    
            {/* Filter Section */}
            <div className="card p-3 mb-4 shadow-lg">
                <h5 className="text-center text-secondary">Filter by Price Range</h5>
    
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                    {/* Price Range Checkboxes */}
                    {[
                        { id: "low", label: "₹4000 - ₹7000", value: "low" },
                        { id: "mid", label: "₹7001 - ₹9000", value: "mid" },
                        { id: "high", label: "₹9001 - ₹11000", value: "high" }
                    ].map(({ id, label, value }) => (
                        <div className="form-check" key={id}>
                            <input
                                type="checkbox"
                                onChange={() => applyFilter(value)}
                                className="form-check-input custom-checkbox"
                                id={id}
                            />
                            <label className="form-check-label fw-bold text-dark" htmlFor={id}>
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
    
            {/* Product Listing */}
            <div className="row">
                {currentItems.length > 0 ? (
                    cakeItemList
                ) : (
                    <h4 className="text-center text-danger">No items found!</h4>
                )}
            </div>
    
            {/* Pagination */}
            {pagination}
        </div>
    );
    
}

export default Cakes;