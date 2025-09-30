import React from "react";
import logo from "../assets/img/Code_Adept_White.png";
import { Link } from "react-router-dom";
import "./Banner2.css";

const Flag = () => {
  return (
    <header className="flag">
      <div className="content">
        <img src={logo} alt="CodeAdept Logo" />
      </div>

      <h1 className="event-title">CodeAdept 9.0</h1>

      <Link to="/register" className="register-btn">
        Register Now
      </Link>
    </header>
  );
};

export default Flag;
