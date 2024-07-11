import { useEffect, useState } from "react";
import axios from "axios";
import { TimeBlocksList } from "./salon-time-blocks";
import React from "react";
import { Calender } from "../../Components/MakeAppointmentComponent/calender";

type Props = {
  salonId: Number;
  userId: any;
  name: String;
  line1: String;
  line2: String;
  city: String;
  contactNo: String;
  openHours: String;
  image:string
};

export function StaffServiceList(props: Props) {
  const [loading, setLoading] = useState(false);
  const [salonStaff, setSalonStaff] = useState([]);
  const [staffServices, setStaffServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [dayName, setDayName] = useState<string | null>(null);
  const [startTime, setStartTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [duration, setDuration] = useState("");
  const [staffId, setStaffId] = useState<Number | null>(null);
  const [serviceId, setServiceId] = useState<Number | null>(null);
  const [serviceName, setServiceName] = useState<string | null>("");
  const [price, setPrice] = useState<Number | null>(null);
  const [slotStart, setSlotStart] = useState<string | null>(null);
  const [slotEnd, setSlotEnd] = useState<string | null>(null);
  const [staffName, setStaffName] = useState<string | null>(" ");
  const [booked, setBooked] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [staffImage,setStaffImage] = useState("");
  const userId = props.userId;

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-staff-details",
        { params: { salonId: props.salonId } }
      );
      setSalonStaff(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [props.salonId]);

  const getAllServices = async (staffId: Number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-service-of-staff",
        { params: { staffId: staffId } }
      );
      setStaffServices(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getTimes = async (
    staffId: Number | null,
    serviceId: Number | null,
    date: Date | null
  ) => {
    if (!staffId || !serviceId || !date) return;

    setLoading(true);
    try {
      console.log("selected date", date);
      const dayName = getDayName(date);
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/staff-available-time",
        {
          params: {
            staffId: staffId,
            serviceId: serviceId,
            dayName: dayName,
            date,
          },
        }
      );
      setStartTime(response.data.data[0].openHour[0]);
      setCloseTime(response.data.data[0].closeHour[0]);
      setDuration(response.data.data[0].duration[0]);
      setIsOpen(response.data.data[0].isOpen[0]);
      setBooked(response.data.data2);
      console.log("Breaks", response.data.data3);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStaffClick = (staffId: Number, staffName: string,image:string) => {
    getAllServices(staffId);
    setStaffId(staffId);
    setStaffName(staffName);
    setStaffImage(image);
  };

  const handleServiceClick = (
    serviceId: Number,
    serviceName: any,
    price: Number
  ) => {
    setServiceId(serviceId);
    setServiceName(serviceName);
    setPrice(price);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return null;
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const getDayName = (date: Date | null) => {
    if (!date) return null;
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setDayName(getDayName(selectedDate));
    if (staffId && serviceId && selectedDate) {
      getTimes(staffId, serviceId, selectedDate);
    }
  }, [selectedDate, staffId, serviceId]);

  console.log(formatDate(selectedDate));
  console.log(dayName);

  

  return (
    <div className="flex md:flex-row justify-between flex-col w-full py-10">
      <div className="w-[30%] bg-white flex justify-center max-h-[400px] rounded-md">
        <div className="w-full px-3">
          <div>
            <div className="pt-10 px-2 text-base font-semibold">
              Select Staff:
            </div>
            {salonStaff.map((staff: any) => (
              <div className="flex flex-row text-black cursor-pointer font-medium text-base py-1"
                key={staff.id}
              >
                <input
                  type="radio"
                  id="staff"
                  name="staff"
                  value={staff.name}
                  onClick={() => handleStaffClick(staff.id, staff.name, staff.image)}
                />
                <p className="py-1 ml-2">
                  {staff.name}
                </p>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <div className="py-2 px-2 text-base font-semibold"
            >
              Select Service:
            </div>
            {staffServices.map((service: any) => (
              <div className="flex flex-row text-black cursor-pointer"
                key={service.id}
              >
                <input
                  type="radio"
                  id="staff1"
                  name="service"
                  value={service.name}
                  onChange={() =>
                    handleServiceClick(service.id, service.name, service.price)
                  }
                />
                <p className="ml-2 py-1">
                  {service.name}
                </p>
                <p className="ml-1 py-1 font-[600]">
                  - LKR {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen?<TimeBlocksList
        startTime={startTime}
        closeTime={closeTime}
        duration={duration}
        selectedDate={selectedDate}
        slotStart={slotStart}
        setSlotStart={setSlotStart}
        slotEnd={slotEnd}
        setSlotEnd={setSlotEnd}
        booked={booked}
        isOpen={isOpen}
      />:"Salon is closed"}
      
      <Calender
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        staffId={staffId}
        serviceId={serviceId}
        serviceName={serviceName}
        price={price}
        staffName={staffName}
        slotStart={slotStart}
        slotEnd={slotEnd}
        userId={userId}
        name={props.name}
        line1={props.line1}
        line2={props.line2}
        city={props.city}
        contactNo={props.contactNo}
        openHours={props.openHours}
        image={props.image}
        staffImage={staffImage}
      />
    </div>
  );
}
