import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home.jsx";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Dairy from "./Dairy.jsx";
import NotFound from "./NotFound.jsx";
import SignIn from "./SignIn.jsx";
import "./App.css";
import MyFooter from "./MyFooter.jsx";
import Cakes from "./Cakes.jsx";
import { Dropdown } from "bootstrap";


function App() {

  const cart = useSelector((state) => state.cart || []);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("username");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
    dropdownElementList.forEach((dropdown) => new Dropdown(dropdown));
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Brand Name */}
            <Link to="/home" className="navbar-brand fw-bold">
              Fresh & Feast
              <img
                src="/basket.gif"
                alt="Cart Icon"
                className="ms-2"
                style={{ width: "40px" }}
              />
            </Link>

            {/* Navbar Toggler Button (Fix) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <i className="fa-solid fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link">
                    <i className="fa-solid fa-carrot"></i> veggie
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonVeg" className="nav-link">
                    <i className="fa-solid fa-drumstick-bite"></i> Non-Veg Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dairy" className="nav-link">
                    <i className="fa-solid fa-cheese"></i> Dairy Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cakes" className="nav-link">
                    <i className="fa-solid fa-birthday-cake"></i> Cakes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <i className="fa-solid fa-shopping-cart"></i> Cart{" "}
                    <span className="badge bg-danger">{totalItems}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">
                    <i className="fa-solid fa-history"></i> Order History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutUs" className="nav-link">
                    <i className="fa-solid fa-info-circle"></i> About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactUs" className="nav-link">
                    <i className="fa-solid fa-phone"></i> Contact Us
                  </Link>
                </li>

                {/* Authentication */}
                {isAuthenticated ? (
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light dropdown-toggle"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user"></i> {user}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                      {/* <li>
        <Link className="dropdown-item" to="/profile">
          <i className="fa-solid fa-user-circle"></i> Profile
        </Link>
      </li> */}
                      <li>
                        <button className="dropdown-item text-danger" onClick={() => dispatch(logout())}>
                          <i className="fa-solid fa-sign-out-alt"></i> Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-light">
                      <i className="fa-solid fa-sign-in-alt"></i> Sign In
                    </Link>
                  </li>
                )}

              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonVeg" element={<NonVeg />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
