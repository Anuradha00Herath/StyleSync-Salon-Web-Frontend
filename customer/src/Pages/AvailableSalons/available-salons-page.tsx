import { useLocation, useNavigate } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SalonSet } from "../../Components/AvailableSalonComponent/salon-set";
import SearchBar from "../../Components/AvailableSalonComponent/search-salon";

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

  return (
    <div>
      <NavigationBar userId={userId} />
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: 600,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 350,
          }}
        >
          <div>
            <h1>{serviceType}</h1>
            <p>
              Enter your dates and choose from 5,000 salons to get your service!
            </p>
           <SearchBar/>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          {serviceSet.map((salon, index) => (
            <SalonSet key={index} salon={salon} userId={userId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
