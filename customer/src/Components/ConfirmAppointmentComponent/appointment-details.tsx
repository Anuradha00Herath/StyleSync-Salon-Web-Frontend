import React, { useState } from "react";
export function AppointmentDetails() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmBooking = () => {
    alert("Booking Confirmed");
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          display: "flex",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ flex: 1, margin: "0 10px" }}>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Appointment Details
          </h2>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              margin: "0 auto 10px",
              borderRadius: "50%",
            }}
          ></div>
          <h3>Amal Perera</h3>
          <table
            style={{
              width: "100%",
              marginBottom: "20px",
              border: "1px solid #e0e0e0",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td>Service Name</td>
                <td>Hair Cut</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>LKR500</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>4th January 2024</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>13:30 - 14:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="your-details">
          <h2>Your Details</h2>
          <form style={{
            display: "flex",
            flexDirection: "column"
          }}
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirmBooking();
            }}
          >
            <label>
              Your Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Enter Contact Number
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </label>
            <label>
              Enter Email Address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button style={{
                padding: "10px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                alignSelf: "center"
            }} type="submit">Confirm Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}
