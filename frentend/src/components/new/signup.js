
// 
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/newlogin.css"
import Dob from "./dob";
import Button from "./button";
import Input from "./input";
import Radio from "./input-radio";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';




export default function Signup({ email }) {

    const navigate = useNavigate;
    const [icon1, setIcon1] = useState(true);
    const [icon2, setIcon2] = useState(true);
    // const [data, serData] = useState({
    //     fname,
    //     lname,
    //     gender,
    //     dob,
    //     password
    // });
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");


    const fnameRef = useRef();
    const lnameRef = useRef();
    const genderRef = useRef();
    const dobRef = useRef();
    const passwordRef = useRef();
    const cpasswordRef = useRef();

    const fnameerrRef = useRef();
    const lnameerrRef = useRef();
    const gendererrRef = useRef();
    const doberrRef = useRef();
    const passworderrRef = useRef();
    const cpassworderrRef = useRef();


    const validate = (field, e, elem) => {

        switch (field) {
            case "fname":
                if ((/^[A-Za-z]{2,}$/.test(e.target.value))) {
                    fnameRef.current.style.borderColor = "green"
                    fnameerrRef.current.style.display = "none"
                }
                else {
                    fnameRef.current.style.borderColor = "#c80a28"
                    fnameerrRef.current.style.display = "block"
                    fnameerrRef.current.innerText = "First Name must be at least 2 characters long and contain only letters"
                }
                break;
            case "lname":
                if ((/^[A-Za-z]{2,}$/.test(e.target.value.trim()))) {
                    lnameRef.current.style.borderColor = "green"
                    lnameerrRef.current.style.display = "none"
                }
                else {
                    lnameRef.current.style.borderColor = "#c80a28"
                    lnameerrRef.current.style.display = "block"
                    lnameerrRef.current.innerText = "Last Name must be at least 2 characters long and contain only letters"
                }
                break;

            case "gender":
                if (!e.target.value) {
                    document.getElementById(elem + "err").style.display = "block"
                    document.getElementById("gendererr").innerText = "Please select your gender";

                    document.getElementById(elem + "1").style.borderColor = "#c80a28"
                    document.getElementById(elem + "2").style.borderColor = "#c80a28"
                    document.getElementById(elem + "3").style.borderColor = "#c80a28"
                }
                else {
                    document.getElementById(elem + "1").style.borderColor = "green"
                    document.getElementById(elem + "2").style.borderColor = "green"
                    document.getElementById(elem + "3").style.borderColor = "green"
                    document.getElementById(elem + "err").innerText = ""

                }


                break;


            case "password":
                if (e.target.value && e.target.value.length >= 8) {
                    passwordRef.current.style.borderColor = "green"
                    passworderrRef.current.innerText = ""
                }
                else {
                    passwordRef.current.style.borderColor = "#c80a28"
                    passwordRef.current.style.display = "block"
                    passworderrRef.current.innerText = "Password must be at least 8 characters long"
                }


                break

            case "cpassword":
                if (e.target.value !== password) {
                    cpasswordRef.current.style.borderColor = "#c80a28"
                    cpassworderrRef.current.style.display = "block"
                    cpassworderrRef.current.innerText = "Password do not match"

                }
                else {
                    cpasswordRef.current.style.borderColor = "green"
                    cpassworderrRef.current.innerText = ""

                }
                break;

            default:
                return true;

        }
    }

    const validateForm = () => {
        let valid = true;

        if (!fname || !/^[A-Za-z]{2,}$/.test(fname)) {
            fnameRef.current.style.borderColor = "#c80a28";
            fnameerrRef.current.style.display = "block";
            fnameerrRef.current.innerText = "First Name must be at least 2 characters long and contain only letters";
            valid = false;
        }

        if (!lname || !/^[A-Za-z]{2,}$/.test(lname)) {
            lnameRef.current.style.borderColor = "#c80a28";
            lnameerrRef.current.style.display = "block";
            lnameerrRef.current.innerText = "Last Name must be at least 2 characters long and contain only letters";
            valid = false;
        }

        if (!gender) {
            document.getElementById("gender1").style.borderColor = "#c80a28";
            document.getElementById("gender2").style.borderColor = "#c80a28";
            document.getElementById("gender3").style.borderColor = "#c80a28";
            document.getElementById("gendererr").style.display = "block";
            document.getElementById("gendererr").innerText = "Please select your gender";
            valid = false;
        }

        // if (!dob) {
        //     document.getElementById("doberr").style.display = "block";
        //     document.getElementById("doberr").innerText = "Please select your date of birth";
        //     valid = false;
        // }
        if (!dob) {
            document.getElementById("dob1").style.borderColor = "#c80a28";
            document.getElementById("dob2").style.borderColor = "#c80a28";
            document.getElementById("dob3").style.borderColor = "#c80a28";
            document.getElementById("doberr").style.display = "block";
            document.getElementById("doberr").innerText = "Please select your date of birth";
            valid = false;
        } else {
            const dobDate = new Date(dob);
            const today = new Date();
            let age = today.getFullYear() - dobDate.getFullYear();
            const monthDifference = today.getMonth() - dobDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
                age--;
            }

            if (age < 18) {
                document.getElementById("dob1").style.borderColor = "#c80a28";
                document.getElementById("dob2").style.borderColor = "#c80a28";
                document.getElementById("dob3").style.borderColor = "#c80a28";
                document.getElementById("doberr").style.display = "block";
                document.getElementById("doberr").innerText = "You must be at least 18 years old";
                valid = false;
            } else {
                document.getElementById("dob1").style.borderColor = "green";
                document.getElementById("dob2").style.borderColor = "green";
                document.getElementById("dob3").style.borderColor = "green";
                document.getElementById("doberr").style.display = "none";
            }
        }

        if (!password || password.length < 8) {
            passwordRef.current.style.borderColor = "#c80a28";
            passworderrRef.current.style.display = "block";
            passworderrRef.current.innerText = "Password must be at least 8 characters long";
            valid = false;
        }

        if (!cpassword || cpassword !== password) {
            cpasswordRef.current.style.borderColor = "#c80a28";
            cpassworderrRef.current.style.display = "block";
            cpassworderrRef.current.innerText = "Passwords do not match";
            valid = false;
        }

        return valid;
    };



    async function adduser() {
        if (validateForm()) {
            try {

                const response = await axios.post(`/api/user/register`, {
                    email: email,
                    firstname: fname,
                    lastname: lname,
                    gender: gender,
                    dob: dob,
                    password: password
                })
                console.log(response);
                alert(response.data.message);
                if (response.status === 208) {
                    navigate("/authenticate");
                }
                else if (response.status === 200) {
                    navigate("/inbox");
                }
            } catch (error) {

                console.log(error)
            }
        }
        else {
            alert("please fill the form");

        }


    }




    return (
        <>
            {/* <p>{data.email}<br />{data.fname + " " + data.lname}<br />{data.dob}<br />{data.gender}<br />{data.password}<br />{cpassword}</p> */}
            <div>
                <h2>Sign Up</h2>
                <span >Enter your information to create a new account.

                </span><br />
                <span>
                    This information will be used to communicate with your account
                </span>
                <form className="input-form">


                    <div className="input-field ">
                        <Input label={"First Name"}
                            type={"text"}
                            id={"fname"}
                            onChange={(e) => { setFname(e.target.value); validate("fname", e, "fname") }}
                            ref={{ inputRef: fnameRef, errorRef: fnameerrRef }} />

                        <Input label={"Last Name"}
                            type={"text"}
                            id={"lname"}
                            onChange={(e) => { setLname(e.target.value); validate("lname", e, "lname") }}
                            ref={{ inputRef: lnameRef, errorRef: lnameerrRef }} />

                    </div>

                    <p>gender</p>
                    <div className="input-field">
                        <Radio label={"Male"} id="gender1" onChange={(e) => { setGender(e.target.value); validate("gender", e, "gender") }}></Radio>
                        <Radio label={"Female"} id="gender2" onChange={(e) => { setGender(e.target.value); validate("gender", e, "gender") }}></Radio>
                        <Radio label={"Other"} id="gender3" onChange={(e) => { setGender(e.target.value); validate("gender", e, "gender") }}></Radio>
                    </div>
                    <p className="input-error" id={"gendererr"}></p>

                    {/* <p>data of birth</p>
                    <div className="input-field">
                        <Select ></Select>
                    </div> */}


                    <p>data of birth</p>
                    <Dob setDob={setDob} id={"dob"} onChange={(e) => { validate("dob", e, "dob") }}></Dob>

                    <p>set password<span></span></p>

                    <div className="input-field">
                        <Input label={"Password"}
                            type={icon1 ? "password" : "text"} id={"password"}
                            onChange={(e) => { setPassword(e.target.value); validate("password", e, "password") }}
                            ref={{ inputRef: passwordRef, errorRef: passworderrRef }}>

                            <button type="button" onClick={() => { setIcon1(!icon1) }} className="icon">
                                {icon1 ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </Input>

                    </div>

                    <div className="input-field">

                        <Input label={"Confirm Password"}
                            type={icon2 ? "password" : "text"}
                            id={"cpassword"}
                            onChange={(e) => { setCpassword(e.target.value); validate("cpassword", e, "cpassword") }}
                            ref={{ inputRef: cpasswordRef, errorRef: cpassworderrRef }}>
                            <button type="button" onClick={() => { setIcon2(!icon2) }} className="icon">
                                {icon2 ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>

                        </Input>

                    </div>


                </form >
            </div >

            <Button onClick={adduser}>SignUp</Button>


        </>
    )

}