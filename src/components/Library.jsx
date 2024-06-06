import Book from "./Book";

const Library = ({books}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Categories</th>
                        <th>More Info</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    books.map(book => 
                    <Book key={book.id} book={book} />)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Library;
