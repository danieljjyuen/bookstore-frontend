import { Link } from 'react-router-dom';

const DefaultNavBar = () => {
    return(
        <div className="nav-bar">
        <Link className="link-bar" to="/">Home</Link>
        <Link className="link-bar" to="/create">Create Account</Link>
        <Link className="link-bar" to="/login">Login</Link>
        </div>
    )
}

export default DefaultNavBar;

