import React, { useState } from "react";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
//import id
import { v4 as uuidv4 } from 'uuid';

import "./registerscreen.css";
import TextInput from "../../component/textInput/TextInput";
import Button from "../../component/button/Button";
import { DataContext } from "../../../data/DataContext";


export default function RegisterScreen() {
    const { users, setUsers } = React.useContext(DataContext);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = React.useState(""); 

    const id = uuidv4();
    const user = {
        id: id,
        fullName: fullName,
        email: email,
        password: password,
    }

    const handleFullName = (fullName) => {
        setFullName(fullName.target.value);
    }

    const handleEmail = (email) => {
        setEmail(email.target.value);
    }

    const handlePassword = (password) => {
        setPassword(password.target.value);
    }

    
  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
    };

    console.log(users);

    
    const handleRegister = () => {
        // alert("Register button clicked");
        // alert("THIS IS IT " + users[0].name)
        if (!isValidEmail(email)) {
            setEmailError("Invalid email address");
            return;   
        }
        setUsers([...users, user]);
        alert(`Full Name: ${fullName} Email: ${email} Password: ${password}`);
        alert(users)
        setFullName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className="container">
            <div className="registerForm"> 
                <TextInput
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
                    fontSize={18}
                    icon={<FiUser />}
                    onChange={handleFullName}
                    value={fullName}
                />

                <TextInput
                    label="Email"
                    placeholder="Email"
                    type="text"
                    fontSize={18}
                    icon={<FiMail />}
                    onChange={handleEmail}
                    value={email}
                />
                    {emailError && <span className="error">{emailError}</span>}
                <TextInput
                    label="Password"
                    placeholder="Password"
                    type="password"
                    fontSize={18}
                    icon={<FiLock />}
                    onChange={handlePassword}
                    value={password}
                />

                <Button 
                    text="Register"
                    onClick={handleRegister}
                    onAnimationEnd={() => {
                        setFullName("");
                        setEmail("");
                        setPassword("");
                    }}
                />


            </div>
         
        </div>
    )
}