import React, { useState, useEffect } from "react";

function MouseTest() {
  console.log("Component re-rendered");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("Mouse moved:", event.clientX, event.clientY);
      setMousePosition((prevState) => ({
        x: event.clientX,
        y: event.clientY,
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      Mouse Position: x = {mousePosition.x}, y = {mousePosition.y}
    </div>
  );
}

export default MouseTest;
