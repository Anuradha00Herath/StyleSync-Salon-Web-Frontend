import React, { useEffect, useState } from "react";
import "../AvailableSalonComponent/navigation-bar.css";
import english from "../../assets/english.png";
import help from "../../assets/help.png";
import { useNavigate } from "react-router-dom";
import axios, { isCancel } from "axios";

interface Appointment {
  date: string;
  salon: string[];
  startTime: string;
  staffId: any;
  isCancel: Boolean;
  isReject: Boolean;
}

interface Props {
  userId: any;
  appointment: Appointment;
}

export function AppointmentBar(props: Props) {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = props.userId;
  const staffId = props.appointment.staffId;
  const startTime = props.appointment.startTime;
  const date = props.appointment.date;
  const isCancel = props.appointment.isCancel;
  const isReject = props.appointment.isReject;

  const handleCancel = async () => {
    if (!userId || !staffId || !startTime || !date) {
      console.log(userId, staffId, startTime, date);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.put(
        "https://stylesync-backend-test.onrender.com/customer/customer/cancel-appointment",
        { userId, staffId, startTime, date }
      );
      console.log(response.data);
      navigate("/appointment-successful", {
        state: { userId, staffId, slotStart: startTime, date },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const appointmentDate = new Date(props.appointment.date);
      const [appointmentHours, appointmentMinutes] = props.appointment.startTime
        .split(":")
        .map(Number);
      appointmentDate.setHours(appointmentHours);
      appointmentDate.setMinutes(appointmentMinutes);
      appointmentDate.setSeconds(0);

      const difference = appointmentDate.getTime() - now.getTime();
      if (difference <= 0) {
        setTimeRemaining("Appointment time has passed");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${days} day${
          days !== 1 ? "s" : ""
        } ${hours}:${minutes}:${seconds} remaining`
      );
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [props.appointment]);

  const formattedDate = new Date(props.appointment.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
  return (
    <div>
      {isReject ? (
        <div></div>
      ) : (
        <div>
          {isCancel ? (
            <div></div>
          ) : (
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
                  <b>{props.appointment.salon.join(", ")}</b> on{" "}
                  <b>{formattedDate}</b> at{" "}
                  <b>{props.appointment.startTime}:00</b> Hour
                </p>
                <p>Times remaining: {timeRemaining}</p>
                <div>
                  <button
                    style={{
                      marginLeft: 30,
                      textDecoration: "underline",
                    }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      marginLeft: 30,
                      textDecoration: "underline",
                    }}
                    onClick={() =>
                      navigate("/appointment-successful", {
                        state: { userId, staffId, slotStart: startTime, date },
                      })
                    }
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
