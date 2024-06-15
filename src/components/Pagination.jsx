

const Pagination = ({ page, totalPages, onPreviousPage, onNextPage }) => {

    return (
        <div className="flex justify-between mt-4">
        <button
            className="btn-blue"
            onClick={onPreviousPage}
            disabled={page === 0}
        >
            Previous
        </button>
        <span>Page {page + 1} of {totalPages}</span>
        <button
            className="btn-blue"
            onClick={onNextPage}
            disabled={page >= totalPages - 1}
        >
            Next
        </button>
        </div>
    );
    
}

export default Pagination;