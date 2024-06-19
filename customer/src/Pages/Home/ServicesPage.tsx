import { ServiceCategories } from "../../Components/HomeComponent/home-service-categories";

import hairImage from "../../assets/hair.png";
// import nailImage from "../../assets/nail.png";
// import facialImage from "../../assets/facial.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function ServicesPage() {
  const [loading, setLoading] = useState(false);
  const [serviceTypes, setServiceTypes] = useState([]);
  
  const getAllCategories = async () => {
    setLoading(true);
    try {
        
       const response = await axios.get("https://stylesync-backend-test.onrender.com/customer/customer/get-all-categories")
        console.log(response.data.data);
        setServiceTypes(response.data.data);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Our Services
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#f8f5f3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            //justifyContent: "space-between",
          }}
        >
          {serviceTypes.map((serviceType: any, index:React.Key)=>(
            <ServiceCategories
            image={hairImage}
            imgAlt={"hair"}
            serviceType={serviceType}
            count={524}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
