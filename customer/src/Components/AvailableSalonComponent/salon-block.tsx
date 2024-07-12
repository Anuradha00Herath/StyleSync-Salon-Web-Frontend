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
    <div className="md:w-[45%] my-4 bg-gray-200 rounded-xl w-full">
      <div className="flex flex-row items-center">
        <img className="w-[40%]  rounded-xl h-[180px]"
          src={block.image ? block.image : 'https://via.placeholder.com/100'}
          alt="salon"
        />
        <div className="pl-4"
        >
          <div className="flex flex-col justify-start items-start">

            <div className="text-black font-bold text-xl">{block.name}</div>
            
          </div>
          <div className="py-2"><p className="text-black font-normal text-base">
              {block.line1}, {block.line2}, {block.city}.
            </p>
            <p>{block.contactNo}</p>
          </div>
          <div className="flex flex-row justify-start items-start gap-2">
            <div className="h-8 w-24 bg-black flex justify-center items-center rounded-md cursor-pointer"
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
              <span className="font-normal text-sm text-white"
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
