
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// icon used

import { faCircleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Input from "./input";
import Button from "./button";



export default function EnterEmail({ setEmail, onNext }) {

    const [icon, setIcon] = useState('');
    const inputRef = useRef();
    const errorRef = useRef();
    const iconRef = useRef();

    function validate(e) {

        // inputRef.current.style.border = "2px solid black";
        // errorRef.style.display = "none";
        // iconRef.style.color = "black";

            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let result = pattern.test(e.target.value);

            let length = e.target.value.length;

            if (result === false || length < 6 || length > 120) {
                inputRef.current.style.border = "2px solid red";
                iconRef.current.style.color = "#c80a28";
                errorRef.current.style.display = "block";
                errorRef.current.innerText = "Enter your email address in the following format: name@example.com"
                setEmail("");
                setIcon(false);
            }
            else {
                inputRef.current.style.border = "2px solid green";
                iconRef.current.style.color = "green";
                errorRef.current.innerHTML = "";
                setEmail(e.target.value)
                setIcon(true);
            };

    };


    return (
        <>
            <div>

                <h2>Enter your email address</h2>
                <span >Enter your email address to log in to your account or create a new one.
                </span>
                <form className="input-form" onSubmit={onNext}>
                    <div className="input-field">
                        <Input type="text" label="Email" onChange={validate} id={"input-email"} ref={{ inputRef, errorRef }}>
                            <div className="icon" ref={iconRef}>
                                {icon ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faCircleExclamation} />}
                            </div>
                        </Input>

                    </div>

                </form>
            </div>
            <Button onClick={onNext}>Next</Button>
        </>
    )
}