import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import { SalonSetTwo } from "../../Components/SalonUnderServiceComponents/salon-set-two";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import SearchBar from "../../Components/AvailableSalonComponent/search-salon";

export default function SalonUnderServiceType() {
  const location = useLocation();
  const { serviceType, userId } = location.state;
  const [loading, setLoading] = useState(false);
  const [serviceSet, setServiceSet] = useState([]);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-available-services",
        { params: { serviceType: serviceType } }
      );
      console.log(response.data.data);
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
      <div>
        <NavigationBar userId={userId}/>
      </div>
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
              Enter your dates and choose salons to get your service!
            </p>
            <SearchBar userId={userId}/>
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
            {serviceSet.map((salon,index)=>(
                <SalonSetTwo key={index} salon={salon} userId={userId}/>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
