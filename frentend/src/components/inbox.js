

import "./css/chat.css";
import React, { useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SetProfile from "./new/setProfile";
// import axios from 'axios';

function Inbox() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("userId");
        navigate("/logout");
        alert("User logged out");
    }

    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            navigate("/");
        }
    },);

    // const [fileUploader, setFileUploade] = useState(false)
    return (
        <div className="user-container">
            <div className="search">
                <div >
                    <Link className="user" to="#">
                        <div className="setting_menu">

                            <img src="http://localhost:5000/download.png" alt="user" />
                        </div>
                        <div className="setting_item">
                            <ul>
                                <li>setting</li>
                                <li>setting</li>
                                <li>setting</li>
                            </ul>
                        </div>
                        <span>you</span>
                        <button className="logout_button" onClick={() => logOut()}>
                            logout
                        </button>
                    </Link>

                </div>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="users">

                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                {/* <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>Nikhil</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>raja babu</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>raja babu</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>raja babu</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>raja babu</span>
                </Link>
                <Link className="user" to="#">
                    <img src="http://localhost:5000/api/img/user.png" alt="user" />
                    <span>raja babu</span>
                </Link> */}
            </div>
        </div>
    );
}
export default Inbox;