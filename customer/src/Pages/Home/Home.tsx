import { Footer } from "../../Components/HomeComponent/footer";
import { HomeNavigationBar } from "../../Components/HomeComponent/home-navigation-bar";
import { ArticlePage } from "./ArticlePage";
import { FAQsPage } from "./FAQsPage";
import { SendMessage } from "./SendMessage";

import { ServicesPage } from "./ServicesPage";
import { StartingPage } from "./StartingPage";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div>
        <HomeNavigationBar />
      </div>
      <div id="home">
        <StartingPage />
      </div>
      <div id="service">
        <ServicesPage />
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
      </>
  );
}
