import NavBar from "./NavBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../Styles/landingpage.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import profile from "../images/Picsart_24-06-28_11-59-36-528.jpg";
import { useState } from "react";
const LandingPage = () => {
  let [flag, setFlag] = useState(false);
  function openAboutme(e) {
    e.preventDefault();
    setFlag(!flag);
  }
  return (
    <>
      <NavBar />
      <div className="landingpage">
        <div className="details">
          <h1>
            Hi, <br />
            I'm Suraj Dutta
          </h1>
          <h3>And I'm a Full-Stack Web Devloper</h3>
          <button onClick={openAboutme}>
            About Me <ArrowDropDownIcon id="arrowlogo" />
          </button>
          {flag && (
            <div className="aboutmepara">
              <p>
                Hi! I'm Suraj Dutta, a recent graduate in Computer Science and
                Engineering from Seemanta Engineering College. Proficient in
                Java, JavaScript, HTML, CSS, React.js, Spring, Spring Boot, SQL,
                Git, and GitHub, I'm passionate about web development and eager
                to start my career in the tech industry.
              </p>
            </div>
          )}
          <div className="socialmedia">
            <div className="box">
              <Link to="https://www.linkedin.com/in/suraj-dutta-488292167/">
                <LinkedInIcon id="linkedin" />
              </Link>
            </div>
            <div className="box">
              <Link to="https://github.com/suraj-dutta01">
                <GitHubIcon id="github" />
              </Link>
            </div>
            <div className="box">
              <Link to="https://x.com/surajdutta819?s=08">
                <XIcon id="x" />
              </Link>
            </div>
            <div className="box">
              <Link to="https://www.instagram.com/surajdutta125?igsh=MWNoMDJwaXM5MzVvbw==">
                <InstagramIcon id="insta" />
              </Link>
            </div>
            <div className="box">
              <Link to="https://www.facebook.com/suraj.dutta.5249?mibextid=ZbWKwL">
                <FacebookIcon id="facebook" />
              </Link>
            </div>
            <div className="box">
              <Link to="https://t.me/surajdutta01">
                <TelegramIcon id="teligram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="profileimage">
          <img src={`${profile}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
