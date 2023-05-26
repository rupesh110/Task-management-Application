import React from "react";



// import logo from "../../assets/logo.png";
// import TextPointer from "../../../component/textPointer/TextPointer";
// import Navbar from "../../../component/navbar/Navbar";

import logo from "../../../assets/logo.png";
import TextPointer from "../../../component/textPointer/TextPointer";
import Navbar from "../../../component/navbar/Navbar";


export default function NavbarUpper() {
  const company = [
    {
      title: "About Us",
      link: "https://www.faethm.ai/about-us",
    },
    {
      title: "In the News",
      link: "https://www.faethm.ai/news",
    },
    {
      title: "Platform Status",
      link: "https://status.faethm.ai/",
    }
  ];

  return (

      <div className="navBarContainer">
        <div className="navbarLeft">
          <div className="logoContainer">
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <div className="navbarMiddle">
            <div className="dropDown">
              <Navbar title={"Company"} services={company} />
            </div>

            <div className="dropDown">
              <Navbar title={"About Us"} services={company} />
            </div>
          </div>
        </div>

        <div className="navbarRight">
          <TextPointer
            text="Login"
            fontSize="20"
            color="white"
            onClick={() => alert("Login")}
          />
        </div>
      </div>
  );
}
