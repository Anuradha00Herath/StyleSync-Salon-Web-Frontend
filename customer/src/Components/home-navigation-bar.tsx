import React from "react";
import "../Components/home-navigation-bar.css";

export function HomeNavigationBar() {
  return (
    <div
      style={{
        backgroundColor: "#2E2528",
        width: "100%",
        alignItems: "center"
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
              <a href="/products">Home</a>
            </li>
            <li>
              <a href="/about">Services</a>
            </li>
            <li>
              <a href="/contact">Articles</a>
            </li>
            <li>
              <a href="/contact">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        
        <div className="navbar-right">
        <div style={{
            backgroundColor: "#2e2528",
            height: 35,
            width: 100,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginLeft: 10
          }}>
            <a style={{
            color: "white",
            textDecoration: "none"
          }} href="abdn.com">Login</a>
          </div>
          <div style={{
            backgroundColor: "white",
            height: 35,
            width: 100,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginLeft: 30
          }}>
            <a style={{
                color: "#2e2528",
                textDecoration: "none"
            }} href="gfdhsd.com">Register</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
