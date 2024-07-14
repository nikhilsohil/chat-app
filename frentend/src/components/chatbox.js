
import "./css/chat.css"
import React from 'react';



function ChatBox() {
    function scrollToBottom() {
        const element=document.getElementById("chatbox");
        console.log(element);
        element.scrollTo(0,element.scrollHeight);
      }


      function add() {
        const element=document.getElementById("chatbox");
        element.innerHTML = "<span class='chat response '>second</span>"+element.innerHTML;
        
      }

    return (
        <div className="message">
        <div className="user-details">
            <img src="http://localhost:5000/download.png" alt=""/>
            <span>Nikhil</span>
        </div>
        <div className="chatbox" id="chatbox">
            <span className="chat">first</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat">hel m,ndslk jsks jksiuasb uicaiu jkhcasiudbas skjgasgb akssaid yduiask lo</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat response">hello</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat">hello</span>
            <span className="chat response">Last</span>
        </div>
        <div className="message-input">
            <input type="text" placeholder="Message" />
            <button onClick={scrollToBottom}>send</button>
            <button onClick={add}>click</button>
        </div>
        
    </div>
    )
}

export default ChatBox;