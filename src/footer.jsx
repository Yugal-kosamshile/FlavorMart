import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Footer Links */}
          <div className="col-md-4 text-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/contactUs" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
  <h5>Follow Us</h5>
  <div className="m-4">
    <a href="https://facebook.com" className="text-white mx-2">
      <i className="fab fa-facebook fa-2x"></i> 
    </a>
    <a href="https://twitter.com" className="text-white mx-2">
      <i className="fab fa-twitter fa-2x"></i>
    </a>
    <a href="https://instagram.com" className="text-white mx-2">
      <i className="fab fa-instagram fa-2x"></i>
    </a>
  </div>
</div>


          {/* Copyright */}
          <div className="col-md-4 text-start">
            <h5>📞Contact : 123-456-7890</h5>
            <p className="mb-0">📍 123 Ameerpet, Hyderabad, Telangana, India.</p>
            <p>📧 support@quickcart.com</p>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="mb-0">© {new Date().getFullYear()} QuickCart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
