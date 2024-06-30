import NavBar from "./NavBar";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import DescriptionIcon from "@mui/icons-material/Description";
import "../Styles/skillpage.css";
import javaLigo from "../images/Picsart_24-06-30_13-04-33-246.png"
import sqlLogo from "../images/Picsart_24-06-30_13-05-01-355.png"
import code30Day from "../images/Picsart_24-06-30_13-05-53-244.png"
import { useEffect, useState } from "react";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
const SkillsPage = () => {
    let[count,setCount]=useState(0);
    
    useEffect(() => {
        const countdownInterval = setInterval(() => {
          if (count < 55) {
            setCount(prevCount => prevCount + 1);
          } else {
            clearInterval(countdownInterval);
          }
        }, 50);
        return () => clearInterval(countdownInterval);
      }, []); 
  return (
    <>
      <NavBar />
      <div className="skillpage">
        <h1 id="skilltitle">MY SKILL'S</h1>
        <div className="skillbox">
          <div className="techinicalskills">
            <h3>
              <SettingsSuggestIcon /> Skill's
            </h3>
            <div className="tskillsbox">
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/96/java_original_wordmark_logo_icon_146459.png"
                  alt=""
                />
                <p>java</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2108/PNG/96/javascript_icon_130900.png"
                  alt=""
                />
                <p>javaScript</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_logo_icon_146374.png"
                  alt=""
                />
                <p>React</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png"
                  alt=""
                />
                <p>HTML</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_css_icon_130661.png"
                  alt=""
                />
                <p>CSS</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/273/PNG/96/icon_sql_256_30046.png"
                  alt=""
                />
                <p>SQL</p>
              </div>
              <div className="xskill">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>Hibernate</p>
              </div>
              <div className="xskill">
                <img src="https://www.openhab.org/logos/jdbc.png" alt="" />
                <p>JDBC</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_git_icon_130581.png"
                  alt=""
                />
                <p>Git</p>
              </div>
              <div className="xskill">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_mktZcTw2hqHO9L_FJitBqaDyGbjOcBb6Qt3t-ZPfKuPQ=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <p>Spring</p>
              </div>
              <div className="xskill">
                <img
                  src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
                  alt=""
                />
                <p>Spring Boot</p>
              </div>
              <div className="xskill">
                <img
                  src="https://cdn.icon-icons.com/icons2/2406/PNG/96/github_git_icon_145985.png"
                  alt=""
                />
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="mybadges">
            <h3>
              <LocalPoliceIcon /> My Badges
            </h3>
            <div className="badgebox">
                <div className="hackerrank">
                      <img src="https://cdn.iconscout.com/icon/free/png-512/free-hackerrank-3521478-2944922.png?f=webp&w=256" alt="" />
                      <img src={`${javaLigo}`} alt="" />
                      <img src={`${sqlLogo}`} alt="" />
                      <img src={`${code30Day}`} alt="" />
                </div>
                <div className="leetcode">
                     <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=webp&w=256" alt="" />
                     <h2>{count <= 55 ? `${count}` : "55+"}</h2>
                </div>
            </div>
          </div>
          <div className="mycertifications">
            <h3>
              <DescriptionIcon /> My Certifications
            </h3>
            <div className="allcertificates">
                <div className="certificate">
                    <MilitaryTechIcon className="cbadgelogo"/>
                    <h6>Java Full-stack <br /> Web Devlopment</h6>
                    <h5>JSpider's</h5>
                    <div class="folded-corner"></div>
                    <div className="cover-box"></div>
                </div>
                <div className="certificate">
                    <MilitaryTechIcon className="cbadgelogo"/>
                    <h6>JavaScript(Basic)</h6>
                    <h5>Hackerrank</h5>
                    <div class="folded-corner"></div>
                    <div className="cover-box"></div>
                </div>
                <div className="certificate">
                    <MilitaryTechIcon className="cbadgelogo"/>
                    <h6>SQL(Basic)</h6>
                    <h5>Hackerrank</h5>
                    <div class="folded-corner"></div>
                    <div className="cover-box"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
