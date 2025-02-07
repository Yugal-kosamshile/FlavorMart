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
import Footer from "./footer.jsx";
import "./App.css";


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

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/home" className="navbar-brand fw-bold">
              QuickCart
              <img
                src="/shop.gif"
                alt="Cart Icon"
                className="ms-2"
                style={{ width: "40px" }}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link">
                    Veg Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonVeg" className="nav-link">
                    Non-Veg Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dairy" className="nav-link">
                    Dairy Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    Cart{" "}
                    <span className="badge bg-danger">{totalItems}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutUs" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactUs" className="nav-link">
                    Contact Us
                  </Link>
                </li>

                {/* Authentication */}
                {isAuthenticated ? (
                  <li className="nav-item">
                    <span className="navbar-text me-2 text-white">
                      Welcome, {user}!
                    </span>
                    <button
                      className="btn btn-outline-light"
                      onClick={() => dispatch(logout())}
                    >  Logout
                      <img src="/logout.png" alt="logout button" className="ms-2" style={{ width: "25px" }} />

                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-light">
                      Sign In
                      <img src="/login.png" alt="logout button" className="ms-2" style={{ width: "25px" }} />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonVeg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
