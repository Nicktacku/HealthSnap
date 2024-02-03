import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("hello");
  const [datas, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle("hi");

    const response = await fetch("http://127.0.0.1:8000/symptom/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: ["u1", "u2", "cc4"] }),
    });

    const data = await response.json();
    console.log(data.result);
    // setData(data.result);
  };

  return (
    <div className="App">
      <p>{title}</p>
      {Object.entries(datas).forEach((i) => {
        // key: student[0]
        // value: student[1]
        <p>{i}</p>;
        // <p>Student: {data[0]} is {data[1].age} years old</p>
      })}
      <form onSubmit={handleSubmit}>
        <button>Press me</button>
      </form>
    </div>
  );
}

export default App;
