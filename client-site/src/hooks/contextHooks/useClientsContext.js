
import { ClientsContext } from "../../context/clientsContext";
import { useContext } from "react";
export const useClientsContext = () => {
    const context = useContext(ClientsContext);
    if (!context) {
        throw Error(
            "useClientsContext must be used inside an ClientsContextProvider"
        );
    }
    return context;
};
