import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => console.log(response.text()))
      .then((message) => {
        setMessage(message);
      });
  });
  return (
    <div className="App">
      {message}
      hi
    </div>
  );
}

export default App;
