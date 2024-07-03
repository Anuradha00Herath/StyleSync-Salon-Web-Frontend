import React from "react";
import CustomHeading from "../../Components/common/CustomHeading";
import { TextField } from '@mui/material';

export function SendMessage() {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <div className="flex justify-center items-center">
        <CustomHeading title="Send us a message"/> 
      </div>
      <div className="flex-col flex justify-center items-center w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] lg:w-[60%] md:gap-10 gap-2 md:py-3 py-1">
          <CustomTextField title="Name" placeholder="Enter your name" />
          <CustomTextField title="Email" placeholder="Enter your email" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] lg:w-[60%] md:gap-10 gap-2 md:py-3 py-1">
          <CustomTextField title="Subject" placeholder="Enter your subject" />
          <CustomTextField title="Phone" placeholder="Enter your number" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-[80%] lg:w-[60%] md:gap-10 gap-2 md:py-3 py-1">
          <CustomTextField title="Message" placeholder="Write your message here" multiline={true} rows={5} />
        </div>
        <button className="bg-primary w-[80%] md:w-[30%] py-2 rounded-lg text-md text-white font-medium mt-10 font-montserrat">
          Submit
        </button>
      </div>
    </div>
  );
}

const CustomTextField = ({
  title,
  placeholder,
  multiline = false,
  rows = 4,
}: {
  title: string;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
}) => {
  return (
    <div className="flex flex-col items-start space-y-1 py-2 md:py-0 w-full">
      <div className="text-md font-medium text-primary" >
        {title}
      </div>
      <TextField size="small" placeholder={placeholder} className="w-full" multiline={multiline} rows={rows} />
    </div>
  );
};