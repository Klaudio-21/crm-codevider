import { createContext, useReducer } from "react";
export const ClientsContext = createContext();

export const clientsReducer = (state, action) => {
    switch (action.type) {
        case "SET_CLIENTS":
            return { clients: action.payload };
        case "SET_CLIENT":
            return { client: action.payload };
        case "CREATE_CLIENTS":
            return {
                clients: [action.payload, ...state.clients],
            };
        case "DELETE_CLIENT":

            return {
                clients: state.clients.filter((e) => e._id !== action.payload),
            };
        case "UPDATE_CLIENT":
            console.log("stateeeee clients", state.clients)
            return {
                clients: state.clients.map((e) =>
                    e._id === action.payload._id ? action.payload : e
                ),
            };
        default:
            return state;
    }
};
export const ClientsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clientsReducer, {
        clients: null,
    });
    console.log("Clients context:", state);
    return (
        <ClientsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ClientsContext.Provider>
    );
};