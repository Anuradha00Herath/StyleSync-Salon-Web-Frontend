import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import React from "react";

export default function AppointmentSuccessful() {
    const location = useLocation();
  const { userId } = location.state;
  
  return (
    <div style={{ backgroundColor: "#f8f5f3" }}>
      <div>
        <NavigationBar userId={userId}/>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
            <h1>Successfull</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
