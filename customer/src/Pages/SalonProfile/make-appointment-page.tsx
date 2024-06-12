import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import { Calender } from "../../Components/MakeAppointmentComponent/calender";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";
import { StaffServiceList } from "../../Components/MakeAppointmentComponent/salon-staff-service-list";
import { TimeBlocksList } from "../../Components/MakeAppointmentComponent/salon-time-blocks";

export default function SalonProfile() {
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
            <Description />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <StaffServiceList />
            <TimeBlocksList />
            <Calender/>
          </div>
          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
