import logo from "../assets/home-banner.png";
import "../style/homepage.css";
import { useHistory } from "react-router-dom";


const HomePage = () => {
    let history = useHistory();
  
    function handleSubmit() {
      history.push("/Form");
    }
    return (
        <div className="homepage-content">
            <img className="homepage-content-img" src={logo} alt={logo}></img>
            <h1 className="homepage-content-text">KOD ACIKTIRIR 
            <br />
            PİZZA, DOYURUR
            </h1>
            <br />
            <button className="homepage-content-btn" onClick={handleSubmit}>ACIKTIM</button>
        </div>
        
    )
}
export default HomePage;