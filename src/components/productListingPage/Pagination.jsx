/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  setCurrentPage,
}) => {
  return (
    <nav className="mt-4 flex items-center" aria-label="Pagination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 mr-2 ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-300"
        }`}>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`relative rounded-md inline-flex items-center px-4 py-2 text-sm font-semibold ${
            currentPage === index + 1
              ? "bg-indigo-600 text-white"
              : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          } mr-2`}>
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ml-2 ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-300"
        }`}>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Pagination;
