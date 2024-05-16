import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [incrementButtonColor, setIncrementButtonColor] = useState(null);
  const [decrementButtonColor, setDecrementButtonColor] = useState(null);

  function increment() {
    setNumber(number + 1);
    setIncrementButtonColor("green");
    setTimeout(() => {
      setIncrementButtonColor(null);
    }, 50); // Change back to default color after 500 milliseconds
  }

  function decrement() {
    setNumber(number - 1);
    setDecrementButtonColor("red");
    setTimeout(() => {
      setDecrementButtonColor(null);
    }, 50); // Change back to default color after 500 milliseconds
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #4b6cb7, #182848)",
      padding: "20px"
    }}>
      <h1 style={{ marginBottom: "20px", color: "white" }}>Count - {number}</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ backgroundColor: incrementButtonColor, color: incrementButtonColor ? "white" : "black", marginRight: "10px", borderRadius: "5px", padding: "10px 20px", border: "none" }} onClick={increment}>Increment</button>
        <button style={{ backgroundColor: decrementButtonColor, color: decrementButtonColor ? "white" : "black", borderRadius: "5px", padding: "10px 20px", border: "none" }} onClick={decrement}>Decrement</button>
      </div>


    </div>
  );
}
