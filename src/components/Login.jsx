import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/feed"); // Redirect to /feed upon successful login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
  <div className="bg-white p-8 rounded shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-6">Login</h2>
    <div className="mb-4">
      <label htmlFor="email" className="block font-medium mb-1">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-indigo-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block font-medium mb-1">
        Password:
      </label>
      <input
        type="password"
        id="password"
        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-indigo-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button
      className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      onClick={handleLogin}
    >
      Login
    </button>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
</div>

  );
};

export default Login;
