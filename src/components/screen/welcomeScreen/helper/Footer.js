import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

import "./footer.css"
import TextInput from "../../../component/textInput/TextInput";
import Button from "../../../component/button/Button";
import CardFooter from "../../../component/card/CardFooter";
import TextPointer from "../../../component/textPointer/TextPointer";
import Text from "../../../component/text/Text";

export default function Footer() {

  const [emailSignUp, setEmailSignUp] = React.useState("");

  const validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emailSignUp);
  }



  const handleSignUp = () => {
    if (validateEmail()) {
      alert('Email is valid: ' + emailSignUp);
    } else {
      alert('Invalid email!');
    }
  }
  return (
    <div>
      <div className="footerContainer">
        <TextInput 
          placeholder="Enter your email"
          fontSize="22"
          type="email"
          onChange={(e) => setEmailSignUp(e.target.value)}

        />
        <Button 
          fontSize="22"
          text="Sign Up - It's Free"
          color="white"
          onClick={handleSignUp}
        />
        </div>
      <hr />
      <div className="footerCard">
        <CardFooter
          link={"https://www.google.com/"}
          title="About us"
          text="What's behind the boards"
        />
        
        <CardFooter 
          link={"https://www.google.com/"}
          title="Contact us"
          text="We are here to help"
        />
      </div>
      <hr />
      <div className="footerBottomContainer">
        <div className="footerBottomText">
          <div className="footerText">
            <a href="https://www.google.com/" style={{ textDecoration: "none", color: "white" }}>
              <TextPointer
                text="Privacy Policys"
                fontSize="12"
              />
            </a>
          </div>
          <div className="footerText">
            <TextPointer
              text="Terms"
              fontSize="12"
            />
          </div>
          <div className="footerText">
            <TextPointer
              text="Cookie Settings"
              fontSize="12"
            />
          </div>
            <Text
              text="© 2021 Synergic. All rights reserved."
              fontSize="12"
            />
        </div>
        <div className="footerBottomLogo">
          <FaFacebook className="Icon" />
          <FaInstagram className="Icon" />
          <FaLinkedin className="Icon" />
          <FaTwitter className="Icon" />
          <FaYoutube className="Icon" />
        </div>
      </div>
    </div>
    
  );
}
