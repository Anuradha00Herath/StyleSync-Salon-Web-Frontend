import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import React, { useEffect, useState } from "react";
import { Description } from "../../Components/MakeAppointmentComponent/salon-profile-discription";
import axios from "axios";

export default function AppointmentSuccessful() {
  const location = useLocation();
  const {
    userId,
    date,
    slotStart,
    staffId
  } = location.state;

  const [staffName,setStaffName] = useState("");
  const [staffImage,setStaffImage] = useState("");
  const [salonImage,setSalonImage]= useState("");
  const [customerImage,setCustomerImage] = useState("");
  const [serviceName,setServiceName] = useState("");
  const [price,setPrice] = useState("");
  const [slotEnd,setSlotEnd] = useState("");
  const [salonContact, setSalonContact] = useState("");
  const [customerName,setCustomerName] = useState("");
  const [customerEmail,setCustomerEmail] = useState("");
  const [salonName,setSalonName]= useState("");
  const [line1,setLine1] = useState("");
  const [line2,setLine2] = useState("");
  const [city, setCity] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [openHours,setOpenHours] = useState("");
  const [isCancel,setIsCancel] = useState(false);
  const [isReject,setIsReject] = useState(false);


  const formattedDate = typeof date === "object" ? date.toDateString() : date;


  const appointemntDetails = async() =>{
    if(!userId || !staffId || !slotStart || !date){
      console.log("inputs not found");
      return;
    }
    console.log("inputs", userId,staffId,slotStart,date);
    try{
      const response = await axios.get("https://stylesync-backend-test.onrender.com/customer/customer/appointment-details",{params:{
        userId,
        staffId,
        date:date,
        startTime:slotStart,
      }})
      console.log(response.data.data[0]);
      setStaffName(response.data.data[0].staffName);
      setStaffImage(response.data.data[0].staffImage);
      setSalonImage(response.data.data[0].salonImage);
      setCustomerImage(response.data.data[0].customerImage);
      setServiceName(response.data.data[0].serviceName);
      setPrice(response.data.data[0].price);
      setSlotEnd(response.data.data[0].endTime);
      setSalonContact(response.data.data[0].salonContactNo);
      setCustomerName(response.data.data[0].customerName);
      setCustomerEmail(response.data.data[0].customerEmail);
      setSalonName(response.data.data[0].salonName);
      setLine1(response.data.data[0].line1);
      setLine2(response.data.data[0].line2);
      setCity(response.data.data[0].city[0]);
      setCustomerContact(response.data.data[0].customerContactNo);
      setOpenHours(response.data.data[0].openHours);
      setIsCancel(response.data.data[0].isCancel);
      setIsReject(response.data.data[0].isReject);
      
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    appointemntDetails();
  });

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <NavigationBar userId={userId} />
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
          {isReject? <div
            style={{
              width: "100%",
              backgroundColor: "#fa9696",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              Appointment is rejected
            </p>
          </div>:<div>{isCancel?<div
            style={{
              width: "100%",
              backgroundColor: "#fa9696",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              Appointment is canceled
            </p>
          </div>:<div
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
          </div>}</div>}
          
          <h2 style={{ textAlign: "center" }} className="text-lg font-bold font-montserrat py-4">Appointment Details</h2>
          
          <table
            style={{
              width: "80%",
              marginBottom: "20px",
              margin: "0 auto 10px",
            }}
          >
            <tbody>
              <div className="text-lg font-bold py-2">Salon Details</div>
              <img src={salonImage} alt="salon profile" width="150px" height="150px" className="rounded-md py-2"/>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px"}}
                >
                  Salon Name
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {salonName}
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
                  {salonContact}
                </td>
              </tr>
              <tr>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px" }}
                >
                  Salon Address
                </td>
                <td
                  style={{ borderBottom: "1px solid #e0e0e0", padding: "8px", justifyContent:"flex-end" ,display:"flex" }}
                >
                  {line1},{line2},{city}.
                </td>
              </tr>
              <div className="text-lg font-bold py-2 mt-10">Staff Details</div>
              <img src={staffImage} alt="salon profile" width="150px" height="150px" className="rounded-md py-2"/>
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
                  {salonContact}
                </td>
              </tr>
              <div className="text-lg font-bold py-2 mt-10">Appointment Details</div>
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
              <div className="text-lg font-bold py-2 mt-10">Your Details</div>
              
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
                  {customerContact}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Email Address</td>
                <td style={{ padding: "8px", justifyContent:"flex-end" ,display:"flex" }}>{customerEmail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
