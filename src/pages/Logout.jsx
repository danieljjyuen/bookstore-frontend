import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../reducer/customerReducer";
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        localStorage.setItem("token", null);
        navigate("/");
    }, []);

    return (
        <div>
            logging out...
        </div>
    )
}

export default Logout;