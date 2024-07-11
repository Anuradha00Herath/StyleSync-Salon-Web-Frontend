import { useLocation, useNavigate } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SalonSet } from "../../Components/AvailableSalonComponent/salon-set";
import SearchBar from "../../Components/AvailableSalonComponent/search-salon";
import { CircularProgress } from "@mui/material";

export default function AvailableSalonPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceType, userId } = location.state;
  const [serviceSet, setServiceSet] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("serviceSet", serviceSet);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-available-categories"
      );
      console.log(response.data);
      setServiceSet(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    getAllCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  return (
    <div>
      <NavigationBar userId={userId} />
      <div className="w-full h-[600px] bg-cover"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-[600px]">
          <div className="border border-black rounded-xl  px-8 py-6 backdrop-blur-lg mx-4">
            <div className="text-black text-[32px] font-bold text-center">{serviceType}</div>
            <p className="py-2 text-center text-base text-black font-normal">
              Enter your dates and choose to get your service!
            </p>
           <SearchBar userId={userId}/>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto">
          {serviceSet.map((salon, index) => (
            <SalonSet key={index} salon={salon} userId={userId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
