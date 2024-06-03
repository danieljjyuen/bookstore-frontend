
import { useEffect, useState } from "react";
import BookQueryService from "../services/BookQueryService";
import Library from "../components/Library";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MyLibrary = () => {
    const customerName = useSelector(state => state.customer.name);
    const books = useSelector(state => state.customer.myLibrary);
    const authenticated = useSelector(state => state.customer.isAuthenticated)
    const navigate = useNavigate();

    useEffect(() => {
        if(!authenticated){
            navigate("/");
        }
        
    },[])
    
    if(books.length > 0){
        return (
            <div>
                Welcome {customerName}
                <Library books={books}/>
            </div>
        )
    }
}
export default MyLibrary;