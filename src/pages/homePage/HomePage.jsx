import { Link } from "react-router-dom";
import "./HomePage.css";
import { assets } from "../../assets/assets";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("Mehedi");

  // const test = async () => {
  //   await fetch("http://localhost:3000/api/test", {
  //     credentials: "include",
  //   });
  // };

  return (
    <div className="homepage">
      <img src={assets.orbital} alt="" className="orbital" />
      <div className="left">
        <h1>ExoNav AI</h1>
        <h2>Supercharge your Creativity and Productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt
          tempore doloremque ab consectetur quidem.
        </h3>
        <Link to="/dashboard" className="btn">
          Get Started
        </Link>
        {/* <button onClick={test}>test</button> */}
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src={assets.bot} alt="" className="bot" />
          <div className="chat">
            <div className="chatImg">
              <img
                src={
                  typingStatus === "Mehedi"
                    ? assets.human1
                    : typingStatus === "Elma"
                    ? assets.human2
                    : assets.bot
                }
                alt=""
                className=""
              />
            </div>

            <div className="autotype">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Mehedi: What is ExoNav AI",
                  2000,
                  () => {
                    setTypingStatus("AI");
                  },
                  "AI:Eoplanet Exploration using AI",
                  2000,
                  () => {
                    setTypingStatus("Elma");
                  },
                  "Elma: How ExoNav AI Works",
                  2000,
                  () => {
                    setTypingStatus("AI");
                  },
                  "AI: Based on scientists Research",
                  2000,
                  () => {
                    setTypingStatus("Mehedi");
                  },
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                omitDeletionAnimation={true}
                style={{
                  fontSize: "16px",
                  color: "white",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="terms">
        <img src={assets.AI_icon} alt="" />
        <div className="links">
          <Link style={{ textDecoration: "none" }} to="/">
            Terms of Service
          </Link>
          <span>|</span>
          <Link style={{ textDecoration: "none" }} to="/">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
