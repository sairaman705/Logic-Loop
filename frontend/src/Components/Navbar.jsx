import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src="/Images/logo.png" alt="Logo" />
      </Link>

      {/* Search Box (visible only on the homepage) */}
      {isHomePage && (
        <div className="search-box">
          <i className="bx bx-search"></i>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div>
      )}

      {/* Buttons */}
      <div className="buttons-action">
        {isHomePage ? (
          <>
            {/* Write Button */}
            <button className="write-btn">
              <i className="bx bx-pen"></i>
              Write
            </button>

            {/* Sign In and Sign Up Buttons */}
            <div className="authentication-button">
              <Link className="signIn-btn" to="/signin">
                Sign In
              </Link>
              <Link className="signUp-btn" to="/signup">
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          /* Conditional Logic for Sign In/Sign Up Pages */
          <div className="authentication-button">
            {currentPage === "signin" ? (
              <Link className="signUp-btn" to="/signup">
                Sign Up
              </Link>
            ) : (
              <Link className="signIn-btn" to="/signin">
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
