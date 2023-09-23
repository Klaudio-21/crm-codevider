import axios from "axios";
export const getEmployees = async (queryParams) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/users${queryParams}`
        );
        return response.data;
    } catch (error) {
        console.log("Error fetching employees:", error);
    }
};
export const deleteEmployee = async (employeeId, deleteEmployee) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_URL}/user/${employeeId}`,
            deleteEmployee,
        );
        return response.data;
    } catch (error) {
        console.log("Error deleting employee:", error);
        throw error;
    }
};
export const updateEmployee = async (selectedId, updatedEmployee, setErrors) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_API_URL}/user/${selectedId}`,
            updatedEmployee,
        );
        console.log("Data updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating data:", error);
        if (error.response && error.response.data && error.response.data.message) {
            if (error.response.data.message.includes("email")) {
                setErrors({
                    email: "This email is registered before. Please use another email.",
                });
            }
        } else {
            console.log("Error updating employee:", error);
        }
    }
};
export const addNewEmployee = async (values, setErrors) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/users`,
            values,
        );
        console.log("Employee added successfully!");
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            if (error.response.data.message.includes("email")) {
                setErrors({
                    email: "This email is registered before. Please use another email.",
                });
            }
        } else {
            console.log("Error adding employee:", error);
        }
    }
}