const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
///api/customers/  /create /login /addlibrary
import axios from 'axios';

const logIn = async (username, password) => {
    const response = await axios.post(`${baseUrl}/api/customers/login`,
    {
        "username": username,
        "password": password
    });

    return response.data;
}

const createCustomer = async (username, name, password) => {
    const response = await axios.post(`${baseUrl}/api/customers/create`,
    {
     "username":username,
     "name":name,
     "password":password   
    });

    return response.data;
}

const addToLibrary = async (bookId) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    };
    try{
        const response = await axios.post(`${baseUrl}/api/customers/addlibrary?bookid=${bookId}`,
            {},
            config
        );
        console.log("addtolibrary response");
        console.log(response);
    } catch(error) {
        console.error(error);
    }

}

export default {
    logIn,
    createCustomer,
    addToLibrary
}