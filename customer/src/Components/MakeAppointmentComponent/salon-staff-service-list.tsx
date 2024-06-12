export function StaffServiceList() {
  return (
    <div
      style={{
        width: "27%",
        height: 200,
        backgroundColor: "white",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <div style={{
        width:"90%"
      }}>
        <div>
          <h5
            style={{
              margin: "5px",
              padding: "0 5px",
            }}
          >
            Select Staff:
          </h5>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              textDecoration: "none",
            }}
            href="jdfns"
          >
            <input
              type="radio"
              id="staff1"
              name="staff1"
              value="Staff Name 1"
            />
            <p
              style={{
                margin: "4px 0",
                padding: "0 5px",
              }}
            >
              Staff 1
            </p>
          </a>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              textDecoration: "none",
            }}
            href="jdfns"
          >
            <input
              type="radio"
              id="staff1"
              name="staff1"
              value="Staff Name 1"
            />
            <p
              style={{
                margin: "4px 0",
                padding: "0 5px",
              }}
            >
              Staff 1
            </p>
          </a>
        </div>
        <hr />
        <div>
          <h5
            style={{
              margin: "5px",
              padding: "0 5px",
            }}
          >
            Select Service:
          </h5>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              textDecoration: "none",
            }}
            href="jdfns"
          >
            <input
              type="radio"
              id="staff1"
              name="staff1"
              value="Staff Name 1"
            />
            <p
              style={{
                margin: "4px 0",
                padding: "0 5px",
              }}
            >
              Staff 1
            </p>
          </a>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              textDecoration: "none",
            }}
            href="jdfns"
          >
            <input
              type="radio"
              id="staff1"
              name="staff1"
              value="Staff Name 1"
            />
            <p
              style={{
                margin: "4px 0",
                padding: "0 5px",
              }}
            >
              Staff 1
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
