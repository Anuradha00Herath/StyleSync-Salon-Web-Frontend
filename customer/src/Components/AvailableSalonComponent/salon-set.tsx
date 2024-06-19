import { useEffect, useState } from "react";
import { SalonBlock } from "./salon-block";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Salon {
  serviceType: string;
  // Include other properties of the salon object as needed
}

interface MyComponentProps {
  salon: Salon;
}

export const SalonSet: React.FC<MyComponentProps> = ({ salon }) => {
  const [loading, setLoading] = useState(false);
  const [serviceBlock, setServiceBlock] = useState([]);
  const navigate = useNavigate();
  console.log(salon);

  const getSalonsUnderCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-under-categories",
        { params: { serviceType: salon.serviceType } }
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
        <h4>Salons in {salon.serviceType}</h4>
        <div onClick={()=>navigate('/available-salons-under-service-type',{state:{serviceType: salon.serviceType}})}>
          <a
            style={{
              color: "black",
            }}
            href="http://localhost:3000/available-salons-under-service-type"
          >
            View more
          </a>
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
          <SalonBlock block={block} key={index} />
        ))}
      </div>
    </div>
  );
};
