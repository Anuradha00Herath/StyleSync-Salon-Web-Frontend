import { useNavigate } from "react-router-dom";
import image from "../../assets/home.jpg";
import React from "react";

export function StartingPage() {
  //const { navigate } = this.props.navigation;
  const navigate = useNavigate();  
  return (
    <div>
      <div className="h-[100vh] flex flex-col-reverse lg:flex-row justify-start md:justify-between items-center">
        
        <div className="bg-[#c9a899] w-full lg:w-[75%] xl:w-[60%] h-[100vh] flex justify-center items-center">
          <div className="px-4 md:px-10 lg:px-20">
            <p className="font-bold text-3xl md:text-4xl text-black font-montserrat pt-5 md:py-10 lg:pt-20 text-center lg:text-left">
              Discover Your Signature Style: Find Your Perfect Salon Experience
              for Ultimate Beauty and Wellness.
            </p>
            <p className="font-normal text-md md:text-lg text-black py-4 lg:py-10 text-center lg:text-left">
              Welcome to our chic online haven where beauty meets
              sophistication! Explore our salon web page for an exclusive
              journey into the world of premier beauty and wellness. From expert
              stylists to rejuvenating spa treatments, discover a personalized
              sanctuary tailored just for you. Uncover the latest trends, book
              your next appointment, and embark on a transformative experience
              that transcends ordinary beauty. Elevate your style, elevate your
              self – because you deserve nothing but the best. Your journey to
              radiance begins here!
            </p>
            <div className="flex justify-center lg:justify-start">
            <button className="bg-primary h-10 w-40 cursor-pointer text-white font-normal font-montserrat text-lg rounded-md my-4 md:my-8 lg:my-10"
              onClick={()=>navigate('/available-salons',{state:{serviceType: "All Service"}})}
            >
              Get Started
            </button>
          </div>
          </div>
        </div>
        <div className="w-full lg:w-[25%] xl:w-[40%] h-[100vh] overflow-hidden">
          <img className="h-auto lg:h-[100vh] w-full"
            src={image}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
}
