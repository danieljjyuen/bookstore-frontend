import { useState } from "react";

const BookInfo = ({book}) => {   
    const [showModal, setShowModal] = useState(false);
    const {title, subtitle, publisher, publisherDate, description, pageCount, thumbnail, listPriceAmount,
        listPriceCurrency, retailPriceAmount, retailPriceCurrency, buyLink, averageRating, ratingsCount,
        language, authors, categories} = book;
    return (
        <div>
            <button
                className="hover:text-gray-300 px-6 py-1 text-xs whitespace-nowrap bg-gray-100 rounded-x1"
                onClick={() => setShowModal(true)}>
                    More Info
            </button>
            {showModal ? (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                // style={
                //     {
                //         position: "fixed",
                //         top:0,
                //         left:0,
                //         right:0,
                //         bottom:0,
                //         backgroundColor: "rgba(255,255,255,0.75)"
                //     }
                //}
                >
                    <div className="relative bg-darkBeige border border-gray-300 rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4 overflow-auto max-h-[90vh]"
                    // style={
                    //     {
                    //         position: "absolute",
                    //         top:"40px",
                    //         left: "40px",
                    //         right: "40px",
                    //         bottom: "40px",
                    //         border: "1px solid #ccc",
                    //         background: "#fff",
                    //         overflow: "auto",
                    //         WebkitOverflowScrolling: "touch",
                    //         borderRadius: "4px",
                    //         outline: "none",
                    //         padding: "20px"
                    //     }
                    // }
                    >
                        <div className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        // style={{position: "absolute",
                        //     top:0,
                        //     right:0
                        // }}
                        >
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                        <img className="mb-4" src={thumbnail} />
                        <p className="mb-2">
                            <span className="font-bold">Title: </span>{title}</p>
                        {subtitle ? (<p className="mb-2">
                            <span className="font-bold">Subtitle: </span>{subtitle}</p>): null}
                        <p className="mb-2">
                            <span className="font-bold">Authors: </span> {authors}</p>
                        <p className="mb-2">
                            <span className="font-bold">Publisher: </span> {publisher}</p>
                        <p className="mb-2">
                            <span className="font-bold">Publisher Date: </span> {publisherDate}</p>
                        <p className="mb-2">
                            <span className="font-bold">Page Count: </span> {pageCount}</p>
                        <p className="mb-2">
                            <span className="font-bold">Language: </span> {language}</p>                                                
                        <p className="mb-2">
                            <span className="font-bold">Categories: </span> {categories}</p>
                        <p className="mb-2">
                            <span className="font-bold">Ratings Count: </span> {ratingsCount}</p>
                        <p className="mb-2">
                            <span className="font-bold">Average Rating: </span> {averageRating}</p>
                        <p className="mb-2">
                            <span className="font-bold">Retail Price: </span> {retailPriceAmount} {retailPriceCurrency}</p>
                        <p className="mb-2">
                            <span className="font-bold">List Price: </span>{listPriceAmount} {listPriceCurrency}</p>
                        <p className="mb-2">
                            <span className="font-bold">External Link: </span> <a className="text-blue-500 hover:underline" href={buyLink}>Link</a></p>
                        <p className="mb-2">
                            <span className="font-bold">Description: </span> {description}</p>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default BookInfo;