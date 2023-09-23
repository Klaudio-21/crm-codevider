import React from 'react';
import './setting.css'
import { useNavigate } from "react-router-dom";

function SettingsComponent() {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate("/changepassword");
    };
    return (
      

            <div className="settings-container">
                <h1 className="settings-title">Settings</h1>
                <section
                className="settings-section"
                onClick={handleClick}
                >
                    <h2 className="settings-section-heading">Password</h2>
                    <p className="settings-section-description">Change your password.</p>
                </section>
            </div>
       
    );
}

export default SettingsComponent;