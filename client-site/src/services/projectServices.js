import axios from "axios";

export const getProjects = async (queryParams) => {

   
    try {

        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/projects`,
           
        );
        return response.data;
    } catch (error) {
        console.log("Error fetching projects:", error);
    }
};

export const deleteProject = async (projectId) => {
  
  

    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_URL}/project/${projectId}`,
            
        );
        if (response.status === 204) {
            console.log("Project deleted successfully.");
        }
    } catch (error) {
        console.log("Error deleting project:", error);
    }
};

export const updateProject = async (selectedId, updatedProject, setErrors) => {
 
 

    try {
        const response = await axios.put(
            `${process.env.REACT_APP_API_URL}/project/${selectedId}`,
            updatedProject,
      
        );
        console.log("Data updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating data:", error);
    }
};

export const addNewProject = async (values) => {

   

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/project`,
            values
        );
        return response.data;
    } catch (error) {
        console.log("Error adding project:", error);
    }
};
