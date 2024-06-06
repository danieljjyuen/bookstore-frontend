import { useSelector } from "react-redux";
import CustomerService from "../services/CustomerService";
import { useDispatch } from "react-redux";
import { addBook } from '../reducer/customerReducer';
import BookInfo from "../Modal/BookInfo";

const Book = ({book}) => {
    //deconstruct book variables
    const {id, title, authors, smallThumbnail, subtitle, categories} = book;
    const authenticated = useSelector(state => state.customer.isAuthenticated);
    const myLibrary = useSelector(state => state.customer.myLibrary);
    const bookOwned = myLibrary.find(book => book.id === id);
    const dispatch = useDispatch();

    console.log(book);
    const handleAdd = async (event) => {
        event.preventDefault();
        const response = await CustomerService.addToLibrary(id);
        dispatch(addBook(book));
        
    }
    if(book){
        return (
            <tr key={id} id={id}>
                <td><img src={smallThumbnail} /></td>
                <td>{title}</td>
                <td>{authors}</td>
                <td>{categories}</td>
                <td><BookInfo book={book} /></td>
                <td>
                    {authenticated && !bookOwned &&
                    <button onClick={handleAdd}>Add</button>}
                </td>

            </tr>

        )
    }
}

export default Book;