import React from 'react';
import './App.css';
import WelcomeScreen from './components/screen/welcomeScreen/WelcomeScreen';
import Button from './components/component/button/Button';



function App() {
  return (
    <div className="App">
      {/* <WelcomeScreen /> */}
      <Button text="Login" onClick={() => console.log("jhfgkjasd")}/>
    </div>
  );
}

export default App;
