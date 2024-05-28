const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
///api/customers/  /create /login /addlibrary
import axios from 'axios';

const logIn = () => {

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

const addToLibrary = () => {

}

export default {
    logIn,
    createCustomer,
    addToLibrary

}