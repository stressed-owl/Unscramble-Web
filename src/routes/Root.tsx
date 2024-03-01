import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#222222]">
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
