import { useEffect, useState } from "react";
import axios from "axios";
import { TimeBlocksList } from "./salon-time-blocks";
import { Calender } from "../../Components/MakeAppointmentComponent/calender";

type Props = {
  salonId: Number;
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

  const getTimes = async (staffId: Number | null, serviceId: Number | null, date: Date | null) => {
    if (!staffId || !serviceId || !date) return;

    setLoading(true);
    try {
      const dayName = getDayName(date);
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/staff-available-time",
        { params: { staffId: staffId, serviceId: serviceId, dayName: dayName } }
      );
      setStartTime(response.data.data[0].openHour[0]);
      setCloseTime(response.data.data[0].closeHour[0]);
      setDuration(response.data.data[0].duration[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStaffClick = (staffId: Number) => {
    getAllServices(staffId);
    setStaffId(staffId);
  };

  const handleServiceClick = (serviceId: Number) => {
    setServiceId(serviceId);
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
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
            width: "90%",
          }}
        >
          <div>
            <h5
              style={{
                margin: "5px",
                padding: "0 5px",
              }}
            >
              Select Staff:
            </h5>
            {salonStaff.map((staff: any) => (
              <div
                key={staff.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  id="staff1"
                  name="staff1"
                  value={staff.name}
                  onClick={() => handleStaffClick(staff.id)}
                />
                <p
                  style={{
                    margin: "4px 0",
                    padding: "0 5px",
                  }}
                >
                  {staff.name}
                </p>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h5
              style={{
                margin: "5px",
                padding: "0 5px",
              }}
            >
              Select Service:
            </h5>
            {staffServices.map((service: any) => (
              <div
                key={service.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  id="staff1"
                  name="staff1"
                  value={service.name}
                  onChange={() => handleServiceClick(service.id)}
                />
                <p
                  style={{
                    margin: "4px 0",
                    padding: "0 5px",
                  }}
                >
                  {service.name}
                </p>
                <p
                  style={{
                    margin: "4px 0",
                    padding: "0 5px",
                  }}
                >
                  - LKR {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TimeBlocksList startTime={startTime} closeTime={closeTime} duration={duration} />
      <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
}
