import React from "react";
import "./welcomeScreen.css";
import NavbarUpper from "./helper/NavbarUpper";
import Footer from "./helper/Footer";

function WelcomeScreen() {
 
  return (
    <div className="welcomeScreenContainer">
      <div className="navbarUpperContainer">
      <NavbarUpper />
      </div>

      <div className="mainPageContainer">
        <h1>This is the main page</h1>
        <h1>Welcome to Synergic</h1>
      </div>

      <div className="footerContainer">
     
        <Footer />
      </div>
    </div>
  );
}

export default WelcomeScreen;
