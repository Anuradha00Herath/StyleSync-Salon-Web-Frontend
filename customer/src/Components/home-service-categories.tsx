import React from "react";
import nextImage from "../assets/next.png"

type Props = {
  image: string;
  imgAlt: string;
  serviceType: string;
  count: number;
};
export function ServiceCategories(props: Props) {
  return (
    <div
      style={{
        width: 300,
        height: 350,
        backgroundColor: "white",
        margin: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: 70,
          height: 70,
          marginBottom: 30,
        }}
        src={props.image}
        alt={props.imgAlt}
      />
      <p>{props.serviceType}</p>
      <p>{props.count} Salons Available</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <a
          style={{
            color: "#844704",
            textDecoration: "none",
          }}
          href="abs"
        >
          Make an appointment
        </a>
        <img src={nextImage} alt="click here"/>
      </div>
    </div>
  );
}
