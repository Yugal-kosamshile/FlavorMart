import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg p-4 rounded-4 border-0">
            <h1 className="text-center text-primary mb-3">About Us 🚀</h1>
            <p className="text-center lead">
              Welcome to our React-based shopping cart project! This application provides an 
              intuitive and seamless shopping experience using modern technologies.
            </p>

            <h2 className="text-secondary mt-4">🎯 Our Goal</h2>
            <p>
              Our mission is to create feature-rich applications that showcase the power of 
              front-end development while ensuring smooth user experiences. We focus on:
            </p>

            <h2 className="text-secondary mt-4">💡 What Makes This Project Special?</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>🔥 React-Powered UI:</strong> Component-based structure for modular and reusable code.
              </li>
              <li className="list-group-item">
                <strong>⚡ Real-Time State Management:</strong> Redux ensures seamless updates and data persistence.
              </li>
              <li className="list-group-item">
                <strong>📱 Responsive Design:</strong> Optimized for both desktop and mobile devices.
              </li>
              <li className="list-group-item">
                <strong>🔐 User Authentication:</strong> Secure login system to manage personalized orders.
              </li>
            </ul>

            <h2 className="text-secondary mt-4">📌 Future Enhancements</h2>
            <p>
              We are continuously working on improving this project by adding exciting features such as:
            </p>
            <ul>
              <li>💳 Payment integration</li>
              <li>🚚 Order tracking</li>
              <li>🛍️ Personalized recommendations</li>
            </ul>

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
