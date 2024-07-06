import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import SearchBar from "../../Components/AvailableSalonComponent/search-salon";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SalonBlock } from "../../Components/AvailableSalonComponent/salon-block";

export default function SearchResultPage() {
  const location = useLocation();
  const { key, userId } = location.state;
  const [loading, setLoading] = useState(false);
  const [blocks, setBlocks] = useState([]);
  console.log(key);

  const Result = async () => {
    if (!key) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/search-salon",
        { params: { key } }
      );
      console.log(response.data);
      setBlocks(response.data.data); // Assuming the response contains the salons in `data`
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Result();
  }, [key]);

  return (
    <div>
      <div>
      <NavigationBar userId={userId}/>
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
            <h1>Search Results</h1>
            <p>
              Enter your dates and choose from 5,000 salons to get your service!
            </p>
            <SearchBar userId={userId} />
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
            <h4>{blocks.length} Results Among 5000 Salons</h4>
          </div>
          <div style={{ flexWrap: "wrap", display: "flex", flexDirection: "row" }}>
            {blocks.map((block, index) => (
              <SalonBlock block={block} key={index} userId={userId} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
