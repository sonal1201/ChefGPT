// lib/checkUser.js

import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export const checkUser = async () => {
  try {
    const { getToken } = await auth();
    const token = await getToken();

    if (!token) return null;

    const res = await axios.post(
      "http://localhost:3001/api/v1/user/",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
