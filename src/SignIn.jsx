import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store.js";

function SignIn() {
  let username = useRef(null);
  let password = useRef(null);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const loginCheck = () => {
    if (username.current.value === "Yugal" && password.current.value === "Yugal@123") {
      dispatch(login(username.current.value));
      localStorage.setItem("username", username.current.value);
      navigate("/home");
    } else {
      alert("Your credentials are wrong. Try again!");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: "url('https://source.unsplash.com/1600x900/?shopping,mall') center/cover",
        }}
      >
        <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "10px" }}>
          <h2 className="text-center text-primary fw-bold">Welcome Back! 👋</h2>
          <p className="text-center text-muted">Sign in to continue shopping</p>

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
                ref={username}
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
                ref={password}
                required
              />
            </div>
            <div className="text-end mb-2">
              <a href="/forgot-password" className="text-decoration-none text-primary">
                Forgot password?
              </a>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 fw-bold"
              onClick={loginCheck}
            >
              Sign In
            </button>
            <div className="text-center my-3 text-muted">OR</div>
            <div className="text-center">
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="/register" className="text-primary fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignIn; 