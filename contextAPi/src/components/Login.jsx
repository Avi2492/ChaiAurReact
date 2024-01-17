import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="justify-center text-center p-4 m-4">
      <h2 className="bg-green-300 p-4 m-4 text-black text-3xl">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="p-2 m-2 text-black"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="p-2 m-2 text-black"
      />
      <button
        onClick={handleSubmit}
        className="p-2 m-2 bg-blue-600 rounded-lg hover:bg-blue-950 text-white"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
