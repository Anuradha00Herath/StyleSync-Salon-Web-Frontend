import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

type Props = {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  staffId: Number | null;
  serviceId: Number | null;
  serviceName: string | null;
  price: Number | null;
  staffName: String | null;
  slotStart: String | null;
  slotEnd: String | null;
  userId: any;
  name: String;
  line1: String;
  line2: String;
  city: String;
  contactNo: String;
  openHours: String;
  image:string,
  staffImage:string
};

export function Calender({
  selectedDate,
  setSelectedDate,
  staffId,
  serviceId,
  serviceName,
  price,
  staffName,
  slotStart,
  slotEnd,
  userId,
  name,
  line1,
  line2,
  city,
  contactNo,
  openHours,
  image,
  staffImage
}: Props) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleBooking = () => {
    if (!staffId || !serviceId || !slotStart || !slotEnd) {
      setError("Please select a staff member, service, and time slot.");
      return;
    }
    setError(null);
    navigate("/confirm-appointment", {
      state: {
        date: selectedDate,
        staffId: staffId,
        serviceId: serviceId,
        serviceName: serviceName,
        price: price,
        staffName: staffName,
        slotStart: slotStart,
        slotEnd: slotEnd,
        userId: userId,
        name: name,
        line1: line1,
        line2: line2,
        city: city,
        contactNo: contactNo,
        openHours: openHours,
        image:image,
        staffImage:staffImage
      },
    });
  };

  return (
    <div className="w-[30%] bg-white flex justify-center rounded-md max-h-[400px]">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col justify-center items-center">
          <label className="my-4 font-medium"
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
        {error && (
          <div style={{ color: "red", marginTop: 10 }}>{error}</div>
        )}
        <button className="h-10 w-[150px] bg-black rounded-md text-white cursor-pointer my-2"
          onClick={handleBooking}
        >
          Book Time Slot
        </button>
      </div>
    </div>
  );
}
