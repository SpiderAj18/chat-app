import React, { useState } from "react";
import toast from "react-hot-toast";
import {  useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    console.log("success",success)
    if (!success) return;
    

    try {
      const res = await fetch("http://localhost:5050/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);

      // saved to local-Storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //Context
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields ");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 character");
    return false;
  }

  return true;
}

