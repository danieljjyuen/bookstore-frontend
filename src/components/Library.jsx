import Book from "./Book";

const Library = ({books}) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 bg-gray-10">
                    <tr>
                        <th className="px-6 py-1 text-m"></th>
                        <th className="px-6 py-1 text-m">Title</th>
                        <th className="px-6 py-1 text-m">Authors</th>
                        <th className="px-6 py-1 text-m">Categories</th>
                        <th className="px-6 py-1 text-m">More Info</th>
                        <th className="px-6 py-1 text-m"></th>
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
