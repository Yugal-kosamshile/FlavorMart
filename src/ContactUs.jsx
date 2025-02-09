import "bootstrap/dist/css/bootstrap.min.css";  

function ContactUs() {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="container">
        <h1 className="text-center mb-4" style={{ fontFamily: 'Great Vibes, cursive'}}>Contact Us</h1>
        <h2 className="text-center">HOW TO GET IN TOUCH?</h2>
        <p className="text-center text-muted">
          We are always ready to assist you. Get in touch for queries, orders, or any support.
        </p>

        <div className="row align-items-center mt-5">
          {/* Left Side - Contact Details */}
          <div className="col-md-6">
            <h4 className="text-uppercase">Address</h4>
            <p>123 Ameerpet, Hyderabad, Telangana, India.</p>
            <h4 className="text-uppercase">Phone Number</h4>
            <p>+91 123-456-7890</p>
            <h4 className="text-uppercase">Email Address</h4>
            <p>support@flavormart.com</p>

          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3 d-flex gap-2">
                <input type="text" className="form-control" placeholder="Your Name" />
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-warning w-100">Book a Table</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
