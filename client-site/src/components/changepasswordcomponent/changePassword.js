import { React, useState } from "react";
import TextField from '../UI/TextFieldComponent/TextField'
import "./changePassword.css"
import Button from '../UI/ButtonComponent/Button'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
const ChangePasswordComponent = () => {
    const [showCurrPassword, setShowCurrPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowCurrPassword = () => {
        setShowCurrPassword(!showCurrPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <div className="cps-container">
            <div className="cps-form">
                <div className="cps-h1">
                    <h2>Change Password</h2>
                </div>
                <div className="cps-form-group">
                    <div className="cps-input-icon">
                        <TextField
                            type={showCurrPassword ? "text" : "password"}
                            name="currPassword"
                            placeholder="Current Password"
                            className="cps-input"

                        />
                        <span
                            className="cps-icon"
                            onClick={toggleShowCurrPassword}
                        >
                            {showCurrPassword ? (
                                <AiOutlineEye onClick={toggleShowCurrPassword} />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </span>
                    </div>
                </div>
                <div className="cps-form-group">
                    <div className="cps-input-icon">
                        <TextField
                            type={showNewPassword ? "text" : "password"}
                            name="password"
                            placeholder="New Password"
                            className="cps-input"

                        />
                        <span
                            className="cps-icon"
                            onClick={toggleShowNewPassword}
                        >
                            {showNewPassword ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </span>
                    </div>
                </div>
                <div className="cps-form-group">
                    <div className="cps-input-icon">
                        <TextField
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="cps-input"

                        />
                        <span
                            className="cps-icon"
                            onClick={toggleShowConfirmPassword}
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </span>
                    </div>
                </div>
                <Button
                    type="submit"
                 className="cps-submit-btn"

                >
                    Reset Password
                </Button>
            </div>
        </div>
    );
};
export default ChangePasswordComponent;