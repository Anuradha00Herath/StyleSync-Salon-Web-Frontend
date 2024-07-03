import { ServiceCategories } from "../../Components/HomeComponent/home-service-categories";
import CustomHeading from "../../Components/common/CustomHeading";
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
      <div className="flex justify-center items-center">
        <CustomHeading title="Our Services"/> 
      </div>
      <div className="bg-[#c9a899] items-center flex justify-center">
        <div className="items-center justify-center flex-wrap flex w-[90%] md:w-[90%]">
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
