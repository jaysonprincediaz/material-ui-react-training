import logo from "./logo.svg";
import "./App.css";

import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Button variant="contained">Sassy</Button>
    </div>
  );
}

export default App;
