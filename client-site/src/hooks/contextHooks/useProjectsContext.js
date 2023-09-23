import { ProjectsContext } from "../context/projectsContext";
import { useContext } from "react";

export const useProjectsContext = () => {
    const context = useContext(ProjectsContext);

    if (!context) {
        throw Error("useProjectsContext must be used inside an ProjectsContextProvider");
    }
    return context;
};
