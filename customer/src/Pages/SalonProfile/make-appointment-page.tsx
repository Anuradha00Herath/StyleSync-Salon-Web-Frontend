import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";
import { StaffServiceList } from "../../Components/MakeAppointmentComponent/salon-staff-service-list";


export default function SalonProfile() {
  const location = useLocation();
  const { id, name, line1, line2, city, contactNo, time } = location.state;
 
  return (
    <div
      style={{
        backgroundColor: "#f8f5f3",
      }}
    >
      <div>
        <NavigationBar />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <div>
            <Description name={name} line1={line1} line2={line2} city={city} contactNo={contactNo} openHours={time} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <StaffServiceList salonId={id}/>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
