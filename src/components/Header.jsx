import React from "react";
import landing from "../images/header.png"


function Header() {

  return (
    <div className="w-screen h-dvh">
      <img src={landing} alt="landingPage" className="h-screen w-auto"/>
    </div>
  );
}

export default Header;
