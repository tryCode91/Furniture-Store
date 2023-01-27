import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const Signin = () => {
    const [userDetails, setUserDetails] = useState();
    const [login, setLogin] = useState({
        name: "",
        pwd: "",
    });

    const handleAdd = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin((prev) => {
            return { ...prev, [name]: value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", login.name);
        formData.append("pwd", login.pwd);
        const url = "http://localhost/react-php/react-backend/Api/Login.php";
        await axios.post(url, formData)
            .then(res => {
                console.log("Response from Login Script: ", res.data)
                setUserDetails(res.data)
            }
            )
            .catch(err => console.log(err));
    }

    function isEmptyUserDetails() {
        if (typeof (userDetails) !== "undefined") {
            if (userDetails.hasOwnProperty('error')) {
                return true;
            }
            return false;
        }
    }

    function userLogin() {
        if (typeof (userDetails) !== "undefined") {
            if (userDetails.hasOwnProperty('success')) {
                //set token in storage
                return true;
            }
            return false;
        }
    }

    if (userLogin() === true) {
        if (userDetails.hasOwnProperty("userId") && userDetails.hasOwnProperty("user_name")) {
            //key-value
            sessionStorage.setItem("userId", userDetails.userId);
            sessionStorage.setItem("user_name", userDetails.user_name);
            //true/false
            sessionStorage.setItem("accessToken", isUserLoggedIn());
        }
    }

    function isUserLoggedIn() {
        if (userLogin() === true && isEmptyUserDetails() === false) {
            //login success
            return true;
        }
        return false;
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <div style={{ marginTop: 30, fontSize: 40, marginBottom: 15 }}>Sign in</div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleAdd}
                    placeholder="Your name.."
                />
                <br></br>
                <input
                    type="password"
                    id="pwd"
                    name="pwd"
                    onChange={handleAdd}
                    placeholder="Password.."
                />
                <br></br>
                <button onClick={handleSubmit} className="btn" type="submit">Enter</button>
                <div>{isEmptyUserDetails() === false && userLogin() === true ?
                    <div className="success">{userLogin() ? <Navigate to="/dashboard" replace={true} /> : "Login Error"}</div>
                    : <div className="error">{isEmptyUserDetails() ? userDetails.error : null}</div>}</div>
            </div>
        </div >
    )
}
export default Signin;