
import './App.css';
import { useState } from 'react';
import LandingPage from '../src/LandingPage';
import SignupPage from '../src/components/signup';
// import DesktopLandingpage from './DesktopAssets/DesktopLandingpage';

function App() {
  const [Login, setLogin] = useState(<SignupPage/>)

 

  return (
    <div className="App">
            {Login}
           {SignupPage}
    </div>
  );
}

export default App;
