import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import TopNavbar from "./Components/Navbar/TopNavbar";
import CustomCursor from "./CustomCursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      {/* <TopNavbar /> */}
      <CustomCursor/>
      <Home />
    </>
  );
}

export default App;
