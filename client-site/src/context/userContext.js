import { useContext, useReducer, createContext } from "react";
export const UserContext = createContext();
const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { user: action.payload };
        case "UPDATE_USER":
            const updatedUser = {
                ...state.user,
                ...action.payload,
            };
            return { user: updatedUser };
        default:
            return state;
    }
};
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, { user: null });
    console.log("User context:", state);
    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};