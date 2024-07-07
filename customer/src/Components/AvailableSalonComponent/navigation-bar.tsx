import React, { useEffect, useState } from "react";
import "./navigation-bar.css"; // Adjusted the import path
import english from "../../assets/english.png";
import help from "../../assets/help.png";
import { useNavigate, Link } from "react-router-dom";
import { AppointmentBar } from "../ConfirmAppointmentComponent/appointment-bar";
import axios from "axios";

interface Appointment {
  date: string;
  startTime: string;
  salon:string[],
  staffId:number,
  isCancel:boolean,
  isReject:boolean
  // Add other properties as needed
}

interface Props {
  userId: number | null; // Avoid using 'any', use a more specific type
}

export function NavigationBar(props: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { userId } = props;

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
      const upcomingAppointments = response.data.data.filter((appointment: Appointment) => {
        const now = new Date();
        const appointmentDate = new Date(appointment.date);
        const [hours, minutes] = appointment.startTime.split(':').map(Number);
        appointmentDate.setHours(hours);
        appointmentDate.setMinutes(minutes);
        return appointmentDate > now;
      });
      setAppointments(upcomingAppointments);
      console.log("details", upcomingAppointments);
    } catch (error) {
      console.error("Failed to fetch appointment details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomerDetails();
  }, [userId]);

  return (
    <div>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="logo">
              StyleSync
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <span onClick={() => navigate("/",{state:{id:userId}})}>Home</span>
              </li>
              <li>
                <span onClick={() => navigate("/",{state:{id:userId}})}>Categories</span>
              </li>
              <li>
                <Link to="/">LKR</Link>
              </li>
              <li>
                <Link to="/">
                  <img className="icon" src={english} alt="language" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img className="icon" src={help} alt="help" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="navbar-login">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </div>
            <div className="navbar-register">
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        appointments.map((appointment, index) => (
          <AppointmentBar key={index} appointment={appointment} userId={userId} />
        ))
      )}
    </div>
  );
}
