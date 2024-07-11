import { useNavigate } from "react-router-dom";
import salon from "../../assets/salon.jpg";
import React from "react";

type Props = {
  name: String;
  line1: String;
  line2: String;
  city: String;
  contactNo: String;
  openHours: String;
  image: string;
};

export function Description(props: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <img
            style={{
              height: 200,
              width: 250,
            }}
            src={props.image}
            alt="salon"
          />
          <div
            style={{
              width: "33%",
              marginLeft: 10,
            }}
          >
            <h2>{props.name}</h2>
            <p>
              Manage your salon effortlessly with our app: book appointments,
              track services, and connect with staff seamlessly.
            </p>
          </div>
          <div
            style={{
              width: 2,
              height: 200, // Fixed height instead of percentage
              backgroundColor: "black",
            }}
          ></div>
          <div>
            <p></p>
            <p>
              {props.line1}, {props.line2}, {props.city}
            </p>
            <p>{props.contactNo}</p>
            <p>{props.openHours}</p>
            {/* <div
              style={{
                backgroundColor: "black",
                width: 150,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigate("/map-view")}
            >
              <span
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Map
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
