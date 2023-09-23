import './userTable.css'
import React, { useEffect, useState } from "react";
import TextField from "../../UI/TextFieldComponent/TextField";

import Button from "../../UI/ButtonComponent/Button"
import { getUserProfile } from "../../../services/userServices";
import { useUserContext } from "../../../hooks/contextHooks/useUserContext";
function UserTable() {
    
    const { user, dispatch } = useUserContext();

    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        async function fetchUserProfile() {
            try {


                const userProfileData = await getUserProfile();
                setUserProfile(userProfileData);

            } catch (error) {
                console.log("Error fetching user profile:", error);
            }
        }

        fetchUserProfile();
    }, []);
    return (
   
            <div className="mp-wrapper">
                <div className="mp-container">
                    <div className="mp-profile-header">
                        <h2 className="mp-heading">My Profile</h2>
                        <img className="mp-user-photo" alt="User" />
                        <input
                            type="file"
                            accept="image/*"

                            style={{ display: "none" }}
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="mp-image-upload-label">
                            <div className="mp-upload-icon">
                                <span>+</span>
                            </div>
                        </label>
                    </div>
                    <div className="mp-input-container">
                        <div className="mp-div">Personal Information</div>
                        <div className="mp-divider"></div>
                        <div className="mp-fields">
                            <TextField
                                className="mp-textfield"
                                type="text"
                                id="outlined-required"
                                label="Name"
                                value={userProfile?.data?.name}

                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Middlename"
                                value={userProfile?.data?.middlename}


                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Surname"
                                value={userProfile?.data?.surname}

                            />
                        </div>
                    </div>
                    <div className="mp-input-container">
                        <div className="mp-fields">
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Birthday"
                                value={userProfile?.data?.birthday}


                            />{" "}
                            <TextField
                                className="mp-textfield"
                                id="outlined-select-roles"
                                label="Gender"
                                value={userProfile?.data?.gender}


                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="City"
                                value={userProfile?.data?.city}


                            />
                        </div>
                    </div>
                    <div className="mp-input-container">
                        <div className="mp-div">Contacts </div>
                        <div className="mp-divider"></div>
                        <div className="mp-fields">
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="email"
                                label="Email"
                                value={userProfile?.data?.email}


                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Second Email"



                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Phone Number"
                                value={userProfile?.data?.phone}

                            />
                        </div>
                    </div>
                    <div className="mp-input-container">
                        <div className="mp-div">Proffession</div>
                        <div className="mp-divider"></div>
                        <div className="mp-fields">
                            <TextField
                                className="mp-textfield"
                                id="outlined-select-roles"
                                type="text"
                                label="Position"
                                value={userProfile?.data?.position}


                            />
                            <TextField
                                className="mp-textfield"
                                id="outlined-required"
                                type="text"
                                label="Department"
                                value={userProfile?.data?.department}

                            />
                            <div className="mp-textfield">
                                <label htmlFor="education">Education</label>
                                <select
                                    className="mp-select"
                                    id="education"

                                >

                                    <option value="High School" className="option">High School</option>
                                    <option value="Bachelor's Degree" className="option">Bachelor's Degree</option>
                                    <option value="Master's Degree" className="option">Master's Degree</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mp-button">

                        <Button type="submit">Submit</Button>
                    </div>

                </div>
            </div>
      
    );
}

export default UserTable;