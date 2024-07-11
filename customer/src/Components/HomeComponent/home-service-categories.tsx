import React from "react";
import nextImage from "../../assets/next.png"
import { useNavigate } from "react-router-dom";

type Props = {
  image: string;
  imgAlt: string;
  serviceType: string;
  count: number;
  userId:any
};

export function ServiceCategories(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="bg-white my-12 mx-4 flex flex-col justify-center items-center w-56 pb-6 pt-8 rounded-lg">
      <img className="w-16 h-16 mb-9"
        src={props.image}
        alt={props.imgAlt}
      />
      <p className="text-lg font-semibold text-black">{props.serviceType}</p>
      <p className="text-lg font-normal text-black py-2">{props.count} Salons Available</p>
      <div className="w-[90%] mx-auto py-6">
      <button className="bg-primary py-2 w-full cursor-pointer text-white hover:text-primary font-normal rounded-md hover:bg-[#c9a899] hover:font-semibold text-sm hover:text-md font-montserrat "
              onClick={()=>navigate('/available-salons',{state:{serviceType: props.serviceType, userId:props.userId}})}
            >
              <a href="/available-salons">Make an appointment</a>
      </button>
      </div>
      
    </div>
  );
}


