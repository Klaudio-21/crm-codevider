import axios from "axios";
import { useUserContext } from "../hooks/contextHooks/useUserContext";

export const getUserProfile = async () => {
  
    const id = JSON.parse(localStorage.getItem("user"))?._id;
    

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/user/${id}`,
          
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};