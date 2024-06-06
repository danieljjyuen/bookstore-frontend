import { Link } from 'react-router-dom';

const LoggedInNavBar = () => {
    return(
        <div className="nav-bar">
        <Link className="link-bar" to="/">Home</Link>
        <Link className="link-bar" to="/mylibrary">My Library</Link>
        <Link className="link-bar" to="/logout">Logout</Link>
        </div>
    )
}

export default LoggedInNavBar;

