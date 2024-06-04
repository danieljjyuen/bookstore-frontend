import { useState } from "react";

const BookInfo = ({book}) => {   
    const [showModal, setShowModal] = useState(false);
    const {title, subtitle, publisher, publisherDate, description, pageCount, thumbnail, listPriceAmount,
        listPriceCurrency, retailPriceAmount, retailPriceCurrency, buyLink, averageRating, ratingsCount,
        language, authors, categories} = book;
    return (
        <div>
            <button
                onClick={() => setShowModal(true)}>
                    More Info
            </button>
            {showModal ? (
                <div style={
                    {
                        position: "fixed",
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundColor: "rgba(255,255,255,0.75)"
                    }
                }>
                    <div style={
                        {
                            position: "absolute",
                            top:"40px",
                            left: "40px",
                            right: "40px",
                            bottom: "40px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px"
                        }
                    }>
                        <div style={{position: "absolute",
                            top:0,
                            right:0
                        }}>
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                        <img src={thumbnail} />
                        <br/>
                        Title: {title} 
                        <br />
                        {subtitle ? (<div>Subtitle: {subtitle}</div>): null}
                        Authors: {authors}
                        <br />
                        Publisher: {publisher}
                        <br />
                        Publisher Date: {publisherDate}
                        <br />
                        Page Count: {pageCount}
                        <br />
                        Language: {language}
                        <br />
                        Categories: {categories}
                        <br />
                        Ratings Count: {ratingsCount}
                        <br />
                        Average Rating: {averageRating}
                        <br />
                        Retail Price: {retailPriceAmount} {retailPriceCurrency}
                        <br />
                        List Price: {listPriceAmount} {listPriceCurrency}
                        <br />
                        External Link: <a href={buyLink}>Link</a>
                        <br />
                        Description: {description}
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default BookInfo;