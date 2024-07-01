import articleImage1 from "../../assets/images 1.png";
import articleImage2 from "../../assets/image2.png";
import next from "../../assets/next.png";
import down from "../../assets/down.png"
import React from "react";

export function ArticlePage() {
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
          Articles
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f5f3",
              width: "70%",
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <h4>
                  Trendsetting Tresses: Exploring Fresh Hair Styles for the
                  Modern You
                </h4>
                <p>
                  Embark on a journey of self-expression and creativity as we
                  delve into the captivating world of hairstyling in our latest
                  article, "Trendsetting Tresses." Uncover the secrets behind
                  the hottest new hair styles that are making waves in the
                  fashion scene, offering a perfect blend of sophistication and
                  bold individuality.
                </p>
              </div>
              <img
                style={{
                  width: "30%",
                  height: "40%",
                  margin: 20,
                }}
                src={articleImage1}
                alt="article one"
              />
            </div>
            <p>
              From the timeless charm of the classic bob to the avant-garde
              allure of asymmetrical cuts, our exploration goes beyond the
              ordinary to showcase diverse options for every personality and
              style preference. Discover the transformative power of vibrant
              colors, intricate braids, and textured layers, allowing you to
              express your unique identity through the canvas of your hair.
            </p>
            <p>
              In this article, we not only celebrate the aesthetics of new hair
              trends but also provide practical insights on how to achieve and
              maintain these styles. From tips on selecting the right color
              palette for your skin tone to advice on the best products for
              maintaining healthy locks, "Trendsetting Tresses" is your
              comprehensive guide to navigating the ever-evolving landscape of
              modern hair fashion.
            </p>
          </div>
          <div style={{}}>
            <div
              style={{
                marginLeft: 20,
                backgroundColor: "#f8f5f3",
                padding: 10,
                height: "78%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "60%",
                  height: "65%",
                  margin: 20,
                }}
                src={articleImage2}
                alt="article one"
              />
              <h4
                style={{
                  width: "70%",
                }}
              >
                Trendsetting Tresses: Exploring Fresh Hair Styles for the Modern
                You
              </h4>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <a
                  style={{
                    color: "#844704",
                    textDecoration: "none",
                  }}
                  href="agds"
                >
                  Keep Reading
                </a>
                <img src={next} alt="click here" />
              </div>
            </div>
            <div style={{
                marginLeft: 20,
                marginTop: 20,
                backgroundColor: "#bda092",
                padding: 10,
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <a style={{
                    color: "#fdfdfd"
                }} href="njand">Read More Articles</a>
              <img src={down} alt="click here" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
