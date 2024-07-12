import React, { useState, useEffect } from "react";
import { HomeNavigationBar } from "../../Components/HomeComponent/home-navigation-bar";
import { FAQsPage } from "./FAQsPage";
import { SendMessage } from "./SendMessage";
import { Footer } from "../../Components/HomeComponent/footer";
import { ServicesPage } from "./ServicesPage";
import { StartingPage } from "./StartingPage";
import LoginModal from "../../Components/HomeComponent/login-model";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);
  const [userId, setUserId] = useState(null);
  const location = useLocation();
  const id = location.state?.id || null; // Provide a default value


  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  useEffect(() => {
    if (id) {
      setUserId(id);
      setLoginModalOpen(false);
    }
  }, [id]);

  return (
    <>
      <div>
        <HomeNavigationBar setLoginModalOpen={setLoginModalOpen}/>
      </div>
      <div id="home">
        <StartingPage userId={userId} />
      </div>
      <div id="service">
        <ServicesPage userId={userId} />
      </div>
      <div id="faqs">
        <FAQsPage />
      </div>
      <div id="message">
        <SendMessage />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <LoginModal
        open={isLoginModalOpen}
        setOpen={setLoginModalOpen}
        handleClose={handleCloseLoginModal}
        setUserId={setUserId}
        userId={userId}
      />
    </>
  );
}
