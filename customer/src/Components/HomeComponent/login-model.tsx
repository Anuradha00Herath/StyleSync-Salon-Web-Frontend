import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
  setOpen: (open: boolean) => void;
  setUserId: (id: any) => void;
  userId: string | null;
}

const InputField = ({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <label
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: 20,
    }}
  >
    {label}
    <input
      style={{
        border: 0,
        borderBottom: "2px solid",
        height: 40,
        width: 350,
        outline: "none",
      }}
      type={type}
      value={value}
      onChange={onChange}
    />
  </label>
);

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  handleClose,
  setOpen,
  setUserId,
  userId,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [regMode, setRegMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setContactNo("");
    setError(null);
  };

  const validateInputs = () => {
    if (!email.trim()) {
      setError("Email field is required");
      return false;
    }
    if (!password.trim()) {
      setError("Password field is required");
      return false;
    }
    if (!/^(?=.*\d{2,}).{8,}$/.test(password)) {
      setError(
        "Password must be at least 8 characters and contain at least 2 digits"
      );
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateInputs()) {
      setLoading(true);
      try {
        const url =
          "https://stylesync-backend-test.onrender.com/customer/customer/login-customer";
        const response = await axios.post(url, { email, password });
        const responseId = response.data.data.id; // Capture the response ID here

        setId(responseId);
        setEmail(response.data.data.email);
        setUserId(responseId);

        if (response.data.data.isVerified) {
          alert("Logged in successfully");
          setIsLogin(true);
          setOpen(false);
        } else {
          generateOTP(responseId); // Pass the response ID here
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setError("Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const validateInputs2 = () => {
    if (!name.trim()) {
      setError("Name field is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email field is required");
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (!password.trim()) {
      setError("Password field is required");
      return false;
    }
    if (!/^(?=.*\d{2,}).{8,}$/.test(password)) {
      setError(
        "Password must be at least 8 characters and contain at least 2 digits"
      );
      return false;
    }
    if (!confirmPassword.trim()) {
      setError("Confirm password field is required");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit2 = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateInputs2()) {
      setLoading(true);
      try {
        const url =
          "https://stylesync-backend-test.onrender.com/customer/customer/register-customer";
        const response = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
          contactNo,
        });
        const responseId = response.data.data.id; // Capture the response ID here

        setUserId(responseId);
        setId(responseId);

        generateOTP(responseId); // Pass the response ID here
      } catch (error) {
        console.error("Error registering:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const generateOTP = async (responseId: string) => {
    setLoading(true);
    try {
      if (!responseId || !email) {
        alert("Missing userId or email");
        setLoading(false);
        return;
      }

      const url =
        "https://stylesync-backend-test.onrender.com/customer/customer/generate-otp";
      const response = await axios.put(url, {userId:responseId, email});

      if (response.status === 200) {
        const userInput = prompt("Enter OTP in your email", "");
        if (userInput !== null) {
          const verifyUrl =
            "https://stylesync-backend-test.onrender.com/customer/customer/verified-email";
          const verifyResponse = await axios.put(verifyUrl, {
            userId: responseId,
            otp: userInput,
            email:email
          });

          if (verifyResponse.status === 200) {
            setIsVerified(true);
            alert("Logged in successfully");
            setIsLogin(true);
            setOpen(false);
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

  return (
    <Modal
      open={open && !isLogin}
      onClose={handleClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box sx={modalStyle}>
        {regMode ? (
          <form onSubmit={handleSubmit2}>
            <div style={{ fontWeight: "bold" }}>Register to StyleSync</div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <InputField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Contact Number"
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              style={{
                height: 40,
                width: 350,
                marginTop: 40,
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}
              type="submit"
              value="Register"
            />
            <div
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: 14,
                marginTop: 15,
                cursor: "pointer",
              }}
              onClick={() => setRegMode(false)}
            >
              Already Have An Account? Login
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between items-center">
              <div style={{ fontWeight: "bold" }}>Login to StyleSync</div>
              <button
                className="text-black focus:outline-none"
                onClick={handleClose}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              style={{
                height: 40,
                width: 350,
                marginTop: 40,
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}
              type="submit"
              value="Login"
            />
            <div
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: 14,
                marginTop: 15,
                cursor: "pointer",
              }}
              onClick={() => setRegMode(true)}
            >
              Don’t Have An Account? Create Account
            </div>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default LoginModal;
