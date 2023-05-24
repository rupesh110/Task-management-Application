import React from "react";

import "../welcomeScreen.css";

import logo from "../../assets/logo.png";

function WelcomeScreen() {
  return (
    <div className="welcomeScreenContainer">
      <div className="navBarContainer">
        <div className="logoContainer">
          <img
            className="logo"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="navbarRight">
            <h1>Login</h1>
        </div>
      </div>

      <div className="mainPageContainer">
        <h1>This is main page</h1>
        <h1>Welcome to Synergic</h1>
      </div>

      <div className="footerContainer">
        <h1>This is footer</h1>
      </div>
     
    </div>
  );
}

export default WelcomeScreen;
