
// export default function Header() {
//     return ( 
        
//         <img src="src\assets\logo.svg" alt="" />
//     )
// }

import logo from "../assets/logo.svg";
import "../style/header.css";
const Header = () => {
    return (
        <div className="header-content">
            <img className="header-content-img" src={logo} alt={logo}></img>
        </div>
    )
}
export default Header;