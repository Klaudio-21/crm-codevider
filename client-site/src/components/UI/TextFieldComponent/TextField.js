import React from "react";
import "./TextField.css";
const TextField = ({ type, placeholder, value, onChange, label, className, onClick }) => {
    return (
        <div className="textfield-container">
            {label && <label htmlFor={label}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={label}
                className={`custom-textfield ${className}`}
                onClick={onClick}
            />
        </div>
    );
};
export default TextField;
