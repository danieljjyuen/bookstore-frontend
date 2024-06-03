import Library from "../components/Library"
import { useState } from "react";
import BookQueryService from "../services/BookQueryService";

const Home = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    

    //handle search depending on whether query is by title, author or both
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            if(title && author) {
                const response = await BookQueryService.searchByTitleAuthor(title, author);
                setBooks(response);
                if(response.length == 0){
                    window.alert("Please query more result");
                }
            }else if(title) {
                const response = await BookQueryService.searchByTitle(title);
                setBooks(response);
                if(response.length == 0){
                    window.alert("Please query more result");
                }
            }else if(author){
                const response = await BookQueryService.searchByAuthor(author);
                setBooks(response);
                if(response.length == 0){
                    window.alert("Please query more result");
                }
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setTitle("");
            setAuthor("");
        }
 
    }

    const handleQuery = async (event) => {
        event.preventDefault();
        try {
            const response = await BookQueryService.loadMoreFromApi(query);
            setQuery("");
            window.alert(response);
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <div>
                    Title: <input
                    name="title"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    Author: <input 
                    name="author"
                    type="text"
                    id="author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)} />
                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
            <form onSubmit={handleQuery}>
                Query More Results
                <input 
                name="query"
                type="text"
                id="query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}/>
                <button type="submit">search</button>
            </form>
            <Library books={books}/>
        </div>
    )
}

export default Home;