import { useLocation } from "react-router-dom";
import { NavigationBar } from "../../Components/AvailableSalonComponent/navigation-bar";
import { Footer } from "../../Components/HomeComponent/footer";
import background from "../../assets/background.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SalonSet } from "../../Components/AvailableSalonComponent/salon-set";

export default function AvailableSalonPage() {
  const location = useLocation();
  const { serviceType, userId } = location.state;
  const [serviceSet, setServiceSet] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://stylesync-backend-test.onrender.com/customer/customer/show-salons-available-categories"
      );
      console.log(response.data);
      setServiceSet(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    getAllCategories();
  },[]);

  return (
    <div>
      <NavigationBar />
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
            <h1>{serviceType}</h1>
            <p>
              Enter your dates and choose from 5,000 salons to get your service!
            </p>
            <div
              style={{
                paddingTop: 20,
              }}
            >
              <form>
                <input
                  style={{
                    height: 40,
                    width: 180,
                  }}
                  type="text"
                  placeholder="Search salon name or location"
                />
                <input
                  style={{
                    height: 40,
                    width: 180,
                  }}
                  type="date"
                />
                <select
                  style={{
                    height: 40,
                    width: 180,
                  }}
                  id="gender"
                  name="gender"
                  defaultValue="select gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <select
                  style={{
                    height: 40,
                    width: 180,
                  }}
                  id="categories"
                  name="categories"
                  defaultValue="select service"
                >
                  <option value="Hair Service">Male Hair Cut</option>
                  <option value="Nail Service">Beard Shaving</option>
                </select>

                <input
                  style={{
                    height: 40,
                    width: 180,
                    backgroundColor: "black",
                    color: "white",
                  }}
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
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
          {serviceSet.map((salon, index) => (
            <SalonSet key={index} salon={salon} userId={userId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
