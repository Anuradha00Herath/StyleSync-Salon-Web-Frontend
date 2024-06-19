import React, { useState } from "react";

type AppointmentDetailsProps = {
  date: Date | string;
  staffId: string;
  serviceId: string;
  serviceName: string;
  price: string;
  staffName:string;
  slotStart: string;
  slotEnd: string;
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
}: AppointmentDetailsProps) {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmBooking = () => {
    alert("Booking Confirmed");
  };

  // Format date if it's a Date object
  const formattedDate = typeof date === 'object' ? date.toDateString() : date;

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div style={{ backgroundColor: "white", padding: 20, borderRadius: 8, display: "flex", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <h2 style={{ textAlign: "center" }}>Appointment Details</h2>
          <div style={{ width: "100px", height: "100px", backgroundColor: "#e0e0e0", margin: "0 auto 10px", borderRadius: "50%" }}></div>
          <h3 style={{ textAlign: "center" }}>{staffName}</h3>
          <table style={{ width: "70%", marginBottom: "20px", border: "1px solid #e0e0e0", borderCollapse: "collapse", margin: "0 auto 10px" }}>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>Service Name</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>{serviceName}</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>Price</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>{price}</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>Date</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>{formattedDate}</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>Time</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>{slotStart} - {slotEnd}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ width: 1, backgroundColor: "black" }}></div>
        <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <h2 style={{ textAlign: "center" }}>Your Details</h2>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={(e) => { e.preventDefault(); handleConfirmBooking(); }}>
              <label style={{ display: "flex", justifyContent: "space-between" }}>Your Name</label>
              <input style={{ padding: "8px", marginTop: "5px", border: "none", borderBottom: "1px solid black", outline: "none", marginBottom: "10px" }} type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <label style={{ display: "flex", justifyContent: "space-between" }}>Enter Contact Number</label>
              <input style={{ padding: "8px", marginTop: "5px", border: "none", borderBottom: "1px solid black", outline: "none", marginBottom: "10px" }} type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              <label style={{ display: "flex", justifyContent: "space-between" }}>Enter Email Address</label>
              <input style={{ padding: "8px", marginTop: "5px", border: "none", borderBottom: "1px solid black", outline: "none", marginBottom: "10px" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <button style={{ height: 40, width: 150, backgroundColor: "#333", color: "white", border: "none", cursor: "pointer", alignSelf: "center" }} type="submit">
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
