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
  setOpen: (open: boolean) => void;
  setUserId: (id: any) => void;
  userId: string | null;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose, setOpen, setUserId, userId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [regMode, setRegMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    googleLogout();
  }, []);

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
      setError("Password must be at least 8 characters and contain at least 2 digits");
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
        const url = "https://stylesync-backend-test.onrender.com/customer/customer/login-customer";
        const response = await axios.post(url, { email, password });
        setUserId(response.data.data.id);
        alert("Logged in successfully");
        setIsLogin(true);
        setOpen(false);
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
      setError("Password must be at least 8 characters and contain at least 2 digits");
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
        const url = "https://stylesync-backend-test.onrender.com/customer/customer/register-customer";
        const response = await axios.post(url, { name, email, password, confirmPassword, contactNo });
        setUserId(response.data.data.id);
        alert("Registered Successfully");
        setIsLogin(true);
        setOpen(false);
      } catch (error) {
        console.error("Error registering:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal open={open && !isLogin} onClose={handleClose} aria-labelledby="login-modal-title" aria-describedby="login-modal-description">
      <Box sx={modalStyle}>
        {regMode ? (
          <form onSubmit={handleSubmit2}>
            <div style={{ fontWeight: "bold" }}>Register to StyleSync</div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Name <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Email <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Contact Number <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Password <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Confirm Password <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <input style={{ height: 40, width: 350, marginTop: 40, backgroundColor: "black", color: "white", cursor: "pointer" }} type="submit" value="Register" />
            <div style={{ color: "black", fontWeight: 500, fontSize: 14, marginTop: 15, cursor: "pointer" }} onClick={() => setRegMode(false)}>
              Already Have An Account? Login
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between items-center">
              <div style={{ fontWeight: "bold" }}>Login to StyleSync</div>
              <button className="text-black focus:outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Email <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
              Password <br />
              <input style={{ border: 0, borderBottom: "2px solid", height: 40, width: 350, outline: "none" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input style={{ height: 40, width: 350, marginTop: 40, backgroundColor: "black", color: "white", cursor: "pointer" }} type="submit" value="Login" />
            <div style={{ color: "black", fontWeight: 500, fontSize: 14, marginTop: 15, cursor: "pointer" }} onClick={() => setRegMode(true)}>
              Don’t Have An Account? Create Account
            </div>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default LoginModal;
