import contact from "../../assets/telephone.png";
import email from "../../assets/email.png";
import googlePlay from "../../assets/google-play.png";
import apple from "../../assets/apple.png"
import React from "react";

export function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: 200,
        backgroundColor: "#c9a899",
        display: " flex",
        justifyContent: "center",
        marginTop:40
      }}
    >
      <div
        style={{
          width: " 80%",
          display: " flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4>Contact Information</h4>
          <div
            style={{
              display: " flex",
              flexDirection: "row",
              alignItems: " center",
            }}
          >
            <img
              style={{
                height: 25,
                width: 25,
                marginRight: 5,
              }}
              src={contact}
              alt="contact"
            />
            <p>+94567890876</p>
          </div>
          <div
            style={{
              display: " flex",
              flexDirection: "row",
              alignItems: " center",
            }}
          >
            <img
              style={{
                height: 25,
                width: 25,
                marginRight: 5,
              }}
              src={email}
              alt="contact"
            />
            <p>stylesync@gmail.com</p>
          </div>
        </div>
        <div>
          <h4>Overview</h4>
          <div style={{
            display: "flex",
            flexDirection: "row",
          }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
              <a style={{
                color: "black",
                textDecoration: "none",
              }} href="http://localhost:3000/home#home">Home</a>
              <a style={{
                color: "black",
                textDecoration: "none",
                marginTop: 8
              }} href="http://localhost:3000/home#service">Services</a>
              <a style={{
                color: "black",
                textDecoration: "none",
                marginTop: 8
              }} href="http://localhost:3000/home#article">Articles</a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20
            }}>
              <a style={{
                color: "black",
                textDecoration: "none"
              }} href="http://localhost:3000/home#faqs">FAQs</a>
              <a style={{
                color: "black",
                textDecoration: "none",
                marginTop: 8
              }} href="http://localhost:3000/home#message">Contact Us</a>
            </div>
          </div>
        </div>
        <div>
          <h4>Get the mobile app</h4>
          <div style={{
            width: 150,
            height: 40,
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}>
            <img style={{
                width: 25,
                height: 25
            }} src={googlePlay} alt="google"/>
            <div style={{
                marginLeft: 10
            }}>
                <p style={{
                    fontSize: 12
                }}>Get it on<br/>
                <b style={{
                    fontSize: 14
                }}>Google Play</b>
                </p>
                
            </div>
          </div>
          <div style={{
            width: 150,
            height: 40,
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20
          }}>
            <img style={{
                width: 25,
                height: 25
            }} src={apple} alt="apple"/>
            <div style={{
                marginLeft: 10
            }}>
                <p style={{
                    fontSize: 12
                }}>Download on the<br/>
                <b style={{
                    fontSize: 14
                }}>App Store</b>
                </p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
