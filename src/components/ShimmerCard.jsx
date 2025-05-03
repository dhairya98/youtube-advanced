const ShimmerCard = ({ watch, search }) => {
  if (watch) {
    // Layout for the Watch page (vertical, full-width)
    return (
      <div className="animate-pulse flex p-4 space-x-4 border-b border-gray-200">
        <div className="w-1/2 h-32 bg-gray-300 rounded-lg"></div>
        <div className="flex-1 space-y-2">
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (search) {
    // Layout for search results (list-style, wide thumbnail)
    return (
      <div className="animate-pulse flex p-4 space-x-4 border-b border-gray-100">
        <div className="w-96 h-52 bg-gray-300 rounded-lg"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
          <div className="h-3 bg-gray-200 rounded w-3/5"></div>
          <div className="h-3 bg-gray-200 rounded w-2/5"></div>
        </div>
      </div>
    );
  }

  // Default
  return (
    <div className="animate-pulse space-y-3 p-2">
      <div className="bg-gray-300 rounded-lg h-60 w-full"></div>
      <div className="flex space-x-3 mt-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
