import google from "../../assets/google.png";
import apple from "../../assets/apple-filled.png";
import facebook from "../../assets/facebook.png";

export default function Login() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 120,
        }}
      >
        <div>
          <h2>Login to StyleSync</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <form>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                User Name <br />
                <input
                  style={{
                    border: 0,
                    borderBottom: "2px solid",
                    height: 40,
                    width: 350,
                    outline: "none",
                  }}
                  type="text"
                />
              </label>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                }}
              >
                Enter Password <br />
                <input
                  style={{
                    border: 0,
                    borderBottom: "2px solid",
                    height: 40,
                    width: 350,
                    outline: "none",
                  }}
                  type="password"
                />
              </label>
              <input
                style={{
                  height: 40,
                  width: 350,
                  marginTop: 40,
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                }}
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <div
            style={{
              marginLeft: 40,
              marginRight: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                height: 100,
                width: 2,
              }}
            ></div>
            <p>or</p>
            <div
              style={{
                backgroundColor: "black",
                height: 100,
                width: 2,
              }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: 350,
                height: 60,
                border: "1px solid",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 8,
                }}
                src={google}
                alt="google"
              />
              <a style={{ color: "black", textDecoration: "none" }} href="abs">
                <h4>Continue with Google</h4>
              </a>
            </div>
            <div
              style={{
                width: 350,
                height: 60,
                marginTop: 20,
                border: "1px solid",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 8,
                }}
                src={apple}
                alt="apple"
              />
              <a style={{ color: "black", textDecoration: "none" }} href="abs">
                <h4>Continue with Apple</h4>
              </a>
            </div>
            <div
              style={{
                width: 350,
                height: 60,
                marginTop: 20,
                border: "1px solid",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 8,
                }}
                src={facebook}
                alt="facebook"
              />
              <a style={{ color: "black", textDecoration: "none" }} href="abs">
                <h4>Continue with Facebook</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <a
          style={{
            color: "black",
          }}
          href="http://localhost:3000/register"
        >
          Don’t Have An Account? Create Account
        </a>
      </div>
    </div>
  );
}
