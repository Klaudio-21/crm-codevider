import axios from "axios";


export const getClients = async (queryParams) => {

    
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/clients`,
           
        );
        return response.data;
    } catch (error) {
        console.log("Error fetching clients:", error);
    }
};

export const deleteClient = async (clientId) => {
 
 
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_URL}/client/${clientId}`,
            
        );
        if (response.status === 204) {
            console.log("Employee deleted successfully.");
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateClient = async (selectedId, updatedClient, setErrors) => {

  
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_API_URL}/client/${selectedId}`,
            updatedClient,
          
        );
        console.log("Data updated succssfully:", response.data);
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
            console.log("Error updating client:", error);
        }
    }
};

export const addNewClient = async (values, setErrors) => {
  
   
    try {

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/client`, values)
        console.log("Client added successfully!");
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            if (error.response.data.message.includes("email")) {
                setErrors({ email: "This email is registered before. Please use another email." });
            }
        } else {
            console.log("Error adding client:", error);
        }
    }
}