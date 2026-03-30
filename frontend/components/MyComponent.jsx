"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";

const MyComponent = () => {
  const { getToken } = useAuth();

  const getUser = async () => {
    try {
      const token = await getToken();

      const res = await fetch("http://localhost:3001/api/v1/user/protected", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={getUser}>Get User</button>;
};

export default MyComponent;
