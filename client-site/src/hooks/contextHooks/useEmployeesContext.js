import { EmployeesContext } from "../../context/employeesContext";
import { useContext } from "react";

export const useEmployeesContext = () => {
    const context = useContext(EmployeesContext);

    if (!context) {
        throw Error(
            "useEmployeesContext must be used inside an EmployeesContextProvider"
        );
    }
    return context;
};
