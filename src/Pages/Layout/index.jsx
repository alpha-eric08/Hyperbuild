import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Layout() {
  return (
    <main className="w-auto h-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;