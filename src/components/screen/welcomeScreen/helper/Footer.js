import React from "react";
import TextInput from "../../../component/textInput/TextInput";
import Button from "../../../component/button/Button";

import "./footer.css"
import TextPointer from "../../../component/textPointer/TextPointer";

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
      <div>
        <TextPointer
          text= "About Synergic"
        />
      </div>

    </div>
    
  );
}
