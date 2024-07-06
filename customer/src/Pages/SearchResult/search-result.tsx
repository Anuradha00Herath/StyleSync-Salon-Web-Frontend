import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import SearchBar from "../../Components/AvailableSalonComponent/search-salon";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import React from "react";

export default function SearchResultPage() {
  return (
    <div>
      <div>
        {/* <NavigationBar /> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: 600,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 350,
          }}
        >
          <div>
            <h1>Hair Service</h1>
            <p>
              Enter your dates and choose from 5,000 salons to get your service!
            </p>
            <SearchBar/>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4>25 Results Among 5000 Salons</h4>
          </div>
          <div
            style={{ flexWrap: "wrap", display: "flex", flexDirection: "row" }}
          >
            {/* <SalonBlock />
            <SalonBlock />
            <SalonBlock />
            <SalonBlock />
            <SalonBlock />
            <SalonBlock />
            <SalonBlock />
            <SalonBlock /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
