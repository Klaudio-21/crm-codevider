import axios from "axios";
import { useAuthContext } from "./contextHooks/useAuthContext";
import { useUserContext } from "./contextHooks/useUserContext";
// import { useNavigate } from "react-router-dom";
export const useLogin = () => {
    const { dispatch: authDispatch } = useAuthContext();
    const { dispatch: userDispatch } = useUserContext();
    // const navigate = useNavigate();
    const login = async (email, password, remember) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    email,
                    password,
                    remember,
                }
            );
            const { token, user } = response.data;
            authDispatch({ type: "LOGIN", payload: user });
            userDispatch({ type: "SET_USER", payload: user });
            localStorage.setItem("jwt", token);
            localStorage.setItem("user", JSON.stringify(user));
            // navigate("/");
        } catch (error) {
            console.log("Error:", error);
        }
    };
    return { login };
};




















