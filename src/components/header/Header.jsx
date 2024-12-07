import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // State to handle navbar collapse in mobile view
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="favicon-wrapper">
            <img className="header__icon" src="/favicon.ico" alt="logo" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/movies/popular" className="nav-link">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/top_rated" className="nav-link">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies/upcoming" className="nav-link">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
