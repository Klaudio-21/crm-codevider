import { useAuthContext } from "./contextHooks/useAuthContext";
import { useUserContext } from "./contextHooks/useUserContext";
export const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext();
    const { dispatch: userDispatch } = useUserContext();
    const logout = () => {
        try {
            authDispatch({ type: "LOGOUT", payload: null });
            userDispatch({ type: "SET_USER", payload: null });
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
        } catch (error) {
            console.log("Error:", error);
        }
    };
    return { logout };
};