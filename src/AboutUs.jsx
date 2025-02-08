import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg p-5 rounded-4 border-0">
            
            {/* Heading */}
            <h1 className="text-center text-primary fw-bold mb-4">
              About Us <span className="moving-rocket">🚀</span>
            </h1>

            <p className="text-center lead text-muted">
              Welcome to <strong>QuickCart</strong> – your go-to destination for a seamless and modern shopping experience.
            </p>

            <hr className="my-4"/>

            {/* Our Goal Section */}
            <h2 className="text-secondary fw-bold mt-4">
              <span className="pulsing-target">🎯</span> Our Mission
            </h2>
            <p className="text-muted">
              Our goal is to build feature-rich applications that demonstrate the <strong>power of front-end development </strong>
              while providing an effortless shopping journey for users.
            </p> 
            <hr className="my-4"/>

            {/* Unique Features Section */}
            <h2 className="text-secondary fw-bold mt-4">
              <span className="glowing-bulb">💡</span> What Makes Us Special?
            </h2>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <strong>🔥 React-Powered UI:</strong> Modular, reusable, and fast.
                  </li>
                  <li className="list-group-item border-0">
                    <strong>⚡ Real-Time State Management:</strong> Redux for smooth updates.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <strong>📱 Responsive Design:</strong> Optimized for all devices.
                  </li>
                  <li className="list-group-item border-0">
                    <strong>🔐 Secure Authentication:</strong> User-friendly login system.
                  </li>
                </ul>
              </div>
            </div> 
            <hr className="my-4"/>

            {/* Future Enhancements Section */}
            <h2 className="text-secondary fw-bold mt-4">
              <span className="rotating-pin">📌</span> Future Enhancements
            </h2>
            <p className="text-muted">
              We’re constantly working on new features to enhance your experience:
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-box text-center p-3 border rounded bg-light">
                  <h5>💳 Payment Integration</h5>
                  <p className="text-muted small">Seamless and secure online transactions.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box text-center p-3 border rounded bg-light">
                  <h5>🚚 Order Tracking</h5>
                  <p className="text-muted small">Real-time tracking of your purchases.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box text-center p-3 border rounded bg-light">
                  <h5>🛍️ Personalized Recommendations</h5>
                  <p className="text-muted small">AI-powered shopping suggestions.</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-muted mt-4">
              Stay tuned for updates and new features! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
