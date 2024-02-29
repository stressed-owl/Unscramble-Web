import React from "react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <div className="min-h-[100vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
