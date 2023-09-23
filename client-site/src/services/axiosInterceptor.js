import axios from "axios";
export const setupAxiosInterceptors = (logout, navigate) => {

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                logout();
                // shto navigate per te fq e login
            }
            return Promise.reject(error);
        }
    );

    
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("jwt");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};