import { createContext, useReducer } from "react";

export const ProjectsContext = createContext();

export const projectsReducer = (state, action) => {
    switch (action.type) {
        case "SET_PROJECTS":
            return { projects: action.payload };
        case "SET_PROJECT":
            return { project: action.payload };
        case "CREATE_PROJECTS":
            return {
                projects: [action.payload, ...state.projects],
            };
        case "DELETE_PROJECT":
            return {
                projects: state.projects.filter((e) => e._id !== action.payload),
            };
        case "UPDATE_PROJECT":
            return {
                projects: state.projects.map((e) =>
                    e._id === action.payload._id ? action.payload : e
                ),
            };
        default:
            return state;
    }
};

export const ProjectsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        projects: null,
    });

    console.log("Projects context:", state);
    return (
        <ProjectsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProjectsContext.Provider>
    );
};
