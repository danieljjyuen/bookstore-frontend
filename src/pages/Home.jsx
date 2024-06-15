import Library from "../components/Library"
import { useState, useEffect } from "react";
import BookQueryService from "../services/BookQueryService";
import LoadingOverlay from "../components/LoadingOverlay";
import Pagination from "../components/Pagination";

const Home = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [queryParams, setQueryParams] = useState({ title: "", author: "" });

    const fetchBooks = async (title, author, pageNumber) => {
        try {
            let response;
            if (title && author) {
                response = await BookQueryService.searchByTitleAuthor(title, author, pageNumber, 10);
            } else if (title) {
                response = await BookQueryService.searchByTitle(title, pageNumber, 10);
            } else if (author) {
                response = await BookQueryService.searchByAuthor(author, pageNumber, 10);
            }
            console.log(response.books);
            setBooks(response.books);
            setTotalPages(response.totalPages);
            if(response.books.length == 0){
                window.alert("Please query more result");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchBooks(queryParams.title, queryParams.author, page);
    }, [page]);

    const handleSearch = (event) => {
        event.preventDefault();
        setQueryParams({ title, author });
        setPage(0); // Reset to the first page on a new search
        fetchBooks(title, author, 0); //fetches book on first page
    };

    const handleNextPage = () => {
        if (page < totalPages ) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    //handle search depending on whether query is by title, author or both
    // const handleSearch = async (event) => {
    //     event.preventDefault();
    //     try {
    //         if(title && author) {
    //             const response = await BookQueryService.searchByTitleAuthor(title, author);
    //             setBooks(response);
    //             if(response.length == 0){
    //                 window.alert("Please query more result");
    //             }
    //         }else if(title) {
    //             const response = await BookQueryService.searchByTitle(title);
    //             setBooks(response);
    //             if(response.length == 0){
    //                 window.alert("Please query more result");
    //             }
    //         }else if(author){
    //             const response = await BookQueryService.searchByAuthor(author);
    //             setBooks(response);
    //             if(response.length == 0){
    //                 window.alert("Please query more result");
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     } finally {
    //         setTitle("");
    //         setAuthor("");
    //     }
    // }

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
            {books.length>0? 
            (
            <>
                <Library books={books}/> 
                <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPreviousPage={handlePreviousPage}
                            onNextPage={handleNextPage}
                />
            </>
            ): null}
            
        </div>
    )
}

export default Home;