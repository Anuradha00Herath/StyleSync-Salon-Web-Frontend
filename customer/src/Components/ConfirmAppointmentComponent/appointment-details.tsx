import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AppointmentDetailsProps = {
  date: Date | string;
  staffId: string;
  serviceId: string;
  serviceName: string;
  price: string;
  staffName: string;
  slotStart: string;
  slotEnd: string;
  userId: any;
  name: string;
  line1: string;
  line2: string;
  city: string;
  contactNo: string;
  openHours: string;
};

export function AppointmentDetails({
  date,
  staffId,
  serviceId,
  serviceName,
  price,
  staffName,
  slotStart,
  slotEnd,
  userId: initialUserId,
}: AppointmentDetailsProps) {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [userId, setUserId] = useState(initialUserId);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const currentDate = new Date();

  const handleConfirmBooking = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      if (!userId) {
        const response = await axios.post(
          "https://stylesync-backend-test.onrender.com/customer/customer/temp-customer-register",
          {
            email,
            contactNo: contactNumber,
            userName: customerName,
            date,
          }
        );
        const tempUserId = response.data.data2;
        setUserId(tempUserId);
        bookAppointment(tempUserId,isVerified);
      } else {
        bookAppointment(userId,isVerified);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!customerName.trim()) errors.customerName = "Name is required";
    if (!contactNumber.trim()) errors.contactNumber = "Contact number is required";
    if (!email.trim()) errors.email = "Email is required";
    // Add more validation logic as needed
    return errors;
  };

  const getCustomerDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/get-customer-details",
        { params: { userId: initialUserId } }
      );
      const data = response.data.data[0];
      setCustomerName(data.name);
      setEmail(data.email);
      setContactNumber(data.contactNo);
      setIsVerified(data.isVerified);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const generateOTP = async (responseId: string) => {
    setLoading(true);
    try {
      if (!responseId || !email) {
       console.log("missing responseId or email")
        setLoading(false);
        return;
      }

      const url =
        "https://stylesync-backend-test.onrender.com/customer/customer/generate-otp";
      const response = await axios.put(url, { userId: responseId, email });

      if (response.status === 200) {
        const userInput = prompt("Enter OTP sent to your email", "");
        if (userInput !== null) {
          const verifyUrl =
            "https://stylesync-backend-test.onrender.com/customer/customer/verified-email";
          const verifyResponse = await axios.put(verifyUrl, {
            userId: responseId,
            otp: userInput,
          });

          if (verifyResponse.status === 200) {
            setIsVerified(true);
            bookAppointment(responseId, true);
          } else {
            setIsVerified(false);
            alert("Verification failed. Please try again.");
          }
        }
      } else {
        alert("OTP generation failed");
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
      alert(`Error generating OTP: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialUserId) getCustomerDetails();
  }, [initialUserId]);

  const bookAppointment = async (userId: string, isVerified:boolean) => {
    if (!isVerified) {
      generateOTP(userId);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://stylesync-backend-test.onrender.com/customer/customer/create-appointment",
        {
          userId,
          date,
          startTime: slotStart,
          endTime: slotEnd,
          staffId,
          serviceId,
          contactNumber,
          bookingTime: currentDate.toISOString(),
        }
      );
      if (response.data.status === 200) {
        navigate("/appointment-successful", {
          state: {
            userId,
            date,
            slotStart,
            staffId,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const formattedDate = typeof date === "object" ? date.toDateString() : date;

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          display: "flex",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2 style={{ textAlign: "center" }}>Appointment Details</h2>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e0e0e0",
              margin: "0 auto 10px",
              borderRadius: "50%",
            }}
          ></div>
          <h3 style={{ textAlign: "center" }}>{staffName}</h3>
          <table
            style={{
              width: "70%",
              marginBottom: "20px",
              border: "1px solid #e0e0e0",
              borderCollapse: "collapse",
              margin: "0 auto 10px",
            }}
          >
            <tbody>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Service Name
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {serviceName}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Price
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {price}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Date
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {formattedDate}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  Time
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "8px" }}>
                  {slotStart} - {slotEnd}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ width: 1, backgroundColor: "black" }}></div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "80%" }}>
            <h2 style={{ textAlign: "center" }}>Your Details</h2>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleConfirmBooking();
              }}
            >
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Your Name
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {errors.customerName && (
                <span style={{ color: "red" }}>{errors.customerName}</span>
              )}
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Enter Contact Number
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              {errors.contactNumber && (
                <span style={{ color: "red" }}>{errors.contactNumber}</span>
              )}
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Enter Email Address
              </label>
              <input
                style={{
                  padding: "8px",
                  marginTop: "5px",
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  marginBottom: "10px",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <button
                  style={{
                    height: 40,
                    width: 150,
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
