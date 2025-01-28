import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("");
    console.log("Submitted: " + username);
  };

  return (
    <div className="text-white h-screen w-screen bg-gray-800 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col items-center justify-center p-40 gap-5"
      >
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          className="text-black text-xl bg-gray-300 border-1 focus:outline-none rounded px-3 py-4"
          placeholder="Enter your name"
        />
        <button className="px-10 py-3 text-xl rounded border-1 focus:outline-none focus:border-emerald-700 hover:bg-emerald-500/90 bg-emerald-500/80 transition-all duration-200">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
