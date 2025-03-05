import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true); // Toggle visibility

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setVisible(!visible)} style={{ marginBottom: "10px" }}>
        {visible ? "Hide Counter" : "Show Counter"}
      </button>

      {visible && (
        <div>
          <h2>Counter: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
            Decrement
          </button>
          <button onClick={() => setCount(0)} style={{ marginLeft: "10px", backgroundColor: "red" }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Counter;
