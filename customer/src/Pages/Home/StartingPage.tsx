import image from "../../assets/home.jpg";

export function StartingPage(){
    return(
        <div>        <div
        style={{
          height: 650,
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#c9a899",
            width: "60%",
            height: "100%",
          }}
        >
          <div
            style={{
              margin: 100,
            }}
          >
            <p
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              Discover Your Signature Style: Find Your Perfect Salon
              Experience for Ultimate Beauty and Wellness.
            </p>
            <p>
              Welcome to our chic online haven where beauty meets
              sophistication! Explore our salon web page for an exclusive
              journey into the world of premier beauty and wellness. From
              expert stylists to rejuvenating spa treatments, discover a
              personalized sanctuary tailored just for you. Uncover the latest
              trends, book your next appointment, and embark on a
              transformative experience that transcends ordinary beauty.
              Elevate your style, elevate your self – because you deserve
              nothing but the best. Your journey to radiance begins here!
            </p>
            <div
              style={{
                backgroundColor: "#2e2528",
                height: 40,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                style={{
                  color: "#fdfdfd",
                  textDecoration: "none",
                }}
                href="abd.com"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fdfdfd",
            width: "40%",
            height: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={image}
            alt="home"
          />
        </div>
      </div></div>
    )
}