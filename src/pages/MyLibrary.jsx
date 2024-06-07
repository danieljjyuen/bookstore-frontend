
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
            <div className="flex flex-col items-start mt-6 max-h-[600px] ">
                <p className="absolute top-0 right-0 pr-4">Welcome {customerName}</p>
                <Library books={books}/>
            </div>
        )
    }else {
        return (
            <div>Add some books first</div>
        )
    }
}
export default MyLibrary;