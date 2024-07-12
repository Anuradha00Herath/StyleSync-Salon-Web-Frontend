import React, { useEffect, useState } from "react";
import "./navigation-bar.css"; // Adjusted the import path
import english from "../../assets/english.png";
import help from "../../assets/help.png";
import { AnimatePresence, motion } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full max-w-[1900px] bg-[#2E2528] h-[70px] px-5 sm:px-8 flex flex-row items-center py-4 justify-between">
        <nav className="w-full hidden lg:flex justify-between items-center  mx-10 text-white" >
          <div >
            <Link to="/" className="text-white font-semibold text-2xl font-montserrat">
              StyleSync
            </Link>
          </div>
          <div>
            <ul className="flex justify-between items-center gap-4 xl:gap-12 text-white text-lg font-medium font-montserrat">
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
          <div className="flex justify-end items-center">
            {/* <div className="bg-primary h-35px w-[100px] items-center justify-center">
              <Link to="/login" className="text-white text-lg font-medium py-3 px-4 font-montserrat">
                Login
              </Link>
            </div> */}
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed top-0 left-0 w-fit h-full z-50 bg-white"
            >
              <div className="flex w-full flex-col items-start justify-start p-10 h-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <Link to="/" className="text-primary font-semibold text-2xl cursor-pointer">StyleSync</Link>
                  <button
                    className="text-primary focus:outline-none pl-24 pr-4"
                    onClick={toggleMenu}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-left text-lg w-full h-full mt-10">
                  <div className="flex flex-col py-10 text-primary">
                    <ul className="list-none font-medium">
                    <li className="py-2">
                      <span onClick={() => {
                        navigate("/",{state:{id:userId}});
                        toggleMenu();
                    }}>Home</span>
                    </li>
                    <li className="py-2">
                      <span onClick={() => {
                        navigate("/",{state:{id:userId}});
                        toggleMenu();
                    }}>Categories</span>
                    </li>
                    <li className="py-2">
                      <Link to="/" onClick={toggleMenu}>LKR</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" onClick={toggleMenu}>
                        <img className="icon" src={english} alt="language" />
                      </Link>
                    </li>
                    <li className="py-2" onClick={toggleMenu}>
                      <Link to="/">
                        <img className="icon" src={help} alt="help" />
                      </Link>
                    </li>
                    </ul>
                    <span className="mt-10 flex flex-col justify-start items-start">
                      <Link to="/login" className="text-primary font-medium text-xl cursor-pointer py-2" onClick={toggleMenu}>Login</Link>
                      <Link to="/register" className="text-primary font-medium text-xl cursor-pointer py-2" onClick={toggleMenu}>Register</Link>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger menu */}
        <div className="flex lg:hidden w-full justify-between items-center">
          <Link to="/" className="text-white font-semibold text-2xl">
            StyleSync
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
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
