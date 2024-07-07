import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TempCustomerLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(null);

  const handleLogin = async () => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const userId = query.get("userId");
    try {
      if (!token || !userId) {
        navigate('/', { state: { id } });
      } else {
        const response = await axios.get(
          "https://stylesync-backend-test.onrender.com/customer/customer/tem-customer-login",
          { params: { token, userId } }
        );
        console.log(response.data.data);
        setId(response.data.data);
        navigate('/', { state: { id: response.data.data } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return <div>Logging you in...</div>;
}
