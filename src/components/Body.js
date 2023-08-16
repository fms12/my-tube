import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Body() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
