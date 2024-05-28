import Book from "./Book";

const Library = ({books}) => {
    return (
        <div>
            test
            {
                books.map(book => 
                <Book key={book.id} book={book} />)
            }
        </div>
    )
}

export default Library;