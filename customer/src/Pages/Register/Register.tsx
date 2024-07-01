import google from "../../assets/google.png";
import apple from "../../assets/apple-filled.png";
import facebook from "../../assets/facebook.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
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
  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); 
    if (validateInputs()) {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/customer/customer/register-customer";
        const response = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
        });

        console.log(response.data.data);
        alert("Registered Successfully");
        navigate("/home");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 120,
          }}
        >
          <div>
            <h2>Register to StyleSync</h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>
              <form>
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  User Name <br />
                  <input
                    style={{
                      border: 0,
                      borderBottom: "2px solid",
                      height: 40,
                      width: 350,
                      outline: "none",
                    }}
                    type="text"
                    value={name}
                    onChange={handleChangeName}
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
                    onChange={handleChangeEmail}
                  />
                </label>
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                  }}
                >
                  Enter Password <br />
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
                    onChange={handleChangePassword}
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
                    onChange={handleChangeConfirmPassword}
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
                  onClick={handleSubmit}
                />
              </form>
            </div>
            <div
              style={{
                marginLeft: 40,
                marginRight: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  height: 100,
                  width: 2,
                }}
              ></div>
              <p>or</p>
              <div
                style={{
                  backgroundColor: "black",
                  height: 100,
                  width: 2,
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 350,
                  height: 60,
                  border: "1px solid",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  src={google}
                  alt="google"
                />
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="home"
                >
                  <h4>Continue with Google</h4>
                </a>
              </div>
              <div
                style={{
                  width: 350,
                  height: 60,
                  marginTop: 20,
                  border: "1px solid",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  src={apple}
                  alt="apple"
                />
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="abs"
                >
                  <h4>Continue with Apple</h4>
                </a>
              </div>
              <div
                style={{
                  width: 350,
                  height: 60,
                  marginTop: 20,
                  border: "1px solid",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 8,
                  }}
                  src={facebook}
                  alt="facebook"
                />
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="abs"
                >
                  <h4>Continue with Facebook</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <a
            style={{
              color: "black",
            }}
            href="http://localhost:3000/login"
          >
            Already Have An Account? Login
          </a>
        </div>
      </div>
    </div>
  );
}
