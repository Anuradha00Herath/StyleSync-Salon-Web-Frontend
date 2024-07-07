import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { AppointmentDetails } from "../../Components/ConfirmAppointmentComponent/appointment-details";
import { Footer } from "../../Components/HomeComponent/footer";
import React from "react";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";

export default function AppointmentConfirm() {
  const location = useLocation();
  const {
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
    image
  } = location.state;
  console.log(userId);

  return (
    <div style={{ backgroundColor: "#f8f5f3" }}>
      <div>
        <NavigationBar userId={userId} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <div>
            <Description
              name={name}
              line1={line1}
              line2={line2}
              city={city}
              contactNo={contactNo}
              openHours={openHours}
              image={image}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <AppointmentDetails
              date={date}
              staffId={staffId}
              serviceId={serviceId}
              serviceName={serviceName}
              price={price}
              staffName={staffName}
              slotStart={slotStart}
              slotEnd={slotEnd}
              userId={userId}
              name={name}
              line1={line1}
              line2={line2}
              city={city}
              contactNo={contactNo}
              openHours={openHours}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
