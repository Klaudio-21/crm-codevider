import React, { useState } from "react";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
    MdWork,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAdminSubMenu, setShowAdminSubMenu] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleAdminSubMenu = () => {
        setShowAdminSubMenu(!showAdminSubMenu);
    };
    return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul className="nav-links">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <AiFillHome className="home-icon" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="admin-nav-item" onClick={toggleAdminSubMenu}>
                        <div className="nav-link">
                            <BsFillPersonFill className="home-icon" /> Admin
                        </div>
                        {showAdminSubMenu && (
                            <ul className="admin-submenu">
                                <li className="admin-nested-nav-item">
                                    <NavLink to="/employees" className="admin-nav-link">
                                        Employees
                                    </NavLink>
                                </li>
                                <li className="admin-nested-nav-item">
                                    <NavLink to="/clients" className="admin-nav-link">
                                        Clients
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">
                            <MdWork className="home-icon" />
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="myprofile" className="nav-link">
                            {" "}
                            <BsFillPersonLinesFill className="home-icon" />
                            My Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/settings" className="nav-link">
                            {" "}
                            <IoMdSettings className="home-icon" />
                            Settings
                        </NavLink>
                    </li>
                </ul>
                {!isOpen && <div className="vertical-line"></div>}
                {!isOpen ? (
                    <MdOutlineKeyboardDoubleArrowLeft
                        className="toggle-button"
                        onClick={toggleSidebar}
                    />
                ) : (
                    <MdOutlineKeyboardDoubleArrowRight
                        className="toggle-button-close"
                        onClick={toggleSidebar}
                    />
                )}
            </div>
        </>
    );
};
export default Sidebar;