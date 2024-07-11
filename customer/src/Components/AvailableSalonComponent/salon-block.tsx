import React, { useEffect, useState } from "react";
import salon from "../../assets/salon.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SalonBlockProps {
  id: number;
  name: string;
  line1: string;
  line2: string;
  city: string;
  contactNo: string;
  image:string;
}

interface MyComponentProps {
  block: SalonBlockProps;
  userId: number | null;
}

export const SalonBlock: React.FC<MyComponentProps> = ({ block, userId }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [service, setService] = useState([]);
  const [times, setTimes] = useState<string[]>([]);

  const getSalonDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-salon-details",
        { params: { salonId: block.id } }
      );
      setService(response.data.data2);
      setTimes(response.data.data1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSalonDetails();
  }, [block.id]);

  return (
    <div className="w-[45%] my-4  ">
      <div className="flex flex-row items-center">
        <img className="w-[40%] h-full"
          src={block.image}
          alt="salon"
        />
        <div className="pl-4"
        >
          <div className="flex flex-col justify-start items-start">

            <h4>{block.name}</h4>
            <p
              style={{
                fontSize: 12,
              }}
            >
              
            </p>
          </div>
          <div
            style={{
              marginTop: 10,
            }}
          >
            <p>
              {block.line1}, {block.line2}, {block.city}.
            </p>
            <p>{block.contactNo}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: 30,
                width: 100,
                marginRight: 10,
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() =>
                navigate("/make-appointment", {
                  state: {
                    id: block.id,
                    name: block.name,
                    line1: block.line1,
                    line2: block.line2,
                    city: block.city,
                    contactNo: block.contactNo,
                    times,
                    userId,
                    image:block.image
                  },
                })
              }
            >
              <span
                style={{
                  fontSize: 12,
                  color: "white",
                }}
              >
                Book now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
