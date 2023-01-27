import '../App.css';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [userDetails, setUserDetails] = useState();
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        pwd: "",
        pwdRepeat: "",
    });
    const handleAdd = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        await setSignup((prev) => {
            return { ...prev, [name]: value }
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append("name", signup.name);
        formData.append("email", signup.email);
        formData.append("pwd", signup.pwd);
        formData.append("pwdRepeat", signup.pwdRepeat);

        const url = "http://localhost/react-php/react-backend/Api/Signup.php";

        await axios.post(url, formData)
            .then(res => {
                console.log("Response Signup: ", res.data)
                setUserDetails(res.data)
            }
            )
            .catch(err => console.log(err));
    }

    function isEmptyUserDetails(){
        if (typeof (userDetails) !== "undefined") {
            if (userDetails.hasOwnProperty('error')) {
                return true;
            }
            return false;
        }
    }

    function userCreated() {
        if(typeof(userDetails) !== "undefined"){
            if (userDetails.hasOwnProperty('success')) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <div style={{marginTop: 30, fontSize: 40, marginBottom: 15}}>Sign Up</div>
                <input
                    type="text"
                    name="name"
                    onChange={handleAdd}
                    placeholder="Your name.."
                />
                <br></br>
                <input
                    type="text"
                    name="email"
                    onChange={handleAdd}
                    placeholder="E-mail.."
                />
                <br></br>
                <input
                    type="password"
                    name="pwd"
                    onChange={handleAdd}
                    placeholder="Password.."
                />
                <br></br>
                <input
                    type="password"
                    name="pwdRepeat"
                    onChange={handleAdd}
                    placeholder="Repeat Password.."
                />
                <br></br>
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
                <div>{isEmptyUserDetails() === false && userCreated() === true ? <div className="success">{userCreated() ? userDetails.success : ""}</div> : <div className="error">{ isEmptyUserDetails() ?  userDetails.error : null }</div> }</div>
            </div>
        </div>
    );
};
export default Login;