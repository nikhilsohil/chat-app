



import "./css/newlogin.css";

import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import EnterEmail from "./enteremail";
import Login from "./login";
import Signup from "./signup";


// react component

export default function Authenticate() {

    const [currentStep, setCurrentStep] = useState("enterEmail");
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const handleEmailNext = async () => {

        if (email === "") {
            alert("Please provide a valid email address")
            // document.getElementById("input-email").style.border = "2px solid red";
            // document.getElementById("input-emailerr").style.display = "block";
            // document.getElementById("input-emailerr").innerText = "Enter your email address in the following format: name@example.com";
            // document.getElementById("icon").style.color = "#c80a28";
        }
        else {
            try {
                const responce = await axios.post(`/api/user/checkemail`, {
                    email: email
                })
                console.log(responce)
                alert(responce.data.message)
                if (responce.data.user) {
                    setId(responce.data.user)
                    setCurrentStep("login")
                }
                else {
                    setCurrentStep("signup");
                    
                }
            }

            catch (err) {
                alert("erron in connecting server")
                console.log(err)
            }
        }

    };

return (
    <>
        <div className="ncontainer" id="container">
            <div className="nwapper">

                <div className="icon icon1" button>
                    <button type="button" onClick={() => { setCurrentStep("enterEmail"); setEmail("") }} className="icon">
                        {currentStep === "enterEmail" ? "" : <FontAwesomeIcon icon={faArrowLeft} size="2x" />}
                    </button>

                </div>
                {/* <EnterEmail setEmail={setEmail}></EnterEmail> */}
                {currentStep === "enterEmail" && <EnterEmail setEmail={setEmail} onNext={handleEmailNext} />}
                {currentStep === "login" && <Login id={id} />}
                {currentStep === "signup" && <Signup email={email} />}


            </div>
        </div>
    </>
);
}

