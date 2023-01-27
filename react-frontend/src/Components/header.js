import "../App.css"
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {

    //clear backend session and localstorage data
    const logout = async (e) => {
        e.preventDefault();
        
        let userIdFromStorage = sessionStorage.getItem("userId");
        const url = "http://localhost/react-php/react-backend/Api/Logout.php";
        let formData = new FormData();
        formData.append("Pressed", "True");
        formData.append("userId", userIdFromStorage);
        await axios.post(url, formData)
            .then(res => {
                    console.log("Response Login: ", res.data)
                    sessionStorage.clear();
                    window.location.reload(true);
                    Navigate("/login");
            }
            )
            .catch(err => console.log(err));
    }

    let token = sessionStorage.getItem("accessToken") == null ? false : true;

    return (
        <nav className="header">
            {token ? <div>
                <Button variant="text" sx={{marginBottom: "10px"}} size={"xl"} startIcon={<LogoutIcon />} onClick={(e) => logout(e)}></Button>
                <Link className="link" to="/Dashboard">Dashboard</Link>
                <Link className="link" to="/Shop">Shop</Link>
                <Link className="link" to="/ShoppingCart">ShoppingCart</Link>
            </div> :
                <div>
                    <Link className="link" to="/signin">Login</Link>
                    <Link className="link" to="/signup">Signup</Link>
                </div>
            }
        </nav>
    )
};
export default Header;
