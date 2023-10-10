import { useState, useEffect } from "react";
import "./App.css";
import MouseTest from "./components/MouseTest";

import PortfolioPage from "./components/PortfolioPage";

function App() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     console.log("Mouse moved:", event.clientX, event.clientY); // Log raw values
  //     setMousePosition({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //   };

  //   document.body.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const circuitElement = document.querySelector(".circuit");
  //   if (circuitElement) {
  //     circuitElement.style.left = `${mousePosition.x}px`;
  //     circuitElement.style.top = `${mousePosition.y}px`;
  //   }
  // }, [mousePosition]);

  return (
    <>
      <MouseTest />
      {/* <div className="circuit"></div>
      <PortfolioPage /> */}
    </>
  );
}

export default App;
