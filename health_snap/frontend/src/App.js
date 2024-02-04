import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Check Your Symptoms");
  const [datas, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("Results");

    const response = await fetch("http://127.0.0.1:8000/symptom/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: ["u1", "cc4"] }),
    });

    const data = await response.json();
    console.log(data.result);
    setData(data.result);
  };

  return (
    <div className="App">
      <p>{title}</p>
      {Object.keys(datas).map((data) => (
        <p>
          {data}: {datas[data]}%
        </p>
      ))}
      <form onSubmit={handleSubmit}>
        <button>Press me</button>
      </form>
    </div>
  );
}

export default App;
