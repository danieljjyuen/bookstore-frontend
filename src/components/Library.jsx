import Book from "./Book";

const Library = ({books}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Subtitle</th>
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

// "pk": 15,
//     "id": "",
//     "title": "",
//     "subtitle": null,
//     "publisher": "HarperCollins",
//     "publisherDate": "2021-08-19",
//     "description": "",
//     "pageCount": 132,
//     "smallThumbnail": "",
//     "thumbnail": "",
//     "listPriceAmount": 3.49,
//     "listPriceCurrency": "USD",
//     "retailPriceAmount": 3.49,
//     "retailPriceCurrency": "USD",
//     "buyLink": "",
//     "averageRating": 0,
//     "ratingsCount": 0,
//     "language": "en",
//     "kind": "books#volume",
//     "authors": "Charlotte McLaren",
//     "categories": "Biography & Autobiography
