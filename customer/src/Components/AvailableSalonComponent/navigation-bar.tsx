import React from "react";
import "../AvailableSalonComponent/navigation-bar.css";
import english from "../../assets/english.png";
import help from "../../assets/help.png";

export function NavigationBar() {
  return (
    <div
      style={{
        backgroundColor: "#2E2528",
        width: "100%",
        alignItems: "center",
        position: "fixed",
      }}
    >
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            StyleSync
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
          <li>
              <a href="http://localhost:3000/home#home">Home</a>
            </li>
          <li>
              <a href="http://localhost:3000/home#service">Categories</a>
            </li>
            <li>
              <a href="/">LKR</a>
            </li>
            <li>
              <a href="/">
                <img
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25,
                  }}
                  src={english}
                  alt="language"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25,
                  }}
                  src={help}
                  alt="help"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div
            style={{
              backgroundColor: "#2e2528",
              height: 35,
              width: 100,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="http://localhost:3000/login"
            >
              Login
            </a>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: 35,
              width: 100,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginLeft: 30,
            }}
          >
            <a
              style={{
                color: "#2e2528",
                textDecoration: "none",
              }}
              href="http://localhost:3000/register"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
