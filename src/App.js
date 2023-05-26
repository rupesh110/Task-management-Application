import React from 'react';
import './App.css';
import WelcomeScreen from './components/screen/welcomeScreen/WelcomeScreen';
import TextInput from './components/component/textInput/TextInput';
import Card from './components/component/card/Card';



function App() {

  return (
    <div className="App">
      <WelcomeScreen />
      {/* <TextPointer
        text="This is a text pointer"
      /> */}

      <Card
        title="About Us"
      />
    
   
  

    </div>
  );
}

export default App;
