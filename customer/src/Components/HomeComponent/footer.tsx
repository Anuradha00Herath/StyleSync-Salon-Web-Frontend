import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

export function Footer() {
  return (
    <div className="w-full bg-[#c9a899] flex justify-center py-5 lg:py-10">
      <div className="w-full md:w-[90%] flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="text-primary font-semibold text-3xl font-montserrat py-4 lg:py-2" onClick={() => window.scrollTo(0,0)}>
            StyleSync
          </div>
          <div className="flex flex-col justify-start items-center lg:items-start py-5 lg:py-0">
              <div className="text-xl text-primary font-semibold font-montserrat py-2" >Contact Information</div>
              <div className="text-lg font-normal text-primary font-montserrat  flex flex-row items-center gap-2"><FaPhoneAlt /> <span>+94567890876</span> </div>
              <div className="text-lg font-normal text-primary font-montserrat  flex flex-row items-center gap-2"><MdEmail /> <span>stylesync@gmail.com</span> </div>
          </div>
          <div className="flex flex-col justify-start items-center lg:items-start py-5 lg:py-0">
           <div className="text-xl text-primary font-semibold font-montserrat py-2" >Overview</div>
            <a href="/#home" className="text-lg font-normal text-primary font-montserrat">Home</a>
            <a href="/#service" className="text-lg font-normal text-primary font-montserrat">Service</a>
            <a href="/#article" className="text-lg font-normal text-primary font-montserrat">Articles</a>
            <a href="/#faqs" className="text-lg font-normal text-primary font-montserrat">FAQ</a>
            <a href="/#message" className="text-lg font-normal text-primary font-montserrat">Contact us</a>
            
          </div>
        
        
      </div>
    </div>
  )
}
