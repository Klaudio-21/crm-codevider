import { createContext, useReducer } from "react";

export const EmployeesContext = createContext();

export const employeesReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMPLOYEES":
            return { employees: action.payload };
        case "CREATE_EMPLOYEE":
            return {
                employees: [action.payload, ...state.employees],
            };
        case "DELETE_EMPLOYEE":
            return {
                employees: state.employees.filter((e) => e._id !== action.payload),
            };
        case "UPDATE_EMPLOYEE":
            return {
                employees: state.employees.map((e) =>
                    e._id === action.payload._id ? action.payload : e
                ),
            };
    }
};

export const EmployeesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeesReducer, {
        employees: null,
    });
    console.log("type of", typeof state.employees)
    console.log("Employees context:", state);

    return (
        <EmployeesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </EmployeesContext.Provider>
    );
};
