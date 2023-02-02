
import './App.css';
import { useState } from 'react';
import LandingPage from '../src/LandingPage';
// import DesktopLandingpage from './DesktopAssets/DesktopLandingpage';

function App() {
  const [Login, setLogin] = useState(<LandingPage/>)

  return (
    <div className="App">
            {Login}

    </div>
  );
}

export default App;
