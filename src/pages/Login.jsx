import { useState } from 'react'
import CustomerService from '../services/CustomerService'
import Notification from '../components/Notification'
import { useDispatch } from 'react-redux'
import { fetchBooks, loginSuccess } from '../reducer/customerReducer'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginHandler = async (event) => {
        event.preventDefault();
        if(!username || !password) {
            setMessage("Username and password cannot be empty");
            return;
        }
        try {
            const response = await CustomerService.logIn(username, password);
            console.log("login handler : ", response.token);
            console.log("login handler : ", response.name);

            window.localStorage.setItem('token', response.token);
            
            dispatch(loginSuccess(response.name));
            dispatch(fetchBooks());
            //redirect to homepage
            navigate("/");
        } catch(error) {
            console.log(error.message);
            setMessage("Incorrect username or password, please try again")
        } finally {
            setPassword("");
            setUsername("");
        }
    }

    return (
        <div className="border-form">
            <Notification message={message} />
            <form onSubmit={loginHandler}>
                <div>
                    username : <input 
                            className="input"
                            name="username"
                            value={username}
                            type="text"
                            onChange={(event) => setUsername(event.target.value)}
                            id="username"
                        />
                </div>
                <div>
                    password : <input 
                            className="input"
                            name="password"
                            value={password}
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                </div>
                <div>
                    <button className="btn-blue" type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login