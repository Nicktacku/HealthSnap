import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("hello");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("hi");

    const response = await fetch("http://127.0.0.1:8000/symptom/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: ["u1", "u2", "cc4"] }),
    });

    const data = await response.json();
  };
  return (
    <div className="App">
      <p>{title}</p>
      <p>{data}</p>
      <form onSubmit={handleSubmit}>
        <button>Press me</button>
      </form>
    </div>
  );
}

export default App;
