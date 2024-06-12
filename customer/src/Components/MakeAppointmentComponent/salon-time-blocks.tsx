import React from "react";
const timeSlots = [
  { time: "10:00 - 10:30", period: "Morning", available: false },
  { time: "10:30 - 11:00", period: "Morning", available: false },
  { time: "11:00 - 11:30", period: "Morning", available: false },
  { time: "11:30 - 12:00", period: "Morning", available: false },
  { time: "13:00 - 13:30", period: "Afternoon", available: false },
  { time: "13:30 - 14:00", period: "Afternoon", available: true },
  { time: "14:00 - 14:30", period: "Afternoon", available: true },
  { time: "14:30 - 15:00", period: "Afternoon", available: true },
  { time: "16:00 - 16:30", period: "Evening", available: true },
  { time: "16:30 - 17:00", period: "Evening", available: true },
  { time: "17:00 - 17:30", period: "Evening", available: true },
  { time: "17:30 - 18:00", period: "Evening", available: true },
  { time: "18:00 - 18:30", period: "Evening", available: true },
  { time: "18:30 - 19:00", period: "Evening", available: true },
];
export function TimeBlocksList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row" as const,
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <div
        style={{
          margin: "0 10px",
          display: "flex",
          flexDirection: "column" as const,
        }}
      >
        <h4 style={{
          textAlign:"center"
        }}>Morning</h4>
        {timeSlots
          .filter((slot) => slot.period === "Morning")
          .map((slot, index) => (
            <a style={{
              color:"black",
              textDecoration:"none"
            }} href="hsdhs">
            <div
              key={index}
              style={{
                ...styles.timeSlot,
                ...(slot.available ? styles.available : styles.unavailable),
              }}
            >
              {slot.time}
            </div></a>
          ))}
      </div>
      <div
        style={{
          margin: "0 10px",
          display: "flex",
          flexDirection: "column" as const,
        }}
      >
        <h4 style={{
          textAlign:"center"
        }}>Afternoon</h4>
        {timeSlots
          .filter((slot) => slot.period === "Afternoon")
          .map((slot, index) => (
            <a style={{
              color:"black",
              textDecoration:"none"
            }} href="hsdhs">
            <div
              key={index}
              style={{
                ...styles.timeSlot,
                ...(slot.available ? styles.available : styles.unavailable),
              }}
            >
              {slot.time}
            </div></a>
          ))}
      </div>
      <div
        style={{
          margin: "0 10px",
          display: "flex",
          flexDirection: "column" as const,
        }}
      >
        <h4 style={{
          textAlign:"center"
        }}>Evening</h4>
        {timeSlots
          .filter((slot) => slot.period === "Evening")
          .map((slot, index) => (
            <a style={{
              color:"black",
              textDecoration:"none"
            }} href="hsdhs">
            <div
              key={index}
              style={{
                ...styles.timeSlot,
                ...(slot.available ? styles.available : styles.unavailable),
              }}
            >
              {slot.time}
            </div></a>
          ))}
      </div>
    </div>
  );
}
const styles = {
  timeSlot: {
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    textAlign: "center" as const,
  },
  unavailable: {
    backgroundColor: "#e0e0e0",
  },
  available: {
    backgroundColor: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#d0ffd6",
    },
  },
};
