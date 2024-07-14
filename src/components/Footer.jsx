import React from "react";
import footerImage from "../images/footerimage.jpg"

function Footer() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={footerImage} alt="footerimage" className="h-max w-max" />
      </div>
    </div>
  );
}

export default Footer;
