
import './App.css';
import { useState } from 'react';
import LandingPage from '../src/LandingPage';
import SignupPage from '../src/components/signup';
import Loginpage from '../src/components/login';
// import DesktopLandingpage from './DesktopAssets/DesktopLandingpage';

function App() {
  const [Login, setLogin] = useState(<Loginpage/>)

 

  return (
    <div className="App">
            {Login}
           {SignupPage}
    </div>
  );
}

export default App;
