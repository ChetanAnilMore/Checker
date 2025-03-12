import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        id="login"
        className="card shadow-lg"
        style={{
          width: "760px",
          maxWidth: "100%",
          height: "480px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="row h-100">
          <div
            className={`col-6 position-relative ${
              isSignUp ? "order-2" : "order-1"
            }`}
          >
            <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="mb-4">{isSignUp ? "Signup" : "Signin"}</h2>
              <form className="w-75">
                {isSignUp && (
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Username"
                    required
                  />
                )}
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  required
                />
                {isSignUp && (
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Confirm password"
                    required
                  />
                )}
                <button type="submit" className="btn btn-dark w-100 mb-3">
                  {isSignUp ? "Signup" : "Signin"}
                </button>
              </form>
              <span className="mb-3">
                or {isSignUp ? "signup" : "signin"} with
              </span>
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mx-2 text-white bg-primary p-2 rounded-circle"
                />
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  className="mx-2 text-white bg-danger p-2 rounded-circle"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="mx-2 text-white bg-info p-2 rounded-circle"
                />
              </div>
            </div>
          </div>
          <div
            className={`col-6 position-relative ${
              isSignUp ? "order-1" : "order-2"
            }`}
          >
            <div
              className="h-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
              style={{
                background: "linear-gradient(170deg, #36454f, #36455f)",
              }}
            >
              <h2 className="mb-4">
                {isSignUp ? "Welcome back!" : "Come join us!"}
              </h2>
              <p className="mb-4">
                {isSignUp
                  ? "Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away."
                  : "We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts."}
              </p>
              <button className="btn btn-outline-light" onClick={toggleForm}>
                {isSignUp
                  ? "Already have an account? Signin."
                  : "No account yet? Signup."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
