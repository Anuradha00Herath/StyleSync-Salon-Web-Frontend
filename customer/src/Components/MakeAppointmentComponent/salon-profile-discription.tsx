import { useNavigate } from "react-router-dom";
import salon from "../../assets/salon.jpg";
import React from "react";

type Props = {
  name: String,
  line1: String,
  line2: String,
  city: String,
  contactNo: String,
  openHours:String,
  image: string,
};

export function Description(props:Props) {

  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center my-10">
      <div className="bg-white py-2.5 px-6 rounded-md">

        <div className="flex md:flex-row w-full items-center justify-between flex-col">
          <img className="w-[200px]"
            src={props.image}
            alt="salon"
          />
          <div className="w-[33%] px-2.5">
            <h2 className="text-black font-bold text-xl font-montserrat">{props.name}</h2>
            <p className="text-gray-500 font-normal text-base">
              Small description about their salon. bla bkanskc hja
              jhcjahabxsabch nacsbakjha knasjkcvahk babc nabab khabdcsa
              kjhcacbsajkcnsan.
            </p>
          </div>
          <div className="h-[100px] hidden md:flex w-[1px] bg-black"/>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-black font-normal text-base">{props.line1}, {props.line2}, {props.city}</p>
            <p className="text-black font-normal text-base">{props.contactNo}</p>
            <p>{props.openHours}</p>
            <div className="bg-black rounded-md w-[150px] h-10 flex justify-center items-center cursor-pointer"
              onClick={()=>navigate('/map-view')}
            >
              <span className="text-white text-base ">
                View Map
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
