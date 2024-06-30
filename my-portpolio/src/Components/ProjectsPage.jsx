import NavBar from "./NavBar";
import "../Styles/projectpage.css"
import printIt from "../images/printit.png"
import shopsera from "../images/shopsera.png"
import weatherapp from "../images/img3.png"
import busreservation from "../images/img2.png"
import chatapp from "../images/chatapp.png"
import tictacteo from "../images/tictacteo.png"
import bubblegame from "../images/bubblegame.png"
import calculator from "../images/calculator.png"
import stopwatch from "../images/stopwatch.png"
import analogclock from "../images/analogclock.png"
const ProjectsPage = () => {
    return ( 
        <div>
            <NavBar/>
            <div className="projectpage">
            <h1 id="ptitle">MY PROJECT'S</h1>
            <div className="container">
            <div className="prohectbox">
                <div className="project">
                    <img src={`${printIt}`} alt="" />
                    <h1>E-commerce application "print-it"</h1>
                    <div className="skilluse">
                        <h3>Spring Boot</h3>
                        <h3>React</h3>
                        <h3>MySQL</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${shopsera}`} alt="" />
                    <h1>e-commerce application "Shop Sera"</h1>
                    <div className="skilluse">
                        <h3>Spring Boot</h3>
                        <h3>React</h3>
                        <h3>MySQL</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${busreservation}`} alt="" />
                    <h1>Ticket Reservatio app "Subh Yatra"</h1>
                    <div className="skilluse">
                        <h3>Spring Boot</h3>
                        <h3>React</h3>
                        <h3>MySQL</h3>
                        <h3>BootStrap</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${weatherapp}`} alt="" />
                    <h1>Weather Application</h1>
                    <div className="skilluse">
                        <h3>React</h3>
                        <h3>Open Weather API</h3>
                        <h3>BootStrap</h3>
                        <h3>Netlify</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${chatapp}`} alt="" />
                    <h1>Real Time Chat Application</h1>
                    <div className="skilluse">
                        <h3>React.js</h3>
                        <h3>Express.js</h3>
                        <h3>socket.io</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                        <h3>Heroku</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${tictacteo}`} alt="" />
                    <h1>Tic-Tac-Teo</h1>
                    <div className="skilluse">
                        <h3>HTML & CSS</h3>
                        <h3>JavaScript</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${bubblegame}`} alt="" />
                    <h1>Bibble Game</h1>
                    <div className="skilluse">
                        <h3>JavaScript</h3>
                        <h3>HTML & CSS</h3>
                        <h3>Git</h3>
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${calculator}`} alt="" />
                    <h1>Calculator</h1>
                    <div className="skilluse">
                        <h3>JavaScript</h3>
                        <h3>HTML & CSS</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${stopwatch}`} alt="" />
                    <h1>Stop Watch</h1>
                    <div className="skilluse">
                        <h3>JavaScript</h3>
                        <h3>HTML & CSS</h3>
                    </div>
                </div>
                <div className="project">
                    <img src={`${analogclock}`} alt="" />
                    <h1>Analog Clock</h1>
                    <div className="skilluse">
                        <h3>JavaScript</h3>
                        <h3>HTML & CSS</h3>
                    </div>
                </div>

            </div>
            </div>
            </div>
        </div>
     );
}
 
export default ProjectsPage;