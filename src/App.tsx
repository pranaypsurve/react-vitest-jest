import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react pranay" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <WebRTCComponent /> */}
      <button title="count is" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>
        <button onClick={() => setText("hello")}>Click</button>
        <h2>{text}</h2>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          readOnly
        />
      </div>
    </>
  );
}

export default App;
