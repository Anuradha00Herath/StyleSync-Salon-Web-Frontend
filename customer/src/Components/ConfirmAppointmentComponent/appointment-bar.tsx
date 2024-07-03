import React, { useEffect, useState } from "react";
import "../AvailableSalonComponent/navigation-bar.css";
import english from "../../assets/english.png";
import help from "../../assets/help.png";
import { useNavigate } from "react-router-dom";

interface Appointment {
  date: string;
  salon: string[];
  startTime: string;
}

interface Props {
  userId: any;
  appointment: Appointment;
}

export function AppointmentBar(props: Props) {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState('');
  console.log(props.appointment.salon);
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const appointmentDate = new Date(props.appointment.date);
      const [appointmentHours, appointmentMinutes] = props.appointment.startTime.split(':').map(Number);
      appointmentDate.setHours(appointmentHours);
      appointmentDate.setMinutes(appointmentMinutes);
      appointmentDate.setSeconds(0);

      const difference = appointmentDate.getTime() - now.getTime();
      if (difference <= 0) {
        setTimeRemaining('Appointment time has passed');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${days} day${days !== 1 ? 's' : ''} ${hours}:${minutes}:${seconds} remaining`);
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [props.appointment]);

  const formattedDate = new Date(props.appointment.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#c2bd88",
        width: "100%",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>
          You have an appointment with the salon of{" "}
          <b>{props.appointment.salon.join(", ")}</b> on <b>{formattedDate}</b> at{" "}
          <b>{props.appointment.startTime}:00</b> Hour
        </p>
        <p>Times remaining: {timeRemaining}</p>
        <div>
          <button
            style={{
              marginLeft: 30,
              textDecoration: "underline",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              marginLeft: 30,
              textDecoration: "underline",
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
