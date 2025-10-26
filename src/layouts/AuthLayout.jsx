import React from "react";
import Nabvar from "../components/Nabvar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-4">
        <Nabvar />
      </header>
      <main className="w-11/12 mx-auto py-4">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
