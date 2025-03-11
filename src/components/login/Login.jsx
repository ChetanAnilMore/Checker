import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
  const toggleForm = () => {
    const mainContainer = document.querySelector(".container");
    mainContainer.classList.toggle("change");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="form-control signup-form">
          <form action="#">
            <h2>Signup</h2>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm password" required />
            <button className="btn btn-primary">Signup</button>
          </form>
          <span>or signup with</span>
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="form-control signin-form">
          <form action="#">
            <h2>Signin</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button className="btn btn-primary">Signin</button>
          </form>
          <span>or signin with</span>
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="intros-container">
        <div className="intro-control signin-intro">
          <div className="intro-control__inner">
            <h2>Welcome back!</h2>
            <p>
              Welcome back! We are so happy to have you here. It's great to see
              you again. We hope you had a safe and enjoyable time away.
            </p>
            <button
              id="signup-btn"
              className="btn btn-secondary"
              onClick={toggleForm}
            >
              No account yet? Signup.
            </button>
          </div>
        </div>
        <div className="intro-control signup-intro">
          <div className="intro-control__inner">
            <h2>Come join us!</h2>
            <p>
              We are so excited to have you here. If you haven't already, create
              an account to get access to exclusive offers, rewards, and
              discounts.
            </p>
            <button
              id="signin-btn"
              className="btn btn-secondary"
              onClick={toggleForm}
            >
              Already have an account? Signin.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
