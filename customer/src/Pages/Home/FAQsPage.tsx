import React from "react";
import CustomHeading from "../../Components/common/CustomHeading";
import FAQuestion from "../../Components/common/FAQusetion";
import { FAQ_DATA } from "../../const/data";

export function FAQsPage() {
  return (
    <div className="pb-0">
      <div className="flex justify-center items-center">
        <CustomHeading title="FAQ"/> 
      </div>
      <div className="w-full flex justify-center lg:w-1/2 lg:mx-auto items-center">
        <div className="bg-[#f8f5f3] w-[90%] md:w-[80%]"> 
          
          {FAQ_DATA.map((item) => (
            <FAQuestion title={item.title} text={item.text} />
          
          ))}
        </div>
      </div>
    </div>
  );
}
