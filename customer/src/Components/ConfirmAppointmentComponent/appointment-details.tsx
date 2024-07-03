import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AppointmentDetailsProps = {
  date: Date | string;
  staffId: string;
  serviceId: string;
  serviceName: string;
  price: string;
  staffName: string;
  slotStart: string;
  slotEnd: string;
  userId: any;
  name: String;
  line1: String;
  line2: String;
  city: String;
  contactNo: String;
  openHours: String;
};

export function AppointmentDetails({
  date,
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
}: AppointmentDetailsProps) {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const currentDate = new Date();
  console.log(currentDate);

  const handleConfirmBooking = () => {
    alert("Booking Confirmed");
    bookAppointment();
  };

  const getCustomerDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-customer-details",
        { params: { userId } }
      );
      console.log(response.data.data[0]);
      setCustomerName(response.data.data[0].name);
      setEmail(response.data.data[0].email);
      setContactNumber(response.data.data[0].contactNo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomerDetails();
  });

  const bookAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://stylesync-backend-test.onrender.com/customer/customer/create-appointment",
        {
          userId: userId,
          date: date,
          startTime: slotStart,
          endTime: slotEnd,
          staffId: staffId,
          serviceId: serviceId,
          contactNumber: contactNumber,
          bookingTime: currentDate.toISOString(),
        }
      );
      console.log(response.data.status);
      if (response.data.status === 200) {
        navigate("/appointment-successful", {
          state: {
            userId,
            date,
            slotStart,
            slotEnd,
            serviceId,
            serviceName,
            contactNumber,
            staffName,
            price,
            formattedDate,
            customerName,
            email,
            name,
            line1,
            line2,
            city,
            contactNo,
            openHours,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Format date if it's a Date object
  const formattedDate = typeof date === "object" ? date.toDateString() : date;

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          display: "flex",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2 style={{ textAlign: "center" }}>Appointment Details</h2>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              margin: "0 auto 10px",
              borderRadius: "50%",
            }}
          ></div>
          <h3 style={{ textAlign: "center" }}>{staffName}</h3>
          <table
            style={{
              width: "70%",
              marginBottom: "20px",
              border: "1px solid #e0e0e0",
              borderCollapse: "collapse",
              margin: "0 auto 10px",
            }}
          >
            <tbody>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Service Name
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {serviceName}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Price
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {price}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Date
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {formattedDate}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Time
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {slotStart} - {slotEnd}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ width: 1, backgroundColor: "black" }}></div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "80%" }}>
            <h2 style={{ textAlign: "center" }}>Your Details</h2>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleConfirmBooking();
              }}
            >
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Your Name
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Enter Contact Number
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Enter Email Address
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <button
                  style={{
                    height: 40,
                    width: 150,
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                  type="submit"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
