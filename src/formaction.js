import axios from "axios";

const API_URL = "http://localhost:8085/api/login/add/user";

export const saveUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error("Error saving user:", error);
        return null;
    }
};

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return [];
    }
};