const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

import axios from 'axios';
const loadMoreFromApi = async (query) => {
    try {
        const response = await axios.get(`${baseUrl}/books?q=${query}`);
        return response.data;
    }catch (error) {
        console.log(error.message);
    }
}

const searchByTitle = async (title) => {
    try{
        const response =await axios.get(`${baseUrl}/api/books/search/title?title=${title}`);
        
        return response.data;
    } catch(error) {
        console.log(error.message);
    }
}

const searchByAuthor = async (author) => {
    try {
        const response = await axios.get(`${baseUrl}/api/books/search/author?author=${author}`)

        return response.data;
    } catch(error) {
        console.log(error.message);
    }
}

    const searchByTitleAuthor = async (title, author) => {  
        try{
            const response = await axios.get(`${baseUrl}/api/books/search/title-author?title=${title}&&author=${author}`)

            return response.data;
        }catch(error){
            console.log(error.message);
        }
    }

//     @GetMapping("/search/bookid")
//     public ResponseEntity<Book> findById(@RequestParam("id") String id) {
//         Optional<Book> book = bookDBService.findById(id);
//         if(book.isPresent()){
//             Book bookPresent = book.get();
//             return ResponseEntity.ok(bookPresent);
//         }else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @GetMapping("/search/bookpk")
//     public ResponseEntity<Book> findByPk(@RequestParam("pk") long pk) {
//         Optional<Book> book = bookDBService.findByPk(pk);
//         if(book.isPresent()){
//             Book bookPresent = book.get();
//             return ResponseEntity.ok(bookPresent);
//         }else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @GetMapping("/search/customerid")
//     public ResponseEntity<Set<Book>> findByCustomerId(@RequestParam("id") long id) {
//         Set<Book> books = bookDBService.findByCustomerId(id);
//         return ResponseEntity.ok(books);
//     }

export default {
    searchByTitle,
    loadMoreFromApi,
    searchByAuthor,
    searchByTitleAuthor
};