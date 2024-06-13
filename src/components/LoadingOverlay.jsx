const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-10 h-10 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
            <p className="ml-2 text-white">Loading...</p>
        </div>
    )
}

export default LoadingOverlay