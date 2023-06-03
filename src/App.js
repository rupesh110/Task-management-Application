import React from 'react';
import './App.css';
import WelcomeScreen from './components/screen/welcomeScreen/WelcomeScreen';

import Card from './components/component/card/CardFooter';
import HomePageScreen from './components/screen/homePage/HomePageScreen';
import LoginPage from './components/screen/loginScreen/LoginPage';
import RegisterScreen from './components/screen/registerScreen/RegisterScreen';
import { DataProvider } from './data/DataContext';
import Try from './components/screen/try/Try';
import CardMessage from './components/component/card/cardmessage/CardMessage';


function App() {
  return (
    <div>
      {/* <WelcomeScreen /> */}

        {/* <HomePageScreen /> */}
      {/* <CardMessage /> */}
    


      <DataProvider>
        <HomePageScreen />
      </DataProvider>

    </div>
  );
}

export default App;
