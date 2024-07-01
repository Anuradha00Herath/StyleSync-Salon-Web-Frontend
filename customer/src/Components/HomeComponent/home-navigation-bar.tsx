import React from "react";
import "../HomeComponent/home-navigation-bar.css";
import { Link } from "react-router-dom";

export function HomeNavigationBar() {
  return (
    <div className="bg-[#2E2528] w-full align-center fixed">
      <nav className="w-full flex justify-between items-center max-w-5xl mx-auto bg-[#2E2528] text-white py-6">
        <div >
          <a href="/" className="text-white font-bold text-2xl">
            StyleSync
          </a>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-10">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="/#article">Articles</a>
            </li>
            <li>
              <a href="/#faqs">FAQs</a>
            </li>
            <li>
              <a href="/#message">Contact Us</a>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-end items-center">
        <div className="bg-primary h-35px w-[100px] items-center justify-center">
          <Link to='/login' className="text-white">Login</Link>
            
          </div>
          <div className="bg-white h-[35px] w-[100px] flex justify-center items-center">
            <Link to='/register' className="text-[#232528] ">Register</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
