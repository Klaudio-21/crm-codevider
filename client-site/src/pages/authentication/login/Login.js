import React, { useState } from "react";
import "./Login.css";
import TextField from "../../../components/UI/TextFieldComponent/TextField";
import { useLogin } from "../../../hooks/useLogin";
import { setupAxiosInterceptors } from "../../../services/axiosInterceptor";
import { HiOutlineMail, HiEye, HiEyeOff } from "react-icons/hi";
const Login = () => {
    setupAxiosInterceptors();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const { login } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(remember);
        await login(email, password, remember);
    };
    return (
        <>
            <div className="login-form">
                <div className="header">
                    <div className="text">LOGIN HERE</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input">
                            <TextField
                                className="textField-style"
                                type="text"
                                label="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />{" "}
                        </div>
                        <div className="input">
                            <TextField
                                className="textField-style"
                                type="password"
                                label="Password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />{" "}
                        </div>
                        <div className="remember-me">
                            <div className="form-group">
                                <label className="remember-me-checkbox">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        value={remember}
                                        onChange={() => setRemember(!remember)}
                                    />
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="submit-b">
                        <TextField className="submit-btn" type="submit" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </>
    );
};
export default Login;