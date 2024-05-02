import React from "react";
import logo from "../images/logo.png"


function Header() {

  return (
    <div className="mainLanding w-screen h-dvh w-auto">
      <div className="flex justify-center">
      <img src={logo} alt="Logo" className="h-32 w-32"/>
      </div>
    </div>
  );
}

export default Header;
