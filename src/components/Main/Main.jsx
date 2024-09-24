import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
import ChatPage from "../../pages/chatPage/ChatPage";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
  } = useContext(Context);

  // Function to handle key down event
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent(); // Call onSent when "Enter" is pressed
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>ExoNav AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Mehedi.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summerize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <ChatPage/>
          // <div className="result">
          //   <div className="resultTitle">
          //     <img src={assets.user_icon} alt="" />
          //     <p>{recentPrompt}</p>
          //   </div>
          //   <div className="resultData">
          //     <img src={assets.AI_icon} alt="" />
          //     {loading ? (
          //       <div className="loader">
          //         <hr />
          //         <hr />
          //         <hr />
          //       </div>
          //     ) : (
          //       <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
          //     )}
          //   </div>
          // </div>
        )}

        <div className="mainBottom">
          <div className="searchBox">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={handleKeyDown} // Add this line to listen for "Enter" key press
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottomInfo">
            ExoNav AI may display inaccurate info, including about people, so
            double-check its responses. Your privacy and ExoNav AI Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
