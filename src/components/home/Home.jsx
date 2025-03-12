import React from "react";
import "./home.css";
import hero from "../../../public/hero.png";

const Home = () => {
  return (
    <div>
      <div className="text-center text-bg-light m-0">
        <div className="row">
          <div className="col text-center d-flex align-items-center justify-content-center">
            <div>
              <h1>Welcome To Future</h1>
              <p>This is the future where everything is smart.</p>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <div className="card text-bg-dark mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Publish</div>
            <div className="card-body">
              <h5 className="card-title">Enter Question Paper</h5>
              <p className="card-text">
                Enter a question paper which you want to check or evaluate.
              </p>
            </div>
          </div>

          <div className="card text-bg-dark mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Check</div>
            <div className="card-body">
              <h5 className="card-title">Enter answers</h5>
              <p className="card-text">
                Enter answers and corresponding marks to that question.
              </p>
            </div>
          </div>

          <div className="card text-bg-dark mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Evaluate</div>
            <div className="card-body">
              <h5 className="card-title">Evaluation Model</h5>
              <p className="card-text">
                Our AI model will evaluate the answer for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
