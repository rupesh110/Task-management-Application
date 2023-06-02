import React from "react";
import { FiUser, FiLock, FiMail, FiEyeOff, FiEye } from "react-icons/fi";

import "./loginpage.css";
import TextInput from "../../component/textInput/TextInput";
import Button from "../../component/button/Button";

import UserData from "../../../data/UserData";
import { DataContext } from "../../../data/DataContext";

export default function LoginPage() {
  const { users } = React.useContext(DataContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    const user = users.find((user) => user.email === email);
    if (!user) {
      setLoginError("User not found");
      return;
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      setLoginError("Incorrect password");
      return;
    }

    alert("Login button clicked");
    alert(`Username: ${email} Password: ${password}`);
    setEmail("");
    setPassword("");
    setEmailError("");
    setLoginError("");
  };

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="loginPageContainer">
      <div className="loginPageForm">
        <TextInput
          label="Username"
          placeholder="Username"
          type="text"
          fontSize={18}
          icon={<FiMail />}
          onChange={handleUsernameChange}
          value={email}
        />
        {emailError && <span className="error">{emailError}</span>}

        <TextInput
          label="Password"
          placeholder="Password"
          type="Password"
          fontSize={18}
          icon={<FiLock />}
          onChange={handlePasswordChange}
          value={password}
        />
        {loginError && <span className="error">{loginError}</span>}

        <Button
          text="Login"
          fontSize={18}
          onClick={handleLogin}
          onAnimationEnd={() => {
            setEmail("");
            setPassword("");
          }}
        />
      </div>
    </div>
  );
}
