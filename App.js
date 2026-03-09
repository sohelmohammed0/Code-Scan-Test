import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleGreet = () => {
    if (name.trim() !== "sohel") {
      setGreeting(`Hello, ${name}! Welcome to the app.`);
    } else {
      setGreeting("Please enter your name.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Greeting App</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleGreet}
        style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
      >
        Greet
      </button>
      {greeting && <p style={{ marginTop: "20px", fontSize: "18px" }}>{greeting}</p>}
    </div>
  );
}

export default App;

/* Just a test*/