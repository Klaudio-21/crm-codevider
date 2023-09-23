import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw Error("useUserContext must be used inside an UserContextProvider");
    }
    return context;
};