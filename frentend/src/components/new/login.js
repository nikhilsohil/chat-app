

import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import userApi from "../../api/";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Input from './input';
import Button from './button';


export default function Login({ userId }) {
    const [icon, setIcon] = useState(true);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const errorRef = useRef(null);

    const checkPassword = async () => {

        if (password === "") {
            passwordRef.current.style.border = "2px solid red";
            errorRef.current.style.display = "block";
            errorRef.current.innerText = "please Enter the password";
        }
        else {

            try {
                const response = await userApi.post(`/login`, {
                    userId: userId,
                    password: password
                });
                // console.log(response.data);
                alert(response.data.message)
                if (response.data.userId) {
                    localStorage.setItem("userId", response.data.userId);
                    navigate("/chatbox")
                }
                else {
                    console.log(password);
                    passwordRef.current.style.border = "2px solid red";
                    errorRef.current.style.display = "block";
                    errorRef.current.innerText = response.data.message;
                    // alert("please enter the correct password")
                }
            }
            catch (err) {
                console.log(err);
            }
        }


    }



    return (
        <>
            <div>

                <h2>Log in to your account</h2>
                <span >Enter your password address to log in to account.
                </span>
                <form className="input-form">
                    <div className="input-field">

                        <Input type={icon ? "password" : "text"}
                            label={"password"}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            id={"password"}
                            ref={{ inputRef: passwordRef, errorRef }}>

                            <button type="button" onClick={() => { setIcon(!icon) }} className="icon">
                                {icon ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </Input>

                    </div>
                    <div className="input-field">

                        <div className="button-field forget">
                            <button type="button" >forgetten password</button>
                        </div>
                    </div>
                </form>
            </div>





            <Button onClick={checkPassword}>Login</Button>



            {/* <div className="input-field">

                <div className="button-field">
                    <button type="button" onClick={checkPassword} >Login</button>
                </div>
            </div> */}

        </>
    );



}