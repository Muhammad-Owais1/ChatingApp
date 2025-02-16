// Marking this component as a client-side component
"use client";

import Nav from "@/components/Nav";
import { AuthProvider, useAuth } from "@/context/AuthContext"; // useAuth hook
import "./globals.css";
import { useState } from "react";

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, login, signup, contacts }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <AuthProvider>
          <MainLayout contacts={contacts} signup={signup} login={login}>
            {children}
          </MainLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

const MainLayout = ({ children, login, signup, contacts }) => {
  const { userInfo, setUserInfo } = useAuth();
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <div>
      <Nav haveAccount={haveAccount} setHaveAccount={setHaveAccount} />
      <div className="flex flex-col items-center justify-center">
        {children}
        {!userInfo && haveAccount
          ? login
          : !userInfo && !haveAccount
          ? signup
          : contacts}
        {!userInfo && (
          <button
            className="mt-6 font-semibold text-sm text-white"
            onClick={() => setHaveAccount(!haveAccount)}
          >
            {!haveAccount ? (
              <p>Already have account.</p>
            ) : (
              <p>Create an account.</p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
