/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductListingPage = () => {
  const [productsData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, [productsPerPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProductData(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const totalPages = Math.ceil(productsData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProductsData = productsData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  console.log(productsData, "productsData");

  return (
    <div className="flex flex-col h-screen">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-xl font-extrabold">Ecommerce Page</h1>
        </div>
      </nav>
      <div className="flex flex-wrap justify-center mt-20">
        {productsData.length > 0 ? (
          currentProductsData?.map((product, index) => (
            <div key={product?.id}>
              <ProductCard
                id={product?.id}
                title={product?.title}
                price={product?.price}
                thumbnail={product?.thumbnail}
              />
            </div>
          ))
        ) : (
          <h1>Loading..</h1>
        )}
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-700 mt-2">
          Showing{" "}
          <span className="font-medium">
            {(currentPage - 1) * productsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(currentPage * productsPerPage, productsData.length)}
          </span>{" "}
          of <span className="font-medium">{productsData.length}</span> results
        </p>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          productLength={productsData.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductListingPage;
