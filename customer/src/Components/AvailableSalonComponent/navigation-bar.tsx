import React, { useEffect, useState } from "react";
import "../AvailableSalonComponent/navigation-bar.css";
import english from "../../assets/english.png";
import help from "../../assets/help.png";
import { useNavigate } from "react-router-dom";
import { AppointmentBar } from "../ConfirmAppointmentComponent/appointment-bar";
import axios from "axios";

interface Props {
  userId: any;
}

export function NavigationBar(props: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const userId = props.userId;

  const getCustomerDetails = async () => {
    if (!userId) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-appointment-details",
        { params: { userId } }
      );
      const upcomingAppointments = response.data.data.filter((appointment: any) => {
        const now = new Date();
        const appointmentDate = new Date(appointment.date);
        const [hours, minutes] = appointment.startTime.split(':').map(Number);
        appointmentDate.setHours(hours);
        appointmentDate.setMinutes(minutes);
        return appointmentDate > now;
      });
      setAppointments(upcomingAppointments);
      console.log("details",upcomingAppointments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomerDetails();
  }, [userId]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#2E2528",
          width: "100%",
          alignItems: "center",
        }}
      >
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/" className="logo">
              StyleSync
            </a>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <text onClick={() => navigate("/")}>Home</text>
              </li>
              <li>
                <text onClick={() => navigate("/")}>Categories</text>
              </li>
              <li>
                <a href="/">LKR</a>
              </li>
              <li>
                <a href="/">
                  <img
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25,
                    }}
                    src={english}
                    alt="language"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25,
                    }}
                    src={help}
                    alt="help"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <div
              style={{
                backgroundColor: "#2e2528",
                height: 35,
                width: 100,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="http://localhost:3000/login"
              >
                Login
              </a>
            </div>
            <div
              style={{
                backgroundColor: "white",
                height: 35,
                width: 100,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: 30,
              }}
            >
              <a
                style={{
                  color: "#2e2528",
                  textDecoration: "none",
                }}
                href="http://localhost:3000/register"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
      {appointments.map((appointment, index) => (
        <AppointmentBar key={index} appointment={appointment} userId={userId}/>
      ))}
    </div>
  );
}
