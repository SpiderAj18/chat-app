import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="flex p-4 justify-center items-center">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/login" element={<Login />}>
          Home
        </Route>
        <Route
          path="/register"
          element={authUser ? <Navigate to="/" /> : <Register />}
        >
          Home
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
