import salon from "../../assets/salon.jpg";
type Props = {
  name: String,
  line1: String,
  line2: String,
  city: String,
  contactNo: String,
  openHours:String
};

export function Description(props:Props) {
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
            src={salon}
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
              Small description about their salon. bla bkanskc hja
              jhcjahabxsabch nacsbakjha knasjkcvahk babc nabab khabdcsa
              kjhcacbsajkcnsan.
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
            <p>19 Followers</p>
            <p>{props.line1}, {props.line2}, {props.city}</p>
            <p>{props.contactNo}</p>
            <p>{props.openHours}</p>
            <div
              style={{
                backgroundColor: "black",
                width: 150,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="hcjsd"
              >
                View Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
