import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store.js";

function SignIn() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginCheck = () => {
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
  
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }
  
    if (username === storedUser.username && password === storedUser.password) {
      dispatch(login({ username, password })); // ✅ Pass only necessary fields
      navigate("/home");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };
  
  
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "url('https://source.unsplash.com/1600x900/?shopping,mall') center/cover",
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center text-primary fw-bold">Welcome Back! 👋</h2>
        <p className="text-center text-muted">Sign in to continue shopping</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-user text-primary"></i>
            </span>
            <input
              type="text"
              id="username"
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
              id="password"
              className="form-control"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="text-end mb-2">
            <a href="/forgot-password" className="text-decoration-none text-primary">
              Forgot password?
            </a>
          </div>
          <button type="button" className="btn btn-primary w-100 fw-bold" onClick={loginCheck}>
            Sign In
          </button>
          <div className="text-center my-3 text-muted">OR</div>
          <div className="text-center">
            <p className="mb-0">
              Don't have an account?{" "}
              <a href="/regForm" className="text-primary fw-bold">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
