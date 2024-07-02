import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

type Props = {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  staffId: Number | null;
  serviceId:Number | null;
  serviceName:string | null;
  price:Number| null;
  staffName: string | null;
  slotStart: string | null;
  slotEnd: string | null;
  userId: any
};

export function Calender({ selectedDate, setSelectedDate, staffId, serviceId, serviceName, price, staffName, slotStart, slotEnd, userId }: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "27%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{
              marginTop: 20,
            }}
            htmlFor="datePicker"
          >
            Select Date:
          </label>
          <div style={{ marginTop: 10 }}>
            <DatePicker
              id="datePicker"
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              inline
            />
          </div>
        </div>
        <button
          style={{
            height: 40,
            width: 150,
            backgroundColor: "black",
            marginTop: 20,
            color: "white",
              textDecoration: "none",
              cursor: "pointer"
          }}
          onClick={()=>navigate('/confirm-appointment',{state:{date:selectedDate,staffId:staffId,serviceId:serviceId, serviceName:serviceName, price:price,staffName:staffName, slotStart:slotStart, slotEnd:slotEnd,userId:userId}})}
        >
            Book Time Slot
        </button>
      </div>
    </div>
  );
}
