import NavBar from "./NavBar";
import "../Styles/aboutpage.css";
import profile from "../images/Picsart_24-06-28_11-59-36-528.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../Styles/landingpage.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../images/myNewResume_25.pdf"
const AboutPage = () => {
  let navigate=useNavigate()
  function contactme(e) {
    e.preventDefault()
    navigate("/contact")
  }
  let fileName="Surajs_Resume.pdf"
  function downloadResume(e) {
    e.preventDefault()
    const link = document.createElement('a');
    link.href = resume;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.location.href = link;
  }
  return (
    <>
    <NavBar/>
    <div className="aboutpage">
        <div className="imagepart">
          <img src={`${profile}`} alt="" />
        </div>
        <div className="aboutmepart">
          <div className="abouttitle">
          <h1>About Me</h1>
          <div className="socialmedia" id="iconid">
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
          <p>
            Hello! I'm Suraj Dutta from West Bengal, a recent graduate in
            Computer Science and Engineering from Seemanta Engineering College.
            I have a strong passion for coding and problem-solving, which led me
            to pursue a career in web development.
          </p>
          <p>
            I am proficient in Java, JavaScript, HTML, CSS, React.js, Spring,
            Spring Boot, SQL, Git, and GitHub. I completed a full-stack web
            development course at JSpider, where I enhanced my technical skills
            and gained hands-on experience.
          </p>
          <p>
            During my journey, I have earned a 5-star Gold Badge in Java and a
            3-star Silver Badge in SQL on HackerRank. Additionally, I have
            solved over 70 problems on LeetCode, showcasing my commitment to
            continuous learning and improving my problem-solving abilities.
          </p>
          <div className="buttonbox">
          <button onClick={downloadResume}>Resume <DownloadIcon id="downloadicon"/></button>
          <button onClick={contactme}>Contact Me <ArrowRightAltIcon/></button>
          </div>
        </div>
    </div>
    </>
  );
};

export default AboutPage;
