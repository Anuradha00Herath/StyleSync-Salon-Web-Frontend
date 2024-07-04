import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import React from "react";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";

export default function AppointmentSuccessful() {
  const location = useLocation();
  const {
    userId,
    date,
    staffName,
    serviceName,
    price,
    formattedDate,
    slotStart,
    slotEnd,
    contactNumber,
    customerName,
    email,
    name,
    line1,
    line2,
    city,
    contactNo,
    openHours,
  } = location.state;

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <NavigationBar userId={undefined} />
       <Description
              name={name}
              line1={line1}
              line2={line2}
              city={city}
              contactNo={contactNo}
              openHours={openHours}
            />
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          display: "flex",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#c5f79e",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              Appointment Sent Successfully
            </p>
          </div>
          <h2 style={{ textAlign: "center" }}>Appointment Details</h2>
          
          <table
            style={{
              width: "80%",
              marginBottom: "20px",
              margin: "0 auto 10px",
            }}
          >
            <tbody>
              <h4>Salon Details</h4>
              <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              
              
            }}
          ></div>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px"}}
                >
                  Salon Name
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {name}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Salon Contact Number
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {contactNo}
                </td>
              </tr>
              <h4>Staff Details</h4>
              <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              
              
            }}
          ></div>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Staff Name
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {staffName}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Staff Contact Number
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {contactNo}
                </td>
              </tr>
              <h4>Appointment Details</h4>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Service Name
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {serviceName}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Price
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {price}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Date
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {formattedDate}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Time
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {slotStart} - {slotEnd}
                </td>
              </tr>
              <h4>Your Details</h4>
              <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              
              
            }}
          ></div>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Name
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {customerName}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Contact Number
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {contactNumber}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Email Address</td>
                <td style={{ padding: "8px", justifyContent:"flex-end" ,display:"flex" }}>{email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
