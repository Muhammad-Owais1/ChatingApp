"use client";
import { useActionState, useState } from "react";
import axios from "axios";

export default function page() {
  const [message, setMessage] = useState("");

  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      try {
        const response = await axios.post(
          "http://localhost:9999/api/auth/signin",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(response.data);
        setMessage(response.data.message);
      } catch (err) {
        console.log(err?.response?.data);
        setMessage(err.response?.data?.message || "An error occurred.");
      }
    }
  );

  return (
    <>
      <div className="h-full w-screen flex justify-center items-center">
        <form
          className="mt-16 flex flex-col items-center gap-10"
          action={submitAction}
        >
          <h1 className="font-bold text-xl">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="border-[1px] border-black"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-[1px] border-black"
            name="password"
          />
          <button
            className="bg-slate-800 py-2 px-7 text-white"
            onClick={() => setMessage("")}
          >
            {isPending ? "loading..." : "Login"}
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
}
