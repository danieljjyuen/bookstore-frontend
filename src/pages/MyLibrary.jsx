
import { useEffect, useState } from "react";
import BookQueryService from "../services/BookQueryService";
import Library from "../components/Library";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MyLibrary = () => {
    const customerName = useSelector(state => state.customer.name);
    const [books, setBooks] = useState([]);
    const authenticated = useSelector(state => state.customer.isAuthenticated)
    const navigate = useNavigate();

    useEffect(() => {
        if(!authenticated){
            navigate("/");
        }
        const fetchBooks = async () => {
            try {
                const response = await BookQueryService.searchByCustomerUsername();
                if (response) {
                    setBooks(response);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        
        fetchBooks();
    },[])
    

    console.log(books);


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