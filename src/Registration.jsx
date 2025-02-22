import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    if (!username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = { username, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/login"); // Redirect to login after successful registration
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center text-primary fw-bold">Create an Account</h2>
        <p className="text-center text-muted">Sign up to start shopping</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-user text-primary"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              ref={usernameRef}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-lock text-primary"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-lock text-primary"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type="button" className="btn btn-primary w-100 fw-bold" onClick={handleRegister}>
            Register
          </button>
          <div className="text-center my-3 text-muted">OR</div>
          <div className="text-center">
            <p className="mb-0">
              Already have an account?{" "}
              <Link href="/login" className="text-primary fw-bold">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
