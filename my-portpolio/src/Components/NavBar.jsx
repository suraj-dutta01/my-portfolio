import "../Styles/navbar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="leftbar">
                <h1>Portfolio .</h1>
            </div>
            <div className="rightbar">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/about"><h4>About</h4></Link>
                <Link to="/skills"><h4>Skill's</h4></Link>
                <Link to="/projects"><h4>Project's</h4></Link>
                <Link to="/contact"><h4>Contact</h4></Link>
            </div>
        </div>
     );
}
 
export default NavBar;
<div className="">
    <h1>NavBar</h1>
</div>