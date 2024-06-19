import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { AppointmentDetails } from "../../Components/ConfirmAppointmentComponent/appointment-details";
import { Footer } from "../../Components/HomeComponent/footer";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";

export default function AppointmentConfirm() {
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
            {/* <Description /> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <AppointmentDetails/>
          </div>
          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
