import React from "react";
import chatImg from "../assets/image 29.png";

export default function StaticCard() {
  return (
    <div>
      <span className="d-flex flex-column justify-content-center align-items-center">
        <h4>How Can I help You Today?</h4>
        <img
          src={chatImg}
          style={{ height: 50, width: 50, borderRadius: "50%" }}
        />
      </span>
      <div className="row mt-2">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-start">Hi, What is the weather</h5>
              <p className="card-text text-start">
                Get immediate AI generated response.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-start">Hi, What is my location</h5>
              <p className="card-text text-start">
                Get immediate AI generated response.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-start">Hi, What is my Temperature</h5>
              <p className="card-text text-start">
                Get immediate AI generated response.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="text-start">Hi, How are you</h5>
              <p className="card-text text-start">
                Get immediate AI generated response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
