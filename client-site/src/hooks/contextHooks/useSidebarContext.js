import { useContext } from "react";
import { SidebarContext }  from "../../context/sidebarContext"

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw Error("useSidebarContext must be used inside an UserContextProvider");
    }
    return context;
};