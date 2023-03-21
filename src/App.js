import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Coin from './Pages/Crypto/C';
import HangMan from "./Pages/HangMan/HangMan";
import Home from './Pages/Home/Home';
import IpData from './Pages/IP/IpData';
import SpaceGame from "./Pages/SpaceGame/SpaceGame";


function App() {

  return (   

 <BrowserRouter>
  <NavBar />
 <Routes>
<Route path="/" element={<Home />}/>
<Route path="/Coin" element={<Coin />}/>
<Route path="/IpData" element={<IpData />}/>
<Route path="/HangMan" element={<HangMan/> }/>
<Route path="/SpaceGame" element={<SpaceGame/> }/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;


