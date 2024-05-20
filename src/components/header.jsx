
// export default function Header() {
//     return ( 
        
//         <img src="src\assets\logo.svg" alt="" />
//     )
// }

// import logo from "../assets/logo.svg";
// import "../style/header.css";
// const Header = () => {
//     return (
//         <div className="header-content">
//             <img className="header-content-img" src={logo} alt={logo}></img>
//         </div>
//     )
// }
// export default Header;

import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/header.css";
import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";


export default function Header() {
  const location = useLocation();
  return (
    <div className="header-content">
      <img className="header-content-img" src={logo} alt={logo}></img>
      {location.pathname === "/Form" && (
        <Nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana Sayfa
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link to="/Form" className="nav-link">
                Sipariş Oluştur
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OnayPage">
                Seçenekler
              </Link>
            </li>
          </ul>
        </Nav>
      )}
    </div>
  );
}