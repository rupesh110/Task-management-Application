import React from "react";
import "./welcomeScreen.css";
import NavbarUpper from "./helper/NavbarUpper";
import Footer from "./helper/Footer";
import MainPage from "./helper/MainPage";

function WelcomeScreen() {
 
  return (
    <div className="welcomeScreenContainer">
      <div className="navbarUpperContainer">
      <NavbarUpper />
      </div>
      <MainPage />
    

      <div className="footerContainer">
     
        <Footer />
      </div>
    </div>
  );
}

export default WelcomeScreen;
