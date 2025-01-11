"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { userInfo, setUserInfo } = useAuth();

  const logout = async () => {
    try {
      // Send a POST request to the backend to logout
      const response = await axios.post(
        "http://localhost:9999/api/auth/logout",
        {}, // You can pass additional data if needed, but in this case, it's just the request to logout
        { withCredentials: true } // This ensures that cookies are sent with the request
      );

      // Handle the response if necessary (logging out, redirecting, etc.)
      console.log(response.data.message); // Should log 'Logged out successfully'

      // Optionally clear the userInfo state or redirect the user
      setUserInfo(null); // This clears the user data from context
    } catch (err) {
      console.error("Logout failed:", err?.response?.data);
    }
  };

  return (
    <>
      <div className="w-full h-20 bg-slate-300 flex justify-between items-center px-4">
        {!userInfo ? (
          <div>
            <Link href="/signup">Signup</Link>
            <Link href="/login" className="ml-4">
              Login
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <div>
              <p className="font-semibold uppercase">{userInfo.username}</p>
              <p className="font-semibold text-xs text-slate-500 lowercase">
                {userInfo.email}
              </p>
            </div>
            <button
              className="bg-black text-white font-semibold text-xs rounded-sm py-2 px-4"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
