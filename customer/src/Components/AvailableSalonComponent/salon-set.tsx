import { useEffect, useState } from "react";
import { SalonBlock } from "./salon-block";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Salon {
  serviceType: string;
  // Include other properties of the salon object as needed
}

interface Props {
  salon: Salon;
  userId:any;
}

export const SalonSet = (props:Props) => {

  const salon = props.salon;
  const userId = props.userId;
  const [loading, setLoading] = useState(false);
  const [serviceBlock, setServiceBlock] = useState([]);
  const navigate = useNavigate();

  const getSalonsUnderCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-under-categories",
        { params: { serviceType: salon.serviceType } }
      );
      setServiceBlock(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSalonsUnderCategories();
  },[]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="py-4 text-black text-base font-medium">Salons in {salon.serviceType}</div>
        <div onClick={()=>navigate('/available-salons-under-service-type',{state:{serviceType: salon.serviceType, userId}})}>
          <a className="py-4 text-black text-base font-medium"
            href="http://localhost:3000/available-salons-under-service-type"
          >
            View more
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        {serviceBlock.map((block, index: React.Key) => (
          <SalonBlock block={block} key={index} userId={userId}/>
        ))}
      </div>
    </div>
  );
};
