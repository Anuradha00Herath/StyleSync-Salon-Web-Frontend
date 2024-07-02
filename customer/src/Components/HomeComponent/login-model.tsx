import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
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
  setOpen: any;
  setUserId:any
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose, setOpen, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name,setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [regMode, setRegMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!email.trim()) {
      setError("*Email field is required");
      isValid = false;
    } else {
      setError("");
    }
    if (!password.trim()) {
      setError("*Password field is required");
      isValid = false;
    } else if (!/^(?=.*\d{2,}).{8,}$/.test(password)) {
      setError(
        "*Password must be at least 8 characters and contain at least 2 digits"
      );
      isValid = false;
    } else {
      setError("");
    }
    return isValid;
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (validateInputs()) {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/customer/customer/login-customer";
        const response = await axios.post(url, {
          email,
          password,
        });
        console.log(response.data.data);
        setUserId(response.data.data.id);
        alert("Logged in successfully");
        setOpen(false);
      } catch (error) {
        console.error("Error logging in:", error);
        setError("Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Log out the user on refresh
    googleLogout();
  }, []);

  const validateInputs2 = () => {
    let isValid = true;

    if (!name.trim()) {
      setError("*Name field is required");
      isValid = false;
      alert("Name field is required");
    } else {
      setError("");
    }
    if (!email.trim()) {
      setError("*Email field is required");
      isValid = false;
      alert("Email field is required");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setError("*Invalid email format");
      isValid = false;
      alert("Invalid email format");
    } else {
      setError("");
    }
    if (!password.trim()) {
      setError("*Password field is required");
      isValid = false;
      alert("Password field is required");
    } else if (!/^(?=.*\d{2,}).{8,}$/.test(password)) {
      setError(
        "*Password must be at least 8 characters and contain at least 2 digits"
      );
      isValid = false;
      alert(
        "Password must be at least 8 characters and contain at least 2 digits"
      );
    } else {
      setError("");
    }
    if (!confirmPassword.trim()) {
      setError("*Confirm password field is required");
      isValid = false;
      alert("Confirm password field is required");
    } else if (password !== confirmPassword) {
      setError("*Password and confirm password do not match");
      isValid = false;
      alert("Password and confirm password do not match");
    } else {
      setError("");
    }
    return isValid;
  };

  const handleSubmit2 = async (event: any) => {
    event.preventDefault(); 
    if (validateInputs2()) {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/customer/customer/register-customer";
        const response = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
          contactNo
        });

        console.log(response.data.data);
        setUserId(response.data.data.id);
        alert("Registered Successfully");
        setOpen(false)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
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
          <div>
            <div style={{ fontWeight: "bold" }}>Register to StyleSync</div>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Name <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Email <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Contact Number <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Password <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Confirm Password <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

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
              onClick={handleSubmit2}
            />
            <div
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: 14,
                marginTop: 15,
                cursor:"pointer"
              }}
              onClick={() => setRegMode(false)}
            >
              Already Have An Account? Login
            </div>
            <div
              style={{
                marginTop: 20,
              }}
            >
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontWeight: "bold" }}>Login to StyleSync</div>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Email <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              Password <br />
              <input
                style={{
                  border: 0,
                  borderBottom: "2px solid",
                  height: 40,
                  width: 350,
                  outline: "none",
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

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
              onClick={handleSubmit}
            />
            <div
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: 14,
                marginTop: 15,
                cursor:"pointer"
              }}
              onClick={() => setRegMode(true)}
            >
              Don’t Have An Account? Create Account
            </div>
            <div
              style={{
                marginTop: 20,
              }}
            >
            </div>
            <div
              style={{
                marginTop: 20,
              }}
            >
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default LoginModal;
