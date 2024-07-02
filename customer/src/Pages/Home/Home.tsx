import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/HomeComponent/footer";
import { HomeNavigationBar } from "../../Components/HomeComponent/home-navigation-bar";
import { ArticlePage } from "./ArticlePage";
import { FAQsPage } from "./FAQsPage";
import { SendMessage } from "./SendMessage";
//import { Footer } from "../../Components/HomeComponent/footer";
// import { SendMessage } from "./SendMessage";

import { ServicesPage } from "./ServicesPage";
import { StartingPage } from "./StartingPage";
import LoginModal from "../../Components/HomeComponent/login-model";


export default function HomePage() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);
  const [userId,setUserId] = useState();

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <div>
        <HomeNavigationBar/>
      </div>
      <div id="home">
        <StartingPage userId={userId}/>
      </div>
      <div id="service">
        <ServicesPage userId={userId}/>
      </div>
      <div id="article">
        <ArticlePage />
      </div>
      <div id="faqs">
        <FAQsPage />
      </div>
      {/* <div id="message">
        <SendMessage />
      </div>
      <div
        id="footer"
        style={{
          marginTop: 70,
        }}
      >
        <Footer />
      </div> */}
      <LoginModal open={isLoginModalOpen} setOpen={setLoginModalOpen} handleClose={handleCloseLoginModal} setUserId={setUserId}/>
    </>
  );
}
