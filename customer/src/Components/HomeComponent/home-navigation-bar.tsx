import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export function HomeNavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="mx-[4%] w-[92%] max-w-[1900px]  fixed  md:top-5 top-3 z-[999] bg-[#2E2528] h-[70px] rounded-[8px] px-5 sm:px-8 flex flex-row items-center py-4 justify-between">
      <div className="w-full hidden lg:flex justify-between items-center  mx-10">
        <div >
          <a href="/" className="text-white font-semibold text-2xl font-montserrat">
            StyleSync
          </a>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 xl:gap-12 text-white text-lg font-medium font-montserrat">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
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
          <Link to='/login' className="text-white text-lg font-medium py-3 px-4 font-montserrat">Login</Link>
            
          </div>
        </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-0 left-0 w-fit h-full z-50 bg-white">
              <div className="flex w-full flex-col items-start justify-start p-10 h-full">
                <div className="flex flex-row justify-between items-center w-full">
                    <a href="/" className="text-primary font-semibold text-2xl cursor-pointer">StyleSync</a>
                    <button
                      className="text-primary focus:outline-none pl-24 pr-4"
                      onClick={toggleMenu}
                      
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                </div>
                <div className="text-left text-lg w-full h-full mt-10">
                  <div className="flex flex-col py-10 text-primary" >
                    <ul className="list-none font-medium">
                      <li className="py-2" onClick={toggleMenu}>
                        <a href="/#home">Home</a>
                      </li>
                      <li className="py-2" onClick={toggleMenu}>
                        <a href="#service">Services</a>
                      </li>
                      <li className="py-2" onClick={toggleMenu}>
                        <a href="/#faqs">FAQs</a>
                      </li>
                      <li className="py-2" onClick={toggleMenu}>
                        <a href="/#message">Contact Us</a>
                      </li>
                    </ul>
                    <span className="mt-10 flex flex-col justify-start items-start">
                      <a href="/login" className="text-primary font-medium text-xl cursor-pointer py-2" onClick={toggleMenu}>Login</a>
                      <a href="/register" className="text-primary font-medium text-xl cursor-pointer py-2" onClick={toggleMenu}>Register</a>
                  </span>
                  </div>
                  
                </div>
              </div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* Hamburger menu */}
        <div className="flex lg:hidden w-full justify-between items-center">
        <a href="/" className="text-white font-semibold text-2xl">
            StyleSync
          </a>

        
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
      </nav>
  );
}
