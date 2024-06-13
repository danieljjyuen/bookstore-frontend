import Library from "../components/Library"
import { useState } from "react";
import BookQueryService from "../services/BookQueryService";
import LoadingOverlay from "../components/LoadingOverlay";

const Home = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
            //loading overlay
            setIsLoading(true);
            const response = await BookQueryService.loadMoreFromApi(query);
            setQuery("");
            window.alert(response);
        } catch (error) {
            console.log(error.message);
        }finally {
            setIsLoading(false);
        }

    }
    return (
        <div className="flex flex-col items-start mt-6 max-h-[600px]">
            {isLoading && <LoadingOverlay />}
            <div className="flex space-x-4 mb-4 w-full justify-around">
                <form className="mr-4" onSubmit={handleSearch}>
                    <div className="p-1">
                        Title: <input
                        className="input"
                        name="title"
                        type="text"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div className="p-1">
                        Author: <input 
                        className="input"
                        name="author"
                        type="text"
                        id="author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)} />
                    </div>
                    <div>
                        <button className="btn-blue" type="submit">Search</button>
                    </div>
                </form>
                <form className="mr-4 mt-10" onSubmit={handleQuery}>
                    <div className="p-1">
                        Query More Results:
                        <input 
                        className="input"
                        name="query"
                        type="text"
                        id="query"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}/>
                    </div>
                    <div>
                        <button className="btn-blue" type="submit">search</button>
                    </div>
                </form>
            </div>
            {books.length>0? <Library books={books}/> : null}
            
        </div>
    )
}

export default Home;