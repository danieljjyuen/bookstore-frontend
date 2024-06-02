import { Link } from 'react-router-dom';

const LoggedInNavBar = () => {
    return(
        <div>
        <Link style={{padding:5}} to="/">Home</Link>
        <Link style={{padding:5}} to="/mylibrary">My Library</Link>
        <Link style={{padding:5}} to="/logout">Logout</Link>
        </div>
    )
}

export default LoggedInNavBar;

