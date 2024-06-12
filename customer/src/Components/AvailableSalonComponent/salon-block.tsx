import salon from "../../assets/salon.jpg";

export function SalonBlock() {
  return (
    <div
      style={{
        width: "46%",
        backgroundColor: "#f8f5f3",
        marginTop: 20,
        paddingLeft: 10,
        paddingBottom: 10,
        marginLeft: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "40%",
            height: "100%",
          }}
          src={salon}
          alt="salon"
        />
        <div
          style={{
            marginLeft: 20,
            width: "55%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4>Salon Name</h4>
            <p
              style={{
                fontSize: 12,
              }}
            >
              14 Follwers
            </p>
          </div>
          <div
            style={{
              marginTop: -25,
            }}
          >
            <p>Opens at 9.00 - 17.00</p>
            <p>No. 324, Chatham street, Colombo 7.</p>
            <p>Male Haircuts, Beard Shaving, Head Shave.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div
              style={{
                height: 30,
                width: 100,
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                style={{
                  fontSize: 12,
                  color: "white",
                }}
                href="http://localhost:3000"
              >
                Follow
              </a>
            </div>
            <div
              style={{
                height: 30,
                width: 100,
                marginRight: 10,
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                style={{
                  fontSize: 12,
                  color: "white",
                }}
                href="http://localhost:3000/make-appointment"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
