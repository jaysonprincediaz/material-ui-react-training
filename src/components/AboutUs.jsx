import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

import Team from "../assets/Team.png";

function AboutUs() {
  return (
    <Stack direction="row" alignItems="center" height="100vh">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginRight: "40%",
        }}
      >
        <h1 style={{ fontSize: "80px", color: "#006f90" }}>ABOUT US</h1>
        <p style={{ textAlign: "center", width: "90%" }}>
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
            marginTop: "3rem",
            fontSize: "20px",
          }}
        >
          Read More
        </Button>
      </div>
      <img
        src={Team}
        alt="team"
        style={{
          height: "50rem",
          width: "50rem",
          position: "absolute",
          marginLeft: "45%",
        }}
      />
    </Stack>
  );
}

export default AboutUs;
