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

    const handleAdd = async (event) => {
        event.preventDefault();
        const response = await CustomerService.addToLibrary(id);
        dispatch(addBook(book));
        
    }
    if(book){
        return (
            <tr key={id} id={id}>
                <td className="px-6 py-1 text-xs whitespace-nowrap"><img src={smallThumbnail} /></td>
                <td className="px-6 py-1 text-xs whitespace-nowrap">{title}</td>
                <td className="px-6 py-1 text-xs whitespace-nowrap">{authors}</td>
                <td className="px-6 py-1 text-xs whitespace-nowrap">{categories}</td>
                <td><BookInfo book={book} /></td>
                <td>
                    {authenticated && !bookOwned &&
                    <button className="px-6 py-1 hover:text-gray-300 text-xs bg-gray-100 rounded-x1" onClick={handleAdd}>Add</button>}
                </td>

            </tr>

        )
    }
}

export default Book;