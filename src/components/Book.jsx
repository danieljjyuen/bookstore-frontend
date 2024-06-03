import { useSelector } from "react-redux";
import CustomerService from "../services/CustomerService";
import { useDispatch } from "react-redux";
import { addBook } from '../reducer/customerReducer';

const Book = ({book}) => {
    const {id, title, author} = book;
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
            <div id={id}>
                Title: {title}
                Author: {author}
                {
                    authenticated && !bookOwned &&
                    <button onClick={handleAdd}>Add</button>
                }
            </div>
        )
    }
}

export default Book;

// description
// : 
// "Join in the fun with Sam-I-Am in this iconic classic by Dr. Seuss that will have readers of all ages craving Green Eggs and Ham! This is a beloved classic from the bestselling author of Horton Hears a Who!, The Lorax, and Oh, the Places You’ll Go! I do not like green eggs and ham. I do not like them, Sam-I-am. With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. Kids will love the terrific tongue-twisters as the list of places to enjoy green eggs and ham gets longer and longer...and they might even learn a thing or two about trying new things! And don’t miss the Netflix series adaptation! Beginner Books are fun, funny, and easy to read. Originally created by Dr. Seuss himself, these unjacketed hardcover early readers encourage children to read all on their own, using simple words and illustrations. Smaller than the classic large format Seuss picture books like How the Grinch Stole Christmas! and Happy Birthday to You!, these portable packages are perfect for practicing readers ages 3-7, and lucky parents too!"
// id
// : 
// "ZK7xAwAAQBAJ"
// kind
// : 
// "books#volume"
// language
// : 
// "en"
// listPriceAmount
// : 
// 7.99
// listPriceCurrency
// : 
// "USD"
// pageCount
// : 
// 36
// pk
// : 
// 4
// publisher
// : 
// "RH Childrens Books"
// publisherDate
// : 
// "2013-09-24"
// ratingsCount
// : 
// 8
// retailPriceAmount
// : 
// 7.99
// retailPriceCurrency
// : 
// "USD"
// smallThumbnail
// : 
// "http://books.google.com/books/content?id=ZK7xAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
// subtitle
// : 
// null
// thumbnail
// : 
// "http://books.google.com/books/content?id=ZK7xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// title
// : 
// "Green Eggs and Ham"