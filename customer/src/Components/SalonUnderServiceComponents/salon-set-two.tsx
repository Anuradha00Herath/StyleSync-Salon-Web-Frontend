import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SalonBlock } from "../AvailableSalonComponent/salon-block";

interface Salon {
  name: string;
  // Include other properties of the salon object as needed
}

interface MyComponentProps {
  salon: Salon;
  userId:any
}

export const SalonSetTwo: React.FC<MyComponentProps> = ({ salon , userId}) => {
  const [loading, setLoading] = useState(false);
  const [serviceBlock, setServiceBlock] = useState([]);
  const navigate = useNavigate();
  console.log(salon);

  const getSalonsUnderCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-under-service",
        { params: { serviceName: salon.name } }
      );
      console.log(response.data.data);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Salons in {salon.name}</h4>
        <div onClick={()=>navigate('/available-salons-under-service-type',{state:{serviceType: salon.name}})}>
          <p
            style={{
              color: "black",
            }}
          >
            View more
          </p>
        </div>
      </div>
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {serviceBlock.map((block, index: React.Key) => (
          <SalonBlock block={block} key={index} userId={userId}/>
        ))}
      </div>
    </div>
  );
};
