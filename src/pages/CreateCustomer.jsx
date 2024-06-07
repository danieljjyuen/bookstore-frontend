import { useState } from "react";
import CustomerService from "../services/CustomerService";
import Notification from "../components/Notification";

const CreateCustomer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    const create = async (event) => {
        event.preventDefault();
        if(!username || !password || !name) {
            setMessage("Username, password, name cannot be empty");
            return;
        }
        console.log(username, " ", password, " ", name)
        try{
            const response = await CustomerService.createCustomer(username, name, password);
            setMessage("Account Created Sucessfully!")

        } catch(error) {
            setMessage("Try Different Username");
            console.log(error.message);
        } finally {
            setName("");
            setUsername("");
            setPassword("");
        }
    }

    return (
    
        <div className="border-form">
            <Notification message={message} />
            <form onSubmit={create}>
                <div>
                    username: 
                    <input 
                        className="input"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        id="username"
                    />
                </div>
                <div>
                    name: 
                    <input 
                        className="input"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        id="name"
                    />
                </div>
                <div>
                    password:
                    <input 
                        className="input"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id="password"
                    />
                </div>
                <div>
                    <button className="btn-blue" type="submit" id="createSubmit">Create</button>
                </div>
                
            </form>
        </div>
    )
}

export default CreateCustomer;