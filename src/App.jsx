import { useState, useEffect } from "react";
import "./App.css";

import PortfolioPage from "./components/PortfolioPage";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const circuitElement = document.querySelector(".circuit");
    if (circuitElement) {
      circuitElement.style.left = `${mousePosition.x}px`;
      circuitElement.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  return (
    <>
      <div className="circuit"></div>
      <PortfolioPage />
    </>
  );
}

export default App;
