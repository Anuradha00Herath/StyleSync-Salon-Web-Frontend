export function SendMessage() {
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
          Send us a Message
        </p>
      </div>
      <div
        style={{
          width: " 100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: " flex",
            width: "50%",
            justifyContent: "center",
          }}
        >
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: " 100%",
              }}
            >
              <label>
                First Name
                <br />
                <input
                  style={{
                    width: 350,
                    marginRight: 20,
                    height: 40,
                  }}
                  type="text"
                />
              </label>
              <label>
                Last Name
                <br />
                <input
                  style={{
                    width: 350,
                    height: 40,
                  }}
                  type="text"
                />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <label
                style={{
                  marginTop: 20,
                }}
              >
                Email Address
                <br />
                <input
                  style={{
                    width: "99%",
                    height: 40,
                  }}
                  type="text"
                />
              </label>
              <label
                style={{
                  marginTop: 20,
                }}
              >
                Message
                <br />
                <input
                  style={{
                    width: "99%",
                    height: 40,
                  }}
                  type="text"
                />
              </label>
            </div>
            <div
              style={{
                display: " flex",
                flexDirection: "row-reverse",
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: "black",
                  marginTop: 20,
                  display: " flex",
                  justifyContent: " center",
                  alignItems: " center"
                }}
              >
                <a style={{
                    color: " #fdfdfd",
                    textDecoration: "none"
                }} href="abdbd">Send</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
