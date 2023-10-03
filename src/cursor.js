const circuit = document.getElementById("root");

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  circuit.style.left = x + "px";
  circuit.style.top = y + "px";
  circuit.style.opacity = 1;
});

// Hide the circuit after a delay when the mouse stops moving
let timeout;
document.addEventListener("mousemove", function () {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    circuit.style.opacity = 0;
  }, 1000);
});
