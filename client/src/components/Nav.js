"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { userInfo } = useAuth();

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
            <button className="bg-black text-white font-semibold text-xs rounded-sm py-2 px-4">
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
