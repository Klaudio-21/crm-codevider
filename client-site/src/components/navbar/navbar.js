import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import logoImage from "../../assets/images/logo-dark.png";
import Button from "../UI/ButtonComponent/Button"
const Navbar = () => {
    const navigate = useNavigate(); 

    const handleLogoutClick = () => {
       
        navigate("/login");
    };
    return (
        <div className="navbar">
            <img src={logoImage} alt="User" className="user-photo" />
           
                <Button type="button" onClick={handleLogoutClick} >Log out</Button>
            
        </div>
    );
};

export default Navbar;