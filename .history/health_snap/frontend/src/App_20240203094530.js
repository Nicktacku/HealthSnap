import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("hello");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("hi");
  };
  return (
    <div className="App">
      <p>{title}</p>
    </div>
  );
}

export default App;
