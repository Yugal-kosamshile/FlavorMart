import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate password match
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      username: usernameRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    };

    // Save to local storage
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Register Success!"); // Show success alert
    navigate("/login"); // Redirect to login page

    event.target.reset(); // Clear the form
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              ref={usernameRef}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;