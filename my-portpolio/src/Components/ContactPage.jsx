import NavBar from "./NavBar";
import "../Styles/contactpage.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../Styles/landingpage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const ContactPage = () => {
    let[name,setNmae]=useState("")
    let[email,setEmail]=useState("")
    let[subject,setSubject]=useState("")
    let[message,setMessage]=useState("")
    const form=useRef()
    function sendEmail(e) {
        e.preventDefault()
        if(name!=="" && email !=="" && message.length >=10){
            emailjs
            .sendForm('service_r9u2je8', 'template_ydp1xi8', form.current, {
              publicKey: 'lmDtb5VPo6_nTlMO6',
            })
            .then(
              () => {
                alert('Message send successfully');
                setMessage("")
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
          }else{
            alert("give the credentials")
          }
    }
    let predefineEmail="surajdutta.skd@gmail.com"
    let predefinePhone="+918945032934"
    let predefinrLocation="https://maps.app.goo.gl/TdftacrQ9yUCtMdJ9"
    function handleMailtoClick(e) {
      e.preventDefault()
      window.location.href=`mailto:${predefineEmail}`
    }
    function handlePhonetoClick(e) {
      e.preventDefault()
      window.location.href=`tel:${predefinePhone}`
    }
    function handleLocationtoClick(e) {
      window.open(predefinrLocation, '_blank')
    }

  return (
    <>
      <NavBar />
      <div className="contactpage">
        <div className="contactinfo">
          <h2>Get In Touch</h2>
          <p>
            If you have any questions, feedback, or just want to say hello,
            please fill out the form below. We'd love to hear from you!
          </p>
          <div className="infobox">
            <div className="phone">
                <PhoneIcon onClick={handlePhonetoClick} className="xicon"/>
                <div className="Tbox">
                    <h2>PHONE</h2>
                    <h2>+91 8945032934</h2>
                </div>
            </div>
            <div className="email">
                <EmailIcon onClick={handleMailtoClick} className="xicon"/>
                <div className="Tbox">
                    <h2>EMAIL</h2>
                    <h2>{predefineEmail}</h2>
                </div>
            </div>
            <div className="location">
                <LocationOnIcon onClick={handleLocationtoClick} className="xicon"/>
                <div className="Tbox">
                    <h2>LOCATION</h2>
                    <h2>BTM Layout,Bengaluru,560076</h2>
                </div>
            </div>
          </div>
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
        <div className="mailpart">
            <form ref={form}  onSubmit={sendEmail}>
                <div className="nameinput">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="user_name" value={name} required onChange={(e)=>{setNmae(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="user_email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                </div>
                <div className="subjectinput">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="user_subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} required/>
                </div>
                <div className="messageinput">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
                </div>
                <button>send message <ArrowRightAltIcon/></button>
            </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
