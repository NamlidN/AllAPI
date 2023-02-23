

import "./Nav.css"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
 
        <span className="NavLinkContainer">
        <Link className="NavLink" to="/">Home</Link>
        <Link className="NavLink" to="Coin">Crypto Coins </Link>
        <Link className="NavLink" to="IpData"> IP Tracker und co </Link>
        <Link className="NavLink" to="HangMan">HangMan</Link>
        
        
        
        </span>
    );
  }
