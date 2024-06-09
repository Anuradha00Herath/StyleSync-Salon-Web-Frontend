import { ServiceCategories } from "../../Components/HomeComponent/home-service-categories";

import hairImage from "../../assets/hair.png";
import nailImage from "../../assets/nail.png";
import facialImage from "../../assets/facial.png";

export function ServicesPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Our Services
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#f8f5f3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <ServiceCategories
            image={hairImage}
            imgAlt={"hair"}
            serviceType={"Hair Service"}
            count={524}
          />
          <ServiceCategories
            image={nailImage}
            imgAlt={"hair"}
            serviceType={"Nail Service"}
            count={254}
          />
          <ServiceCategories
            image={facialImage}
            imgAlt={"hair"}
            serviceType={"Facials"}
            count={155}
          />
        </div>
      </div>
    </div>
  );
}
