import Button from "@mui/material/Button";
import Team from "./assets/Team.png";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row-reverse",
        margin: "auto",
      }}
    >
      <img src={Team} alt="team" style={{ height: "50rem", width: "50rem" }} />
      <di
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "5rem",
        }}
      >
        <h1 style={{ fontSize: "80px", color: "#006f90" }}>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </p>
        <Button
          variant="contained"
          style={{
            width: "200px",
            height: "48px",
          }}
        >
          Read More
        </Button>
      </di>
    </div>
  );
}

export default App;
