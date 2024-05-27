import { Link } from 'react-router-dom';

const LoggedInNavBar = () => {
    return(
        <div>
        <Link style={{padding:5}} to="/">Home</Link>
        <Link style={{padding:5}} to="/create">Create Account</Link>
        <Link style={{padding:5}} to="/login">Login</Link>
        </div>
    )
}

export default LoggedInNavBar;

