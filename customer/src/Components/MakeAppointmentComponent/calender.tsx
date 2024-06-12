import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calender() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
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
          <label style={{
            marginTop:20
          }} htmlFor="datePicker">Select Date:</label>
          <div style={{marginTop:10}}>
            <DatePicker
              id="datePicker"
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              inline
            />
          </div>
        </div>
        <button style={{
            height:40,
            width:150,
            backgroundColor:"black",
            marginTop:20
        }}><a style={{
            color:"white",
            textDecoration:"none"
        }} href="http://localhost:3000/confirm-appointment">Book Time Slot</a></button>
      </div>
    </div>
  );
}
